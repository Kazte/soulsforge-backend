import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { logInfo } from './utilities/log.utility';
import db from './config/mongo';
import { logMiddleware } from './middleware/log.middleware';
import { authroute, charactereldenringroute, profileroute } from './routes';


// Constants
const PORT = process.env.PORT;

const app = express();

// Middlewares
app.use(cors({
	origin: '*',
}));
app.use(express.json());
app.use(logMiddleware);


// Routes
app.use('/api/auth', authroute);
app.use('/api/character-eldenring', charactereldenringroute);
app.use('/api/profile', profileroute);

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

