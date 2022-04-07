export interface Song {
  id: string;
  artists: Artist[];
  title: string;
  albumId: string;
  number: number;
  length: string;
  thumbnail: string;
  fileName: string;
}

interface Artist {
  id: string;
  name: string;
}
