const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const homedir = require('os').homedir();

exports.log = async function(message) {
  if (!message) {
    return 'You didnt specify anything';
  }

  addCommitPush(message);

  writeCommitToFile();

  console.log(homedir);
};

function writeCommitToFile() {
  const desktopPath = homedir + '/Desktop/';
  const fileName = 'test.txt';
}

async function addCommitPush(message) {
  const text = await exec(
    'git add -A && git commit -m "' + message + '" && git push'
  );
  console.log(text.stdout);
}
