const {execFileSync} = require('node:child_process');
const {readdirSync} = require('node:fs');
const {join} = require('node:path');
for (const name of readdirSync(join(__dirname,'../assets/scripts')).filter(x=>x.endsWith('.js'))) {
  execFileSync(process.execPath,['--check',join(__dirname,'../assets/scripts',name)],{stdio:'inherit'});
}
execFileSync('git',['diff','--check'],{cwd:join(__dirname,'..'),stdio:'inherit'});
console.log('JavaScript syntax and diff whitespace checks passed');
