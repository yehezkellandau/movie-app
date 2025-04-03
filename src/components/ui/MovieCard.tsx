import { NavLink, useParams } from "react-router";
type MovieCardProps = {
  id?:number;
  title: string;
  posterUrl: string;
};

const MovieCard = ({ id, title, posterUrl }: MovieCardProps) => {
  const { id: currentId } = useParams(); 
  const isOnDetailsPage = currentId === String(id);
  const CardContent = (
    <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterUrl})` }}
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </div>
    </div>
  );

  return isOnDetailsPage ? CardContent : <NavLink className="m-4" to={`/details/${id}`}>{CardContent}</NavLink>;
};


export default MovieCard;
