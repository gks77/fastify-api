// routes/userRoutes.js

const userRoutes = (fastify, options, done) => {
  fastify.post("/register", async (request, reply) => {
    // User registration logic
  });

  fastify.post("/login", async (request, reply) => {
    // User login logic
  });

  // Other user-related routes

  done();
};

module.exports = userRoutes;
