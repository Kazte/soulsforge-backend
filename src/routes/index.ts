import { Router } from 'express';
import { readdirSync } from 'node:fs';
import { logInfo } from '../utilities/log.utility';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string): string | undefined => {
	const file = fileName.split('.').shift();
	return file;
};

readdirSync(PATH_ROUTER).filter((fileName: string) => {
	const file = cleanFileName(fileName);
	if (file && file !== 'index') {
		import(`./${file}.route`).then((moduleRoute) => {
			logInfo(`\x1b[33mRoute /api/${file} loaded\x1b[0m`);
			router.use(`/api/${file}`, moduleRoute.router);
		});
	}
});



export { router };