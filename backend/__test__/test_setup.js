const connectDB = require("../src/configs/db.config");
const { seedUser, clearUsers, testUser } = require("./authTestHelpers");

beforeAll(async () => {
  await connectDB();
  await clearUsers();                 // start with empty database
  await seedUser(testUser);          // create the shared test user
});

afterAll(async () => {
  await clearUsers();                // optional: clean up after all tests
});