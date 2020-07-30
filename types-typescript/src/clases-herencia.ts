export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panoramic,
}

abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }

  // set id(id: number) {
  //   this._id = id;
  // }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}

class Picture extends Item {
  public static photoOrientation = PhotoOrientation;
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    // this._id = id;
    // this._title = title;
    this._orientation = orientation;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album extends Item {
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this._pictures = [];
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture);
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
picture.title = 'Another Title';
album.title = 'Personal Activities';
console.log('Album:', album);

// const item = new Item(1, 'Test Title');
// console.log('Item', item);

console.log('Photo Orientation:', Picture.photoOrientation.Landscape);
