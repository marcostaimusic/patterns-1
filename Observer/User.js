const EventEmitter = require('events')



class User extends EventEmitter{
    constructor(name){
        super()
        this._name = name
        //this.on('messageLogged', (arg)=>{console.log(arg)})
    }
    get name(){
        return this._name
    }

    postMessage(topic, text){
        let post = {name: this._name, text: text }
        topic.emit('messageLogged', post)
        topic.posts.push(post)
    }
}

module.exports = User