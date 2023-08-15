import { Router } from 'express';
import { readdirSync, stat, promises } from 'node:fs';
import { logInfo } from '../utilities/log.utility';
import { join } from 'node:path';

const router = Router();

const cleanFileName = (fileName: string): string => {
	const file = fileName.split('.').shift();
	return file!;
};


// dynimic import of all routes and accepts subfolders using recursion using es6 import

const foldersPath = join(__dirname, '..', 'routes');
const routeFolders = readdirSync(foldersPath);


for (const folder of routeFolders) {

	if (folder === 'index.ts') continue;


	const routesPath = join(foldersPath, folder);
	const routesFiles = readdirSync(routesPath).filter(file => file.endsWith('.ts'));


	for (const file of routesFiles) {
		const routePath = join(routesPath, file);

		import(routePath).then(module => {
			const route = module.default;
			const routeName = cleanFileName(file);

			const routePath = `/api/${routeName}`;
			router.use(routePath, route);
			logInfo(`Route loaded - \x1b[33m${routePath}\x1b[0m`);
		});
	}
}






export { router };