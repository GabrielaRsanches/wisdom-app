export default function FileUpload(){
  return(
    onFileSelected(onclick)
  )
}

export function onFileSelected(event: any) {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    // You can now access the selected file and perform further actions, such as uploading it to a server.
    console.log('Selecione o arquivo:', selectedFile);
  }
}
