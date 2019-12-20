const { exec } = require('child_process');
const chalk = require('chalk');
const ora = require('ora');

exec('npm install guppy-admin-cli -g', (error, stdout, stderr) => {
  const installSpinner = ora('升级进行中, 请稍后...');
  if (error) {
    installSpinner.color = 'red';
    installSpinner.fail(chalk.red('升级失败，请自行重新安装！'));
    console.log(error);
  } else {
    installSpinner.color = 'green';
    installSpinner.succeed('安装依赖成功');
    console.log(`${stderr}${stdout}`);
    console.log();
    console.log(chalk.green('升级成功！'));
  }
})
