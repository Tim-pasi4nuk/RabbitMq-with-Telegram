import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitmqService {
  constructor(@Inject('RABBITMQ_SERVICE') private client: ClientProxy) {}

  async getHello(name: string) {
    try {
      // console.log(name)
      return this.client.send({ cmd: 'greeting' }, name);
    } catch (error) {
      console.log(error);
    }
  }

  async getHelloAsync(name: string) {
    const message = this.client.send({ cmd: 'greeting-async' }, name);
    return message;
  }

  async publishEvent() {
    this.client.emit('book-created', {
      bookName: 'The Way Of Kings',
      author: 'Brandon Sanderson',
    });
  }
}
