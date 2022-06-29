const request = require("supertest");
const app = require("../src/app");

describe("GET /users", () => {
  it("should get all users", async (done) => {
    let resp = await request(app).get("/users");
    expect(resp.status).toEqual(200);

    expect(resp.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          email: expect.any(String),
          password: expect.any(String),
          _id: expect.any(String),
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
    expect(res.body).toEqual(
      expect.objectContaining({
        name: "jason",
        email: "jason@json.com",
        password: "jsonrocks",
        _id: expect.any(String),
      })
    );
  });
});

describe("GET /users/:id", () => {
  it("should return a single user", async () => {
    let resp = await request(app).get("/users/testid"); // to be replaced
    expect(resp.body).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        _id: expect.any(String),
      })
    );
  });
});

describe("PATCH /users/:id", () => {
  it("should update a user", async () => {
    let resp = await request(app).patch("/users/testid").send({
      name: "john",
      email: "john@john.com",
    });
    expect(resp.status).toEqual(204);
    expect(resp.body).toEqual(
      expect.objectContaining({
        name: "john",
        email: "john@john.com",
        password: "jsonrocks",
        _id: expect.any(String),
      })
    );
  });
});

describe("DELETE /users/:id", () => {
  it("should delete a user", async () => {
    let resp = await request(app).delete("/users/testid");
    expect(resp.status).toEqual(204);
  });
});
