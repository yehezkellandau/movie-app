import MovieList from "@/components/home/MovieList";
import useGetMoviesNowPlaying from "@/hooks/api/useGetMoviesNowPlaying";
import useGetMoviesPopular from "@/hooks/api/useGetMoviesPopular";
import useGetMoviesTopRated from "@/hooks/api/useGetMoviesTopRated";

const Home  = () => {
    const {data: dataPopular, isLoading : isLoadingPopular, error: errorPopular} = useGetMoviesPopular();
    const {data: dataNowPlaying, isLoading: isLoadingNowPlaying, error: errorNowPlaying} = useGetMoviesNowPlaying();
    const {data: dataTopRated, isLoading: isLoadingTopRated, error: errorTopRated} = useGetMoviesTopRated();
    
    if(isLoadingPopular || 
        isLoadingNowPlaying ||
        isLoadingTopRated
    ){
        return <p>Loading...</p>
    }
    if(errorPopular || 
        errorNowPlaying|| 
        errorTopRated||
        !dataPopular || 
        !dataNowPlaying ||
        !dataTopRated
    ){
       return  <p>error can't load !!</p>
    }

    return (
        <>
            <MovieList title="Popular" movieData={dataPopular.results}/>
            <MovieList title="Now Playing" movieData={dataNowPlaying.results}/>
            <MovieList title="Top Rated" movieData={dataTopRated.results}/>
            
        </>
    );
};
export default Home;
