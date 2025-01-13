import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElectronicTestQuestionsSchema } from 'src/schemas/ElectronicTestQuestions.schema';
import { ElectronicTestQuestions } from './../schemas/ElectronicTestQuestions.schema';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ElectronicTestQuestions.name,
        schema: ElectronicTestQuestionsSchema,
      },
    ]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
