import { TypeMovie} from "@/types/api/movie";

type MovieListProps = {
    title: string;
    movieData: TypeMovie[];
}

const MovieList = ({title, movieData} : MovieListProps)=> {
    console.log(movieData)
    return(
        <>
            <p>Title: {title}</p>
            {
                movieData.map(movie =>(
                    <p key={movie.id}>Movie Title: {movie.title}</p>
                ))
            }
        </>
    );
};
export default MovieList;