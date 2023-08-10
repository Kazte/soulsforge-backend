import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { logInfo } from './utilities/log.utility';
import { router } from './routes';
import db from './config/mongo';
import { logMiddleware } from './middleware/log.middleware';


// Constants
const PORT = process.env.PORT || 8080;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cors());
app.use(logMiddleware);


// Routes
app.use(router);

// Connect to MongoDB
db().then(() => {
	logInfo('Connected to MongoDB');
}).catch((err) => {
	logInfo('Failed to connect to MongoDB\n' + err);
});

// Start the server
app.listen(PORT, () => {
	logInfo(`Server is running on port ${PORT}`);
});