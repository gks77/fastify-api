// config/swagger.js

const swaggerOptions = {
  routePrefix: "/api-docs",
  swagger: {
    info: {
      title: "User Api Documentations",
      description: "Handle user operations",
      version: "1.0.0",
    },
    // Other Swagger configurations
  },
  exposeRoute: true,
};

module.exports = swaggerOptions;
