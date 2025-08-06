import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  sendUpdate(data: any) {
    console.log('Sending dashboard update:', data);
    // Your dashboard update logic
  }
}
