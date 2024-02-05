const { exec } = require('child_process');

function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      return;
    }

    console.log('Command Output:');
    console.log(stdout);
  });
}

// Test Cases
executeCommand('ls -la');
executeCommand('echo "Hello, Node.js! @btecky"');