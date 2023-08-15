import { verify, sign, JwtPayload } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'token.123123';

async function generateToken(id: string) {
	const jwt = sign({ id }, JWT_SECRET, {
		expiresIn: '1d',
	});

	return jwt;
}

function verifyToken(jwt: string): string | JwtPayload | null {

	try {
		return verify(jwt, JWT_SECRET);
	} catch (err) {
		return null;
	}
}

function getClaims(jwt: string): JwtPayload | null {
	try {
		return verify(jwt, JWT_SECRET) as JwtPayload;
	} catch (err) {
		return null;
	}
}

export { generateToken, verifyToken, getClaims };