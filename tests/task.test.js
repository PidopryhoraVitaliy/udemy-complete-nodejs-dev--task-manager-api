const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const { userOneId, userOne, tokenOne, setupDatabase, taskOne, tokenTwo } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup a new user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${tokenOne}`)
        .send({
            description: 'new task'
        })
        .expect(201)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})

test('Should fetch user tasks (only userOne)', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${tokenOne}`)
        .send()
        .expect(200)
    expect(response.body.length).toBe(2)
})

test('Should userTwo delete userOne tasks', async () => {
    const response = await request(app)
        .delete('/tasks/' + taskOne._id)
        .set('Authorization', `Bearer ${tokenTwo}`)
        .send()
        .expect(404)
    const task = await Task.findById(taskOne._id)
    expect(task).not.toBeNull()
})