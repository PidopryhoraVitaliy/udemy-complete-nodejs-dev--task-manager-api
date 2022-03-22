const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Task = require('../../src/models/task')
const User = require('../../src/models/user')

const userOneId = mongoose.Types.ObjectId()
const tokenOne = jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
const userOne = {
    _id: userOneId,
    name: 'userOne',
    email: 'userOne@test.gmail.com',
    password: 'newPass12345',
    tokens: [{
        token: tokenOne
    }]
}

const userTwoId = mongoose.Types.ObjectId()
const tokenTwo = jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
const userTwo = {
    _id: userTwoId,
    name: 'userTwo',
    email: 'userTwo@test.gmail.com',
    password: 'newPass12345',
    tokens: [{
        token: tokenTwo
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'task one',
    completed: false,
    owner: userOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'task two',
    completed: true,
    owner: userOne._id
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'task three',
    completed: true,
    owner: userTwo._id
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    tokenOne,
    userTwoId,
    userTwo,
    tokenTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}