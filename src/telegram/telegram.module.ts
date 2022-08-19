import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TelegrafModule } from 'nestjs-telegraf';
import { RabbitmqModule } from 'src/rabbitmq/rabbitmq.module';
import { TelegramService } from './telegram.service';
require('dotenv').config();

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_BOT_TOKEN,
    }),
    RabbitmqModule,
  ],
  providers: [TelegramService],
})
export class TelegramModule {}
