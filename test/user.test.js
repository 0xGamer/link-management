const request = require("supertest");
const app = require("../src/app");

describe("GET /users", () => {
  let resp = request(app).get("/");

  it("returns 200", (done) => {
    resp.expect(200, done);
  });

  it("returns all the users", (done) => {
    expect(resp.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          email: expect.any(String),
          password: expect.any(String),
        }),
      ])
    );
  });

});
