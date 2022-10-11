import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

async function saveImage (fileName, imageData) {
  const fileUri = FileSystem.documentDirectory + `${fileName}.png`;

  await FileSystem.writeAsStringAsync(
    fileUri,
    imageData,
    { 'encoding': FileSystem.EncodingType.Base64 }
  )
  .then(() => {
    console.log('Image base64 writing...Success!!!');
    Sharing.shareAsync(fileUri);  //Give sharing capabilities
  })
  .catch((err) => {
    console.log('ERROR: ', err);
  });
}

export default saveImage;