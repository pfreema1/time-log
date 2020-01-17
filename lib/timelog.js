const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

exports.log = async function(message) {
  if (!message) {
    return 'You didnt specify anything';
  }

  await exec('git add -A');
  await exec('git commit -m ' + message);
  const pushText = await exec('git push');
  console.log('pushTeerxt:  ' + pushText.stdout);
};
