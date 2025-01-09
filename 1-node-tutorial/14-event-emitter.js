const EventEmitter = require('events');

const customEmitter = new EventEmitter()
// on will listen for specific eve
// emit - executes it

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved user ${name} with id:${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic`)
})




customEmitter.emit('response','john',23)