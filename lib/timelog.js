const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

exports.log = async function(message) {
  if (!message) {
    return 'You didnt specify anything';
  }

  // exec('ls', (error, stdout, stderr) => {
  //   console.log('error:  ', +error);
  //   console.log('stdout:  ', +stdout);
  //   console.log('stderr:  ', +stderr);
  // });

  const foo = await exec('ls');
  console.log('foo:  ' + foo.stdout);

  return 'Your message ass is:  ' + message;
};
