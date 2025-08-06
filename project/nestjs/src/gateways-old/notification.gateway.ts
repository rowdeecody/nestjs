import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { EventService } from '../services/event.service';
import { WEBSOCKET_EVENTS } from './constants/events';
import { EventPayloadDto } from './dto/event.dto';

@WebSocketGateway({ cors: true })
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly eventService: EventService) {}

  @SubscribeMessage(WEBSOCKET_EVENTS.SEND_EMAIL)
  handleSendEmail(@MessageBody() data: EventPayloadDto) {
    this.eventService.handleSendEmail(data);
    return { event: WEBSOCKET_EVENTS.SEND_EMAIL, status: 'ok' };
  }

  @SubscribeMessage(WEBSOCKET_EVENTS.SEND_NOTIFICATION)
  handleSendNotification(@MessageBody() data: EventPayloadDto) {
    this.eventService.handleSendNotification(data);
    return { event: WEBSOCKET_EVENTS.SEND_NOTIFICATION, status: 'ok' };
  }

  @SubscribeMessage(WEBSOCKET_EVENTS.UPDATE_DASHBOARD)
  handleUpdateDashboard(@MessageBody() data: EventPayloadDto) {
    this.eventService.handleUpdateDashboard(data);
    return { event: WEBSOCKET_EVENTS.UPDATE_DASHBOARD, status: 'ok' };
  }
}
