import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Question, QuestionDocument } from 'src/schemas/Question.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name)
    private questionModel: Model<QuestionDocument>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const newQuestion = new this.questionModel(createQuestionDto);
    return await newQuestion.save();
  }

  async findAll() {
    return await this.questionModel.find().exec(); 
  }

  async findOne(id: string) {
    return await this.questionModel.findById(id).exec();
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    return await this.questionModel.findByIdAndUpdate(id, updateQuestionDto, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.questionModel.findByIdAndDelete(id).exec();
  }
}
