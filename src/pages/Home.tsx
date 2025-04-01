import Header from "@/components/home/header";
import MovieCarousel from "@/components/home/MovieCarousel";
import useGetMoviesNowPlaying from "@/hooks/api/useGetMoviesNowPlaying";
import useGetMoviesPopular from "@/hooks/api/useGetMoviesPopular";
import useGetMoviesTopRated from "@/hooks/api/useGetMoviesTopRated";
import useGetMoviesUpcoming from "@/hooks/api/useGetMoviesUpcoming";

const Home  = () => {
    const {data: dataPopular, isLoading : isLoadingPopular, error: errorPopular} = useGetMoviesPopular();
    const {data: dataNowPlaying, isLoading: isLoadingNowPlaying, error: errorNowPlaying} = useGetMoviesNowPlaying();
    const {data: dataTopRated, isLoading: isLoadingTopRated, error: errorTopRated} = useGetMoviesTopRated();
    const {data: dataUpcoming, isLoading: isLoadingUpcoming, error: errorUpcoming} = useGetMoviesUpcoming();
    
    if(isLoadingPopular || 
        isLoadingNowPlaying ||
        isLoadingTopRated ||
        isLoadingUpcoming
    ){
        return <p>Loading...</p>
    }
    if( errorPopular || 
        errorNowPlaying|| 
        errorTopRated||
        errorUpcoming ||
        !dataPopular || 
        !dataNowPlaying ||
        !dataTopRated ||
        !dataUpcoming
    ){
       return  <p>error can't load !!</p>
    }

    return (
        <>
            <Header />
            <MovieCarousel title="Popular" movieData={dataPopular.results}/>
            <MovieCarousel title="Now Playing" movieData={dataNowPlaying.results}/>
            <MovieCarousel title="Top Rated" movieData={dataTopRated.results}/>
            <MovieCarousel title="Upcoming" movieData={dataUpcoming.results}/>
        </>
    );
};
export default Home;
