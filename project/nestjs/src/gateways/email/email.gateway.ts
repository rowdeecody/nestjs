import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { EmailService } from './email.service';

@WebSocketGateway({ cors: true })
export class EmailGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly emailService: EmailService) {}

  @SubscribeMessage('sendEmail')
  handleSendEmail(@MessageBody() payload: any) {
    this.emailService.send(payload);
    return { status: 'Email sent' };
  }
}