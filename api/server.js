import express from 'express';
import mongoose from 'mongoose';
import { videoRoutes } from './Routes/VideoRoutes.js';
import { userRoutes } from './Routes/UserRoutes.js';
import { commentRoutes } from './Routes/CommentRoutes.js';
import cors from 'cors';

// Initialize Express application
const app = express();
const PORT = 3000;
const DB_NAME = 'VideoStreamDB';

// Middleware configuration
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(`mongodb+srv://myyoutube:myyoutube@cluster0.uyr6l.mongodb.net/${DB_NAME}`);

// Database connection event handlers
const db = mongoose.connection;
db.on('open', () => {
  console.log('Database connection established successfully');
});
db.on('error', () => {
  console.log('Failed to connect to database');
});

// Route registration
videoRoutes(app);
userRoutes(app);
commentRoutes(app);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});