const request = require("supertest");
const app = require("../src/app");
const mongoose = require('mongoose');

let ID = ""

beforeAll(async () => {
  mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((e) => {
    console.log("Error connecting to DB");
  });
})

afterAll(async () => {
   mongoose.connection.close().then(() => {
    console.log('closed connection')
   }).catch(e => {
    console.log('err closing connection')
   })
})

describe("GET /users", () => {
  it("should get all users", async () => {
    let resp = await request(app).get("/users");
    expect(resp.status).toEqual(200);

    expect(resp.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          email: expect.any(String),
          password: expect.any(String),
          _id: expect.any(String),
          __v: expect.any(Number)
        }),
      ])
    );
  });
});

describe("POST /users", () => {
  it("should add a user", async () => {
    let resp = await request(app).post("/users").send({
      name: "jason",
      email: "jason@jason.com",
      password: "jsonrocks",
    });
    expect(resp.status).toEqual(201);
    ID = resp.body._id
    expect(resp.body).toEqual(
      expect.objectContaining({
        name: "jason",
        email: "jason@jason.com",
        password: "jsonrocks",
        _id: expect.any(String),
        __v: expect.any(Number)
      })
    );
  });
});

describe("GET /users/:id", () => {
  it("should return a single user", async () => {
    let resp = await request(app).get("/users/"+ID); // to be replaced
    expect(resp.body).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        _id: expect.any(String),
        __v: expect.any(Number)
      })
    );
  });
});

describe("PATCH /users/:id", () => {
  it("should update a user", async () => {
    let resp = await request(app).patch("/users/"+ID).send({
      name: "john",
      email: "john@john.com",
    });
    expect(resp.status).toEqual(201);
    expect(resp.body).toEqual(
      expect.objectContaining({
        name: "john",
        email: "john@john.com",
        password: "jsonrocks",
        _id: expect.any(String),
        __v: expect.any(Number)
      })
    );
  });
});

describe("DELETE /users/:id", () => {
  it("should delete a user", async () => {
    let resp = await request(app).delete("/users/"+ID);
    expect(resp.status).toEqual(201);
  });
});
