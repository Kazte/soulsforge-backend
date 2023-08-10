import { hash, compare } from 'bcryptjs';


async function encrypt(password: string): Promise<string> {
	return await hash(password, 8);
}

async function verify(password: string, hash: string): Promise<boolean> {
	return await compare(password, hash);
}

export { encrypt, verify };