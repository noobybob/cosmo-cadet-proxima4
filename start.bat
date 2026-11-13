@echo off
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Please install Node.js LTS from https://nodejs.org first.
  pause
  exit /b 1
)
echo Installing dependencies...
call npm install
echo Starting Cosmo Cadet...
call npm run dev
pause
