import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { logInfo } from './utilities/log.utility';
import { router } from './routes';
import db from './config/mongo';
import { logMiddleware } from './middleware/log.middleware';


// Constants
const PORT = process.env.PORT;

const app = express();

// Middlewares
app.use(cors({
	origin: '*',
}));
app.use(express.json());
app.use(cors());
app.use(logMiddleware);


// Routes
app.use(router);

// Connect to MongoDB and the start the server
db().then(() => {
	logInfo('Connected to MongoDB');

	// Start the server
	app.listen(PORT, () => {
		logInfo(`Server is running on port ${PORT}`);
	});
}).catch((err) => {
	logInfo('Failed to connect to MongoDB\n' + err);
});

