import 'dotenv/config';
import { connect } from 'mongoose';
import { log } from '../utilities/log.utility';

async function connectToMongo(): Promise<void> {
	log('Connecting to MongoDB');
	const DB_URI = process.env.DB_URI || '';
	await connect(DB_URI);
}

export default connectToMongo;