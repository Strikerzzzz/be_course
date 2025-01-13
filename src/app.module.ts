import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/system_course'), QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
