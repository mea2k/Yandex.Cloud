// eslint-disable-next-line prettier/prettier
import { Controller, Get, Render, Request, Response, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IEjsData } from 'src/interfaces/ejs.interface';
import { AuthGuard } from '@nestjs/passport';
import { Request as SessionRequest } from 'express-session';


@Controller('')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	@Get('login')
	@UseGuards(AuthGuard('yandex'))
	async login() {
		// никогда не выполнится
		return true;
	}

	@Get('auth/yandex/callback')
	@UseGuards(AuthGuard('yandex'))
	async yandexCallback(@Request() req, @Response() res) {
		console.log('Ya.callback returned...', {...req.user});
		// сохраняем пользователя в сессии
		if (req.user) {
			req.session.authenticated = true;
			req.session.user = req.user;
		}

		res.redirect('/');
		return  true;
	}

	@Get('profile')
	@Render('pages/user/profile')
	async getProfile(@Request() req, @Response() res): Promise<IEjsData> {
		// если не залогинен - отправляем на /login
		if (!req.session?.authenticated) {
			res.redirect('/login');
		}

		return {
			title: 'Профиль пользователя ' + req.session.user?.username,
			data: '',
			user: req.session.user,
		};
	}

	@Get('logout')
	async logout(@Request() req: SessionRequest, @Response() res) {
		// очищаем сессию от пользователя
		req.session.authenticated = false;
		req.session.user = undefined;
		res.redirect('/');
		return true;
	}
}
