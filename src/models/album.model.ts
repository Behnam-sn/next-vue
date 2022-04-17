export interface Album {
  id: string;
  title: string;
  artists: Artist[];
  type: string;
  year: number;
  tracksCount: number;
  thumbnail: string;
}

interface Artist {
  id: string;
  name: string;
}
