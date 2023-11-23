import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { YandexStrategy } from './yandex.strategy';
import { ConfigModule } from '../config/config.module';
import { PassportModule } from '@nestjs/passport';

@Module({
	imports: [ConfigModule, PassportModule.register({ session: true })],
	controllers: [AuthController],
	providers: [AuthService, YandexStrategy],

})
export class AuthModule {}
