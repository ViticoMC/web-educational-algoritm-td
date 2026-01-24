import { contextBridge, ipcRenderer } from "electron";

/**
 * Preload script - Expone una API segura al frontend
 * Usa IPC para comunicación segura entre procesos
 * NO exponemos Node.js directamente - solo lo que necesita el frontend
 */
contextBridge.exposeInMainWorld("api", {
  // Relaciones
  getRelaciones: () => ipcRenderer.invoke("db:get-relaciones"),

  createRelacion: (datos: {
    nombre: string;
    atributos: string;
    descripcion?: string;
  }) => ipcRenderer.invoke("db:create-relacion", datos),

  updateRelacion: (
    id: number,
    datos: {
      nombre?: string;
      atributos?: string;
      descripcion?: string;
    },
  ) => ipcRenderer.invoke("db:update-relacion", id, datos),

  deleteRelacion: (id: number) => ipcRenderer.invoke("db:delete-relacion", id),

  // Conjuntos de Dependencias Funcionales
  getConjuntoDF: (id: number) => ipcRenderer.invoke("db:get-conjuntodf", id),

  createConjuntoDF: (datos: {
    nombre: string;
    relacion_id: number;
    descripcion?: string;
  }) => ipcRenderer.invoke("db:create-conjuntodf", datos),

  updateConjuntoDF: (
    id: number,
    datos: {
      nombre?: string;
      descripcion?: string;
    },
  ) => ipcRenderer.invoke("db:update-conjuntodf", id, datos),

  deleteConjuntoDF: (id: number) =>
    ipcRenderer.invoke("db:delete-conjuntodf", id),

  // Dependencias Funcionales
  getDF: (conjuntoDFId: number) =>
    ipcRenderer.invoke("db:get-df", conjuntoDFId),

  createDF: (datos: {
    implicantes: string;
    implicados: string;
    conjuntodf_id: number;
  }) => ipcRenderer.invoke("db:create-df", datos),

  updateDF: (
    id: number,
    datos: {
      implicantes?: string;
      implicados?: string;
    },
  ) => ipcRenderer.invoke("db:update-df", id, datos),

  deleteDF: (id: number) => ipcRenderer.invoke("db:delete-df", id),

  // Historial
  getHistorial: (limit?: number) =>
    ipcRenderer.invoke("db:get-historial", limit),

  addHistorial: (operacion: string, datos?: unknown) =>
    ipcRenderer.invoke("db:add-historial", operacion, datos),

  // Utilidades
  getDatabasePath: () => ipcRenderer.invoke("db:get-path"),
});
