import { Module } from '@nestjs/common';
import { EmailGateway } from './email.gateway';
import { EmailService } from './email.service';

@Module({
  providers: [EmailGateway, EmailService],
})
export class EmailModule {}