const EventEmitter = require('events')


class Topic extends EventEmitter{
    constructor(name){
        super()
        this._name = name
        this.observers = []
        this.posts = []
    }

    addObserver(observer){
        this.observers.push(observer)
    }

    removeObserver(observer){
        this.observers = this.observers.filter(x => x != observer)
    }

    startListener(){
        this.on('messageLogged', (arg) => {
            console.log(`A message was posted by ${arg.name}: ${arg.text}`) 
            this.notify(arg)})
    }

    notify(post){
        this.observers.forEach( x=> {
            if (x.name === post.name){
            console.log(`Dear ${x.name}, you posted: "${post.text}" in ${this._name}`)
            } else {
            console.log(`Hi, ${x.name}, your friend ${post.name} posted: "${post.text}" in ${this._name}`)
            }
        }  
        )
}  
}


module.exports = Topic
