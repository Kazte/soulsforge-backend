import { verify, sign } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'token.123123';

async function generateToken(id: string) {
	const jwt = sign({ id }, JWT_SECRET, {
		expiresIn: '1d',
	});

	return jwt;
}
async function verifyToken() { }

export { generateToken, verifyToken };