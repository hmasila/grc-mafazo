const fs = require('fs');
const path = require('path');

const LIST_FILE = path.join(__dirname, 'swagger.json');

module.exports = function listMiddleware(req, res) {
  fs.readFile(LIST_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    // delay response a bit so as to see loading icon on fellow details page
    setTimeout(
      () => res.json(JSON.parse(data)),
      3000
    );
  });
};
