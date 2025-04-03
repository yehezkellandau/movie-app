import MovieCardDetails from "@/components/ui/MovieCardDetails";
import useGetMovieDetails from "@/hooks/api/useGetMovieDetails";
import { useMemo } from "react";
import { useParams } from "react-router";
const MovieDetails = () => {
    const { id } = useParams();

    const movieId = id ? parseInt(id, 10) : -1;
    const { isLoading, error, data } = useGetMovieDetails(movieId);

    const renderContent = useMemo(() => {
        if(isLoading){
            return <p>Loading....</p>
        }
        if(error || !data){
            return <p>error...</p>
        }
        return <MovieCardDetails title={data.title} posterUrl={data.poster_path} overview={data.overview} genre={data.genres.map((genre) => genre.name).join(", ")}/>
          
    },[isLoading,error,data]) 

    
    return (
        <div>
            <div>
            {renderContent}
            </div>
        </div>
    );
};
export default MovieDetails;