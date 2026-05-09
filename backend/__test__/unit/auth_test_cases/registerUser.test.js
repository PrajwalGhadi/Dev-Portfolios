const { registerUser } = require("../../authTestHelpers");

describe("POST /auth/register", () => {
  it("should register a new user with unique email", async () => {
    const newUser = {
      username: `user_${Date.now()}`,
      email: `test_${Date.now()}@example.com`,
      password: "Secret123!",
    };
    const res = await registerUser(newUser);
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
  });

  it("should return 400 when email already exists", async () => {
    const email = `duplicate_${Date.now()}@example.com`;
    // first registration
    await registerUser({ username: "dup1", email, password: "Pass123!" });
    // second registration with same email
    const res = await registerUser({ username: "dup2", email, password: "Pass123!" });
    expect(res.status).toBe(400);
    expect(res.body.message).toBe("User already exists");
  });
});