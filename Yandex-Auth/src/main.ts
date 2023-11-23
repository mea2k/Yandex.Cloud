import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as session from 'express-session';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	// настройка папки views
	app.useStaticAssets(path.join(__dirname, '..', process.env.PUBLIC_PATH));
	app.setBaseViewsDir(path.join(__dirname, '..', 'src/views'));
	app.setViewEngine('ejs');

	// настройка использования сессий
	app.use(
		session({
			secret: process.env.SESSION_SECRET || 'change_me',
			resave: false,
			saveUninitialized: false,
		}),
	);

	const PORT = process.env.PORT || 3000;

	await app.listen(PORT);
	console.log('Server started at port ' + PORT);
}

bootstrap();
