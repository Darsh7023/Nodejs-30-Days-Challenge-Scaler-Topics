const fs = require('fs');

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
    } else {
      console.log(`Data written to ${filePath}`);
    }
  });
}

// Test Cases
writeToFile('output.txt', 'Content in a non-existent folder.');