export type TypeMovie = {
    id?: number;
    title: string;
    poster_path: string;
    overview: string;
    genres: { 
        id: number; 
        name: string; 
    }[];
}