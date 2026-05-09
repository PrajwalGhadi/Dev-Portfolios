const supertest = require("supertest");
const app = require("../src/app");
const userModel = require("../src/models/user.model");
const bcrypt = require("bcrypt");

// Shared test user (used across all test files)
const testUser = {
  username: "global_test_user",
  email: "global_test@example.com",
  password: "GlobalPass123!",
};

async function registerUser(user) {
  return supertest(app).post("/auth/register").send(user);
}

async function loginUser(credentials) {
  return supertest(app).post("/auth/login").send(credentials);
}

async function seedUser(user) {
  const hash = await bcrypt.hash(user.password, 10);
  return userModel.create({
    username: user.username,
    email: user.email,
    password: hash,
  });
}

async function clearUsers() {
  await userModel.deleteMany({});
}

// Returns an authenticated agent (logged in as testUser)
async function getAuthenticatedAgent(user = testUser) {
  const agent = supertest.agent(app);
  await agent.post("/auth/login").send({
    email: user.email,
    password: user.password,
  });
  return agent;
}

module.exports = {
  testUser,
  registerUser,
  loginUser,
  seedUser,
  clearUsers,
  getAuthenticatedAgent,
};