import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  send(data: any) {
    console.log('Sending notification to:', data.to);
    // Your notification logic
  }
}