const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
let packageName = []
let file = fs.readdirSync('./packages', {})

console.log(file);
file.forEach(item=>{
    test(item)
})

// vue-cli-service build --entry packages/*/src/index.js --target lib --inline-vue --name number-input --dest packages/number-input/es
// 'vue-cli-service build --entry packages/*/src/index.js --target lib --inline-vue --name number-input --dest packages/number-input/es'
async function test(file) {
    const { stdout, stderr } = await exec(`vue-cli-service build --entry packages/`+file+`/src/index.js --target lib --inline-vue --name ${file} --dest packages/`+file+`/es`);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
}
