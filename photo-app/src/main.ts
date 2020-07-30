import { User, Album, Picture, PhotoOrientation } from './photo-app';

const user = new User(1, 'luisfloresdev', 'Luis', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(
  1,
  'TypeScript Course',
  '2020-07',
  PhotoOrientation.Landscape,
);
user.addAlbum(album);
album.addPicture(picture);
console.log('User:', user);
