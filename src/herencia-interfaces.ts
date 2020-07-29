export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panoramic,
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  description: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: 'Meetups',
  description: 'Community events around the world.',
};

const picture: Picture = {
  id: 1,
  title: 'Family',
  orientation: PhotoOrientation.Landscape,
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('Album:', album);
console.log('Picture:', picture);
console.log('New Picture:', newPicture);
