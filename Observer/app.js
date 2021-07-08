const User = require('./User')
const Topic = require('./Topic')

const topic1 = new Topic('Topic 1')
const topic2 = new Topic('Topic 2')


const user1 = new User('Jose')
const user2 = new User('Pablo')
const user3 = new User('Maria')


topic1.addObserver(user1)
topic2.addObserver(user2)
topic2.addObserver(user3)

topic1.startListener()
topic2.startListener()


user1.postMessage(topic1, 'Hello world!')
user2.postMessage(topic2, 'This is my first post')
