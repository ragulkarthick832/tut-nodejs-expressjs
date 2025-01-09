// const {writeFileSync, write} = require('fs')
// for(let i = 0; i < 10000; i++){
//     writeFileSync('./content/big.txt', `hello world ${i}\n`,{flag: 'a'})
// }

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark:90000});

stream.on('data',(result)=>{
    console.log(`received ${result.length} of data`)
})

stream.on('error',(errr)=>{
    console.log(errr)
})