export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panoramic,
}

class Picture {
  #id: number;
  #title: string;
  #orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.#id = id;
    this.#title = title;
    this.#orientation = orientation;
  }

  public toString() {
    return `[id: ${this.#id}, title: ${this.#title}, orientation: ${
      this.#orientation
    }]`;
  }
}

class Album {
  #id: number;
  #title: string;
  #pictures: Picture[];

  public constructor(id: number, title: string) {
    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }

  public addPicture(picture: Picture) {
    this.#pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(
  1,
  'Platzi Session',
  PhotoOrientation.Square,
);
album.addPicture(picture);
console.log('Album:', album);

// picture.id = 100;
// picture.title = 'Another Title';
// album.title = 'Personal Activities';
console.log('Album:', album);
