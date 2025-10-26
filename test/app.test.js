const request = require("supertest");
const app = require("../src/index");

describe("App", () => {
  it("should return 200 on /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  it("should return ok status on /health", async () => {
    const res = await request(app).get("/health");
    expect(res.body.status).toBe("ok");
  });
});
