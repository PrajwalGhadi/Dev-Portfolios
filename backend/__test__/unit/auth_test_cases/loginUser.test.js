const { loginUser, testUser } = require("../../authTestHelpers");

describe("POST /auth/login", () => {
  it("should login with the global test user", async () => {
    const res = await loginUser({
      email: testUser.email,
      password: testUser.password,
    });
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.headers["set-cookie"]).toBeDefined();
  });

  it("should return 401 for wrong password", async () => {
    const res = await loginUser({
      email: testUser.email,
      password: "wrongpassword",
    });
    expect(res.status).toBe(401);
    expect(res.body.message).toBe("Invalid credentials");
  });

  it("should return 400 when email is missing", async () => {
    const res = await loginUser({ password: "anything" });
    expect(res.status).toBe(400);
    expect(res.body.errors).toBeDefined();
  });
});