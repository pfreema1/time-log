const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

exports.log = async function(message) {
  if (!message) {
    return 'You didnt specify anything';
  }

  // console.log('exec:  git add -A');
  // await exec('git add -A');
  // console.log('exec:  git commit -m ' + message);
  // await exec('git commit -m ' + message);
  // console.log('exec: git push');
  // const pushText = await exec('git push');
  // console.log('pushTeerxt:  ' + pushText.stdout);

  const text = await exec(
    'git add -A && git commit -m "' + message + '" && git push'
  );
  console.log('text:  ', text.stdout);
};
