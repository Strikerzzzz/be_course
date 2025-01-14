import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Question {
  @Prop({
    type: String,
    enum: ['multipleChoice', 'fillInTheBlank'],
  })
  type: string;

  @Prop()
  content: string;

  @Prop({
    type: [{ 
      option: String, 
      isCorrect: Boolean 
    }], 
    required: function() { return this.type === 'multipleChoice'; }
  })
  options: {
    option: string;
    isCorrect: boolean; 
  }[]; 

  @Prop({
    type: String,
    required: function() { return this.type === 'fillInTheBlank'; }
  })
  correctAnswer: string;

  @Prop()
  hint: string;

  @Prop()
  explanation: string;

  @Prop({
    type: String,
    enum: ['easy', 'medium', 'hard'],
  })
  difficulty: string;

  @Prop({
    type: Object,
    required: true,
  })
  reference: {
    id: Types.ObjectId;
    referenceType: 'exam' | 'quiz'; 
  };
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
