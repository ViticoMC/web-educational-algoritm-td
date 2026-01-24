#!/bin/bash
# Script para configurar el proyecto con SQLite

echo "🚀 Configurando el proyecto con SQLite..."

# Detectar si estamos en Windows
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    echo "📦 Sistema operativo detectado: Windows"
    
    # Instalar dependencias
    echo "📥 Instalando dependencias..."
    npm install
    
    # Crear base de datos inicial
    echo "🗄️ Inicializando base de datos..."
    node -e "const Database = require('better-sqlite3'); const db = new Database('app-data.db'); db.pragma('journal_mode = WAL'); db.close(); console.log('✅ Base de datos creada');"
    
    echo "✅ ¡Configuración completada!"
    echo ""
    echo "📝 Próximos pasos:"
    echo "1. Ejecutar en desarrollo: npm run electron-dev"
    echo "2. Compilar ejecutable: npm run build:exe"
    echo ""
else
    echo "❌ Este script está diseñado para Windows"
    echo "Para otros sistemas operativos, ejecuta:"
    echo "npm install"
fi
