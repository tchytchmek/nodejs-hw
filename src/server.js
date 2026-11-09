import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectToMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { router as notesRouter } from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use(notesRouter);

app.use(notFoundHandler);

app.use(errorHandler);

await connectToMongoDB();

app.listen(PORT, () => {
  console.log(`Server is runnвing on port ${PORT}`);
});
