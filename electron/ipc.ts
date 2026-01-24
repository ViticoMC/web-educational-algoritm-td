import { ipcMain } from "electron";
import { getDatabase } from "../src/lib/db/database";

/**
 * IPC Handlers - Comunicación segura entre Electron main y React frontend
 * Todos los accesos a BD pasan por aquí
 */

// ============================================================================
// RELACIONES
// ============================================================================

ipcMain.handle("db:get-relaciones", () => {
  try {
    const db = getDatabase();
    const stmt = db.prepare("SELECT * FROM relacion ORDER BY created_at DESC");
    return { success: true, data: stmt.all() };
  } catch (error) {
    console.error("Error fetching relaciones:", error);
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle(
  "db:create-relacion",
  (
    _event,
    datos: {
      nombre: string;
      atributos: string;
      descripcion?: string;
    },
  ) => {
    try {
      const db = getDatabase();
      const stmt = db.prepare(`
      INSERT INTO relacion (nombre, atributos, descripcion)
      VALUES (?, ?, ?)
    `);
      const result = stmt.run(
        datos.nombre,
        datos.atributos,
        datos.descripcion || null,
      );

      // Log en historial
      db.prepare(
        `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
      ).run("CREATE_RELACION", JSON.stringify(datos));

      return { success: true, id: result.lastInsertRowid };
    } catch (error) {
      console.error("Error creating relacion:", error);
      return { success: false, error: (error as Error).message };
    }
  },
);

ipcMain.handle(
  "db:update-relacion",
  (
    _event,
    id: number,
    datos: {
      nombre?: string;
      atributos?: string;
      descripcion?: string;
    },
  ) => {
    try {
      const db = getDatabase();
      const updates: string[] = [];
      const values: unknown[] = [];

      if (datos.nombre !== undefined) {
        updates.push("nombre = ?");
        values.push(datos.nombre);
      }
      if (datos.atributos !== undefined) {
        updates.push("atributos = ?");
        values.push(datos.atributos);
      }
      if (datos.descripcion !== undefined) {
        updates.push("descripcion = ?");
        values.push(datos.descripcion);
      }

      if (updates.length === 0) {
        return { success: false, error: "No fields to update" };
      }

      updates.push("updated_at = CURRENT_TIMESTAMP");
      values.push(id);

      const query = `UPDATE relacion SET ${updates.join(", ")} WHERE id = ?`;
      db.prepare(query).run(...values);

      // Log en historial
      db.prepare(
        `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
      ).run("UPDATE_RELACION", JSON.stringify({ id, ...datos }));

      return { success: true };
    } catch (error) {
      console.error("Error updating relacion:", error);
      return { success: false, error: (error as Error).message };
    }
  },
);

ipcMain.handle("db:delete-relacion", (_event, id: number) => {
  try {
    const db = getDatabase();
    db.prepare("DELETE FROM relacion WHERE id = ?").run(id);

    // Log en historial
    db.prepare(
      `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
    ).run("DELETE_RELACION", JSON.stringify({ id }));

    return { success: true };
  } catch (error) {
    console.error("Error deleting relacion:", error);
    return { success: false, error: (error as Error).message };
  }
});

// ============================================================================
// CONJUNTOS DE DEPENDENCIAS FUNCIONALES
// ============================================================================

ipcMain.handle("db:get-conjuntodf", (_event, relacionId: number) => {
  try {
    const db = getDatabase();
    const stmt = db.prepare(`
      SELECT * FROM conjuntodf 
      WHERE relacion_id = ? 
      ORDER BY created_at DESC
    `);
    return { success: true, data: stmt.all(relacionId) };
  } catch (error) {
    console.error("Error fetching conjuntodf:", error);
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle(
  "db:create-conjuntodf",
  (
    _event,
    datos: {
      nombre: string;
      relacion_id: number;
      descripcion?: string;
    },
  ) => {
    try {
      const db = getDatabase();
      const stmt = db.prepare(`
      INSERT INTO conjuntodf (nombre, relacion_id, descripcion)
      VALUES (?, ?, ?)
    `);
      const result = stmt.run(
        datos.nombre,
        datos.relacion_id,
        datos.descripcion || null,
      );

      db.prepare(
        `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
      ).run("CREATE_CONJUNTODF", JSON.stringify(datos));

      return { success: true, id: result.lastInsertRowid };
    } catch (error) {
      console.error("Error creating conjuntodf:", error);
      return { success: false, error: (error as Error).message };
    }
  },
);

ipcMain.handle(
  "db:update-conjuntodf",
  (
    _event,
    id: number,
    datos: {
      nombre?: string;
      descripcion?: string;
    },
  ) => {
    try {
      const db = getDatabase();
      const updates: string[] = [];
      const values: unknown[] = [];

      if (datos.nombre !== undefined) {
        updates.push("nombre = ?");
        values.push(datos.nombre);
      }
      if (datos.descripcion !== undefined) {
        updates.push("descripcion = ?");
        values.push(datos.descripcion);
      }

      if (updates.length === 0) {
        return { success: false, error: "No fields to update" };
      }

      updates.push("updated_at = CURRENT_TIMESTAMP");
      values.push(id);

      const query = `UPDATE conjuntodf SET ${updates.join(", ")} WHERE id = ?`;
      db.prepare(query).run(...values);

      db.prepare(
        `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
      ).run("UPDATE_CONJUNTODF", JSON.stringify({ id, ...datos }));

      return { success: true };
    } catch (error) {
      console.error("Error updating conjuntodf:", error);
      return { success: false, error: (error as Error).message };
    }
  },
);

ipcMain.handle("db:delete-conjuntodf", (_event, id: number) => {
  try {
    const db = getDatabase();
    db.prepare("DELETE FROM conjuntodf WHERE id = ?").run(id);

    db.prepare(
      `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
    ).run("DELETE_CONJUNTODF", JSON.stringify({ id }));

    return { success: true };
  } catch (error) {
    console.error("Error deleting conjuntodf:", error);
    return { success: false, error: (error as Error).message };
  }
});

// ============================================================================
// DEPENDENCIAS FUNCIONALES
// ============================================================================

ipcMain.handle("db:get-df", (_event, conjuntoDFId: number) => {
  try {
    const db = getDatabase();
    const stmt = db.prepare(`
      SELECT * FROM df 
      WHERE conjuntodf_id = ? 
      ORDER BY created_at DESC
    `);
    return { success: true, data: stmt.all(conjuntoDFId) };
  } catch (error) {
    console.error("Error fetching df:", error);
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle(
  "db:create-df",
  (
    _event,
    datos: {
      implicantes: string;
      implicados: string;
      conjuntodf_id: number;
    },
  ) => {
    try {
      const db = getDatabase();
      const stmt = db.prepare(`
      INSERT INTO df (implicantes, implicados, conjuntodf_id)
      VALUES (?, ?, ?)
    `);
      const result = stmt.run(
        datos.implicantes,
        datos.implicados,
        datos.conjuntodf_id,
      );

      db.prepare(
        `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
      ).run("CREATE_DF", JSON.stringify(datos));

      return { success: true, id: result.lastInsertRowid };
    } catch (error) {
      console.error("Error creating df:", error);
      return { success: false, error: (error as Error).message };
    }
  },
);

ipcMain.handle(
  "db:update-df",
  (
    _event,
    id: number,
    datos: {
      implicantes?: string;
      implicados?: string;
    },
  ) => {
    try {
      const db = getDatabase();
      const updates: string[] = [];
      const values: unknown[] = [];

      if (datos.implicantes !== undefined) {
        updates.push("implicantes = ?");
        values.push(datos.implicantes);
      }
      if (datos.implicados !== undefined) {
        updates.push("implicados = ?");
        values.push(datos.implicados);
      }

      if (updates.length === 0) {
        return { success: false, error: "No fields to update" };
      }

      updates.push("updated_at = CURRENT_TIMESTAMP");
      values.push(id);

      const query = `UPDATE df SET ${updates.join(", ")} WHERE id = ?`;
      db.prepare(query).run(...values);

      db.prepare(
        `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
      ).run("UPDATE_DF", JSON.stringify({ id, ...datos }));

      return { success: true };
    } catch (error) {
      console.error("Error updating df:", error);
      return { success: false, error: (error as Error).message };
    }
  },
);

ipcMain.handle("db:delete-df", (_event, id: number) => {
  try {
    const db = getDatabase();
    db.prepare("DELETE FROM df WHERE id = ?").run(id);

    db.prepare(
      `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
    ).run("DELETE_DF", JSON.stringify({ id }));

    return { success: true };
  } catch (error) {
    console.error("Error deleting df:", error);
    return { success: false, error: (error as Error).message };
  }
});

// ============================================================================
// HISTORIAL
// ============================================================================

ipcMain.handle("db:get-historial", (_event, limit = 50) => {
  try {
    const db = getDatabase();
    const stmt = db.prepare(`
      SELECT * FROM historial 
      ORDER BY created_at DESC 
      LIMIT ?
    `);
    return { success: true, data: stmt.all(limit) };
  } catch (error) {
    console.error("Error fetching historial:", error);
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle(
  "db:add-historial",
  (_event, operacion: string, datos?: unknown) => {
    try {
      const db = getDatabase();
      db.prepare(
        `
      INSERT INTO historial (operacion, datos)
      VALUES (?, ?)
    `,
      ).run(operacion, datos ? JSON.stringify(datos) : null);

      return { success: true };
    } catch (error) {
      console.error("Error adding historial:", error);
      return { success: false, error: (error as Error).message };
    }
  },
);

// ============================================================================
// UTILIDADES
// ============================================================================

ipcMain.handle("db:get-path", () => {
  try {
    const db = getDatabase();
    // Obtener información de la BD abierta
    return { success: true, path: db.name };
  } catch (error) {
    console.error("Error getting db path:", error);
    return { success: false, error: (error as Error).message };
  }
});
