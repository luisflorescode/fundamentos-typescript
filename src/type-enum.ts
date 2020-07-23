// Orientación para fotografías
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panoramic = 3;

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panoramic,
}
const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
  Landscape = 10,
  Portrait, // 11
  Square, // 12
  Panoramic, //13
}

console.log('Portrait: ', PictureOrientation.Portrait);
console.log('Picture Orientation: ', PictureOrientation);

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  EEUU = 'usa',
  Espana = 'esp',
}

console.log('Country', Country);
