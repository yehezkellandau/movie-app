import { useAuthContext } from "@/context/AuthContext";
import { Link, useParams } from "react-router";
import { Button } from "./button";
import { Heart } from "lucide-react";
import useAddFavorite from "@/hooks/api/useAddFavorite";
import { useFavoriteMoviesContext } from "@/context/FavoriteMoviesContext";

type MovieCardProps = {
  id?:number;
  title: string;
  posterUrl: string;
};

const MovieCard = ({ id, title, posterUrl }: MovieCardProps) => {
  const { isAuthenticated } = useAuthContext();
  const { id: currentId } = useParams(); 
  const isOnDetailsPage = currentId === String(id);
  const { mutate } = useAddFavorite();
  const { favoriteMovies } = useFavoriteMoviesContext();
  if( id === undefined ){
    return <p>error...</p>
  }
  const isFavorite = favoriteMovies ? favoriteMovies?.findIndex((movie)=> movie.id === id) > -1 : false;
 
  const CardContent = (
    <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-lg flex-shrink-0 group">
      {/* Image background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-300"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterUrl})` }}
      />
  
      {/* Overlay with dark layer + content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold flex-1 truncate">{title}</h3>
  
          {isAuthenticated && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                mutate({ mediaId: id, favorite: !isFavorite });
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <Heart
                className="w-9 h-9"
                fill={isFavorite ? "red" : "none"}
                color="red"
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
  
  

  return isOnDetailsPage ? CardContent : <Link className="m-4" to={`/details/${id}`}>{CardContent}</Link>;
};


export default MovieCard;
