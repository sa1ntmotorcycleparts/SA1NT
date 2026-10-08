@echo off
setlocal
cd /d "%~dp0"
if not exist "node_modules" (
  echo Installing SA1NT dependencies...
  call npm.cmd install
  if errorlevel 1 exit /b 1
)
start "SA1NT Chrome" http://localhost:3000
call npm.cmd start
