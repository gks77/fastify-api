// routes/otherRoutes.js

const otherRoutes = (fastify, options, done) => {
  fastify.get("/other", async (request, reply) => {
    // Other route logic
  });

  // Other routes

  done();
};

module.exports = otherRoutes;
