const { spawn } = require('child_process');

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';

console.log('\x1b[36m%s\x1b[0m', 'Starting OneDigitalOffice (Express Server :3000 + Vite Client :5173)...');

const server = spawn(npmCmd, ['--prefix', 'server', 'run', 'dev'], {
  stdio: 'inherit',
  shell: true,
});

const client = spawn(npmCmd, ['--prefix', 'client', 'run', 'dev'], {
  stdio: 'inherit',
  shell: true,
});

const cleanup = () => {
  try {
    server.kill();
    client.kill();
  } catch (e) {}
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);
