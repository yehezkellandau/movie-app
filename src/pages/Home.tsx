import MovieList from "@/components/home/MovieList";
import useGetMoviesNowPlaying from "@/hooks/api/useGetMoviesNowPlaying";
import useGetMoviesPopular from "@/hooks/api/useGetMoviesPopular";

const Home  = () => {
    const {data: dataPopular, isLoading : isLoadingPopular, error: errorPopular} = useGetMoviesPopular();
    const {data: dataNowPlaying, isLoading: isLoadingNowPlaying, error: errorNowPlaying} = useGetMoviesNowPlaying();
    
    if(isLoadingPopular || isLoadingNowPlaying){
        return <p>Loading...</p>
    }
    if(errorPopular || !dataPopular || errorNowPlaying|| !dataNowPlaying){
       return  <p>error can't load !!</p>
    }

    return (
        <>
            <MovieList title="Popular" movieData={dataPopular.results}/>
            <MovieList title="Now Playing" movieData={dataNowPlaying.results}/>
        </>
    );
};
export default Home;
