import MovieList from "@/components/home/MovieList";
import useGetMoviesNowPlaying from "@/hooks/api/useGetMoviesNowPlaying";

const Home  = () => {
    const {data, isLoading, error} = useGetMoviesNowPlaying();
    if(isLoading){
        return <p>Loading...</p>
    }
    if(error || !data){
       return  <p>error can't load !!</p>
    }
    return (
        <MovieList title="Popular" movieData={data.results}/>
    );
};
export default Home;
