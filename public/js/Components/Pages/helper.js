export default async () => {
  const fileName = 'You-1-4-5.apk'
  /* const FireStorage = await import('../../firebase')
     .then(module => module.FireStorage)
   const url = await FireStorage.ref()
     .child(fileName)
     .getDownloadURL()*/
  const a = document.createElement('a')
  a.download = fileName
  a.setAttribute('href', 'https://firebasestorage.googleapis.com/v0/b/chatapp-test-4e669.appspot.com/o/You-1-4-8.apk?alt=media&token=11a73271-9944-4e13-9937-4d4bc938d7d6')
  a.click()
}