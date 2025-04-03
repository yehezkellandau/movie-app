import MovieCard from "@/components/ui/MovieCard";
import useGetMovieDetails from "@/hooks/api/useGetMovieDetails";
import { useMemo } from "react";
import { useParams } from "react-router";
const MovieDetails = () => {
    const { id } = useParams();

    const movieId = id ? parseInt(id, 10) : null;

    if (!movieId) {
        return <p>Erreur : ID invalide</p>;
    }

const { isLoading, error, data } = useGetMovieDetails(movieId);
    const renderContent = useMemo(() => {
        if(isLoading){
            return <p>Loading....</p>
        }
        if(error || !data){
            return <p>error...</p>
        }
        return <MovieCard id={data.id} title={data.title} posterUrl={data.poster_path} />
          
    },[isLoading,error,data]) 

    
    return (
        <div>
            <div className="grid-container">
            {renderContent}
            </div>
        </div>
    );
};
export default MovieDetails;