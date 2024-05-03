import { TeachingArea } from "shared/enum";
import { Email } from "shared/interfaces";

export class UpdateTeacherDto {
  updateName?: string;
  updateEmail?: Email;
  updateCredentials?: string[];
  updatePassword?: string;
  updateTeachingAreas?: TeachingArea[];

  constructor(
    updateName?: string,
    updateEmail?: Email,
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
