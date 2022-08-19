import { ClientProxy } from '@nestjs/microservices';
import { Update, Ctx, Start, Help, On, Hears } from 'nestjs-telegraf';
import { Inject } from '@nestjs/common';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { Observable, of } from 'rxjs';

@Update()
export class TelegramService {
  constructor(private rabbitmqService: RabbitmqService) {}

  @Start()
  async start(@Ctx() ctx) {
    await ctx.reply('Welcome');
  }

  @Help()
  async help(@Ctx() ctx) {
    await ctx.reply('Send me number');
  }

  @On('message')
  async on(@Ctx() ctx) {
    const Observable = (
      await this.rabbitmqService.getHello(`${ctx.update.message.text}`)
    ).toPromise();
    const message = await Promise.all([Observable]);
    await ctx.reply(message[0]);
  }

  @Hears('hi')
  async hears(@Ctx() ctx) {
    await ctx.reply('Hey there');
  }
}
