import { TeachingArea } from '../../../../../../shared/enum';

export class UpdateTeacherDto {
  updateName?: string;
  updateEmail?: string;
  updateCredentials?: string[];
  updatePassword?: string;
  updateTeachingAreas?: TeachingArea[];

  constructor(
    updateName?: string,
    updateEmail?: string,
    updateCredentials?: string[],
    updatePassword?: string,
    updateTeachingAreas?: TeachingArea[],
  ) {
    this.updateName = updateName;
    this.updateEmail = updateEmail;
    this.updateCredentials = updateCredentials;
    this.updatePassword = updatePassword;
    this.updateTeachingAreas = updateTeachingAreas;
  }
}
