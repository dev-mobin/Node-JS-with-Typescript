// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import ConnectDB from "./db/db";
import userRoutes from './routes/users.routes';
import { errorHandler } from './middlewares/errorHandler';
import { logger } from './utils/logger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/users', userRoutes);

// Error handling middleware
app.use(errorHandler);


ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("SERVER FAILED!!!!", err);
  });

