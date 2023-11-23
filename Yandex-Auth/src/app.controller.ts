import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	@Render('pages/index')
	root(@Request() req) {
		return {
			title: 'Hallo!',
			data: this.appService.getHello(),
			user: req?.session?.user,
		};
	}
}
