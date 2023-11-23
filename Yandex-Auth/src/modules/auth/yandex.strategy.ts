import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-yandex';
import { ConfigService } from '../config/config.service';
//import { Strategy } from 'passport-local';

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, 'yandex') {
	constructor(
		private authService: AuthService,
		configService: ConfigService,
	) {
		super({
			clientID: configService.get('YANDEX_CLIENT_ID'),
			clientSecret: configService.get('YANDEX_CLIENT_SECRET'),
			callbackURL: configService.get('YANDEX_CALLBACK_URL'),
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: any,
	): Promise<any> {
		const { id, username, name, emails, photos } = profile;

		const user = {
			profileId: id,
			username,
			email: emails[0].value,
			firstName: name.givenName,
			lastName: name.familyName,
			avatar: photos[0].value,
			accessToken,
		};

		return done(null, user);
	}
}
