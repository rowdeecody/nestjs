import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  send(data: any) {
    console.log('Sending email to:', data.to);
    // Your email logic
  }
}