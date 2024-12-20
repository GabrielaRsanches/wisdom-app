import { IsOptional, IsString, IsArray } from 'class-validator';
import { Subject } from '../../../../../../shared/enum';

export class UpdateQuestionDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  subject?: Subject;
}
