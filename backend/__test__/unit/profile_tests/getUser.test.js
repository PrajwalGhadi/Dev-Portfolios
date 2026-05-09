const { getAuthenticatedAgent, testUser } = require("../../authTestHelpers");

describe("GET /auth/getUser", () => {
  it("should return the authenticated user", async () => {
    const agent = await getAuthenticatedAgent(); // logs in as testUser
    const res = await agent.get("/auth/getUser");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.user.email).toBe(testUser.email);
    expect(res.body.user.password).toBeUndefined();
  });

  it("should return 401 when not authenticated", async () => {
    const res = await request(app).get("/auth/getUser");
    expect(res.status).toBe(401);
  });
});