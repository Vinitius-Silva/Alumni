import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { DatabaseModule } from 'src/database/database.module';
import { emailsProviders } from './entities/email.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EmailsController],
  providers: [...emailsProviders, EmailsService]
})
export class EmailsModule {}
