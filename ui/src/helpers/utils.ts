export default function FileUpload(){
  return(
    onFileSelected(onclick)
  )
}

export function onFileSelected(event: any) {
  const selectedFile = event.target.files;
  if (selectedFile) {
    console.log('Selecione o arquivo:', selectedFile);
  }
}

export class ConfirmedPassword {
  arePasswordsMatching(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  };
  constructor(readonly passwordOne: string, readonly passwordTwo: string,  arePasswordsMatching: boolean = false){
    arePasswordsMatching = this.arePasswordsMatching(passwordOne, passwordOne)
  }
}