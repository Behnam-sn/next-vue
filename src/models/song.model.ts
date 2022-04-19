export interface Song {
  id: string;
  title: string;
  artists: Artist[];
  albumId: string;
  number: number;
  length: string;
  thumbnail: string;
  src: string;
}

interface Artist {
  id: string;
  name: string;
}
