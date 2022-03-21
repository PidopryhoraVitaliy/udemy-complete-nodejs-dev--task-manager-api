//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
//const ObjectId = mongodb.ObjectId
const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

/*const id = new ObjectId()
console.log(id)
//console.log(id.getTimestamp())
console.log(id.id)*/

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    db.collection('tasks').deleteOne({
        description: "use mongodb"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    /*db.collection('tasks').updateMany({
        complited: false
    }, {
        $set: {
            complited: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    /*db.collection('users').updateOne({
        _id: new ObjectId('622f10521dc421603e8bc4ca')
    }, {
        $set: {
            name: 'Vitalina',
            age: 38
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    /*db.collection('users').find({ name: 'Vitalii' }).toArray((error, result) => {
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(result)
    })
    db.collection('users').find({ name: 'Vitalii' }).count((error, count) => {
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(count)
    })*/

    /*db.collection('users').findOne({ _id: new ObjectId('622f10521dc421603e8bc4ca') }, (error, result) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(result)
    })*/

    /*db.collection('users').insertOne({
        _id: id,
        name: 'test id',
        age: 37
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.acknowledged)
    })*/

    /*db.collection('users').insertMany([
        {
            name: 'user1',
            age: 31
        }, {
            name: 'user2',
            age: 32
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }
        console.log(result)
    })*/

    /*db.collection('tasks').insertMany([
        {
            description: 'setup mongodb',
            complited: true
        },
        {
            description: 'start mongodb',
            complited: true
        },
        {
            description: 'use mongodb',
            complited: false
        },
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }
        console.log(result)
    })*/

})
