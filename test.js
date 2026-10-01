const request = require("supertest")
const app = require("./index")
test("average of number",async ()=>{
    const res = await request(app)
    .post("/average")
    .send({
        number:10
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.average).toBe(10)
})

test("average of multiple numbers",async ()=>{
    const res1 = await request(app)
    .post("/average")
    .send({
        number:20
    })
    
    const res2 = await request(app)
    .post("/average")
    .send({
        number:30
    })

    expect(res1.body.average).toBe(15)
    expect(res2.body.average).toBe(20)
})

test("reject a string instead of number",async ()=>{
    const res = await request(app)
    .post("/average")
    .send({
        number:"40"
    })

    expect(res.statusCode).toBe(400)
})

test("rejects a missing number",async ()=>{
    const res = await request(app)
    .post("/average")
    .send({})

    expect(res.statusCode).toBe(400)
})