// const fastify = require("fastify")();
// const { MongoClient } = require("mongodb");

// // Register fastify-mongodb
// fastify.register(require("fastify-mongodb"), {
//   url: "mongodb://localhost:27017/test", // Replace with your MongoDB connection string
// });

// // Register fastify-swagger
// fastify.register(require("fastify-swagger"), {
//   routePrefix: "/documentation",
//   swagger: {
//     info: {
//       title: "My API Documentation",
//       description: "API documentation using Fastify and Swagger",
//       version: "1.0.0",
//     },
//     externalDocs: {
//       url: "https://swagger.io",
//       description: "Find more info here",
//     },
//     host: "localhost:3000",
//     schemes: ["http"],
//     consumes: ["application/json"],
//     produces: ["application/json"],
//   },
//   exposeRoute: true,
// });

// // Your user registration route
// fastify.post("/register", {
//   schema: {
//     body: {
//       type: "object",
//       properties: {
//         username: { type: "string" },
//         email: { type: "string", format: "email" },
//         password: { type: "string" },
//       },
//       required: ["username", "email", "password"],
//     },
//   },
//   handler: async (request, reply) => {
//     try {
//       const { username, email, password } = request.body;

//       const db = fastify.mongo.db;
//       const collection = db.collection("users");

//       // Create a new user object
//       const newUser = { username, email, password };

//       // Insert the new user into the MongoDB collection
//       const result = await collection.insertOne(newUser);

//       return { success: true, data: result.ops[0] };
//     } catch (err) {
//       reply.status(500).send({ success: false, error: err.message });
//     }
//   },
// });

// // User login route
// fastify.post("/login", {
//   schema: {
//     body: {
//       type: "object",
//       properties: {
//         email: { type: "string", format: "email" },
//         password: { type: "string" },
//       },
//       required: ["email", "password"],
//     },
//   },
//   handler: async (request, reply) => {
//     try {
//       const { email, password } = request.body;

//       const db = fastify.mongo.db;
//       const collection = db.collection("users");

//       // Find the user by email
//       const user = await collection.findOne({ email });

//       if (!user || user.password !== password) {
//         return reply
//           .status(401)
//           .send({ success: false, message: "Invalid credentials" });
//       }

//       return { success: true, message: "Login successful", user };
//     } catch (err) {
//       reply.status(500).send({ success: false, error: err.message });
//     }
//   },
// });

// // Start the server
// const start = async () => {
//   try {
//     await fastify.listen(3001);
//     console.log("Server running on port 3000");
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// start();

const fastify = require("fastify")();

// Database connection
const { connectDB } = require("./db/connection");
const db = await connectDB();

// Swagger configuration
const swaggerOptions = require("./config/swagger");
fastify.register(require("fastify-swagger"), swaggerOptions);

// Importing routing segments
const userRoutes = require("./routes/userRoutes");
const otherRoutes = require("./routes/otherRoutes");

// Registering routing segments
fastify.register(userRoutes);
fastify.register(otherRoutes);

// Start the server
const start = async () => {
  try {
    await fastify.listen(3000);
    console.log("Server running on port 3000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
