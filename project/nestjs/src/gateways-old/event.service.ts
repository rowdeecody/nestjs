import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {
  handleSendEmail(data: any) {
    // Logic to send email
    console.log('Email sent with data:', data);
  }

  handleSendNotification(data: any) {
    // Logic to send notification
    console.log('Notification sent:', data);
  }

  handleUpdateDashboard(data: any) {
    // Logic to update dashboard
    console.log('Dashboard updated with:', data);
  }
}
