# Script para configurar el proyecto con SQLite en Windows
# Ejecutar con: powershell -ExecutionPolicy Bypass -File setup.ps1

Write-Host "🚀 Configurando el proyecto con SQLite..." -ForegroundColor Green

# Verificar si npm está instalado
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm no está instalado. Por favor instala Node.js primero." -ForegroundColor Red
    exit 1
}

Write-Host "📥 Instalando dependencias..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al instalar dependencias" -ForegroundColor Red
    exit 1
}

Write-Host "✅ ¡Configuración completada!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Próximos pasos:" -ForegroundColor Cyan
Write-Host "1. Ejecutar en desarrollo: npm run electron-dev" -ForegroundColor White
Write-Host "2. Compilar ejecutable: npm run build:exe" -ForegroundColor White
Write-Host ""
Write-Host "💡 La base de datos SQLite se crea automáticamente al ejecutar la aplicación." -ForegroundColor Blue
