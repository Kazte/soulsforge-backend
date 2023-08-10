/* eslint-disable @typescript-eslint/no-explicit-any */
export function logInfo(message: any) {
	console.log(`[⚡Server] ${message}`);
}

export function log(message: any) {
	console.log(`> ${message}`);
}

export function logError(message: any) {
	console.log(`[❌ERROR] ${message}`);
}
