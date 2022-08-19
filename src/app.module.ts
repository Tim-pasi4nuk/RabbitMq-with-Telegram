import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { TelegramModule } from './telegram/telegram.module';
require('dotenv').config();

@Module({
  imports: [RabbitmqModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
