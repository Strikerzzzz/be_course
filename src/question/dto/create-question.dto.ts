import { IsString, IsArray, IsEnum, IsOptional, IsObject } from 'class-validator';
export class CreateQuestionDto {
    @IsEnum(['multipleChoice', 'fillInTheBlank'])
    type: string; // Loại câu hỏi (trắc nghiệm hoặc điền từ)

    @IsString()
    content: string;

    @IsOptional()
    @IsArray()
    options?: {
        option: string; 
        isCorrect: boolean; 
    }[];

    @IsOptional()
    @IsString()
    correctAnswer?: string; 

    @IsOptional()
    @IsString()
    hint?: string;

    @IsOptional()
    @IsString()
    explanation?: string; 

    @IsEnum(['easy', 'medium', 'hard'])
    difficulty: string; 

    @IsObject()
    @IsOptional()
    reference?: {
        id: string; 
        referenceType: 'exam' | 'quiz'; 
    };
}
