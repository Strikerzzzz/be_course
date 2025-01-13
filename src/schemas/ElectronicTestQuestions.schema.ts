import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ElectronicTestQuestionsDocument =
  HydratedDocument<ElectronicTestQuestions>;

@Schema()
export class ElectronicTestQuestions {
  @Prop({
    ref: 'Exam',
  })
  id_exam: Types.ObjectId;

  @Prop()
  content: string;

  @Prop()
  question: string;

  @Prop()
  result: string;
}

export const ElectronicTestQuestionsSchema = SchemaFactory.createForClass(
  ElectronicTestQuestions,
);
