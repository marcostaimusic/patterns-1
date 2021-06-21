const User = require('./User')
const Topic = require('./Topic')

const topic1 = new Topic('Topic 1')
const topic2 = new Topic('Topic 2')


const user1 = new User('Jose')
const user2 = new User('Pablo')
const user3 = new User('Maria')

//topic1.notify()


topic1.addObserver(user1)
topic2.addObserver(user2)
topic2.addObserver(user3)


topic1.on('messageLogged', (arg) => {
    console.log(`A message was posted by ${arg.name}: ${arg.text}`) 
    topic1.notify(arg)})
topic2.on('messageLogged', (arg)=>{
    console.log(`A message was posted by ${arg.name}: ${arg.text}`)
    topic2.notify(arg)})

user1.postMessage(topic1, 'Hello world!')
user2.postMessage(topic2, 'This is my first post')




//console.log(topic1.observers)
//console.log(topic1.posts)

//console.log(user1.emitter)
//console.log(topic1)