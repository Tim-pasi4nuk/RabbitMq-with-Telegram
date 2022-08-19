import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class RabbitmqController {
  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: string): string {
    // console.log(name)
    return `Hello ${name}`;
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAsync(name: string): Promise<string> {
    console.log(name);
    return `Hello ${name} Async`;
  }

  @EventPattern('book-created')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log(data);
  }
}
