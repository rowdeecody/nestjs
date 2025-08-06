import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DashboardService } from './dashboard.service';

@WebSocketGateway({ cors: true })
export class DashboardGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly dashboardService: DashboardService) {}

  @SubscribeMessage('sendDashboardUpdate')
  handleSendDashboardUpdate(@MessageBody() payload: any) {
    this.dashboardService.sendUpdate(payload);
    return { status: 'Dashboard update sent' };
  }
}