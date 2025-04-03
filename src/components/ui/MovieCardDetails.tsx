import { Link, useParams } from "react-router";
type MovieCardDetailsProps = {
  id?:number;
  title: string;
  posterUrl: string;
  overview: string;
  genre:string;
};

const MovieCardDetails = ({ id, title, posterUrl, overview, genre }: MovieCardDetailsProps) => {
  const { id: currentId } = useParams(); 
  const isOnDetailsPage = currentId === String(id);
  const CardContent = (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col lg:flex-row">
          <img 
            src={`https://image.tmdb.org/t/p/w500${posterUrl}`} 
            alt={title} 
            className="w-full lg:w-1/3 h-80 object-cover rounded-lg shadow-md"
          />
          <div className="lg:ml-6 mt-4 lg:mt-0 flex flex-col justify-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-gray-400 mt-2">{genre}</p>
            <p className="text-gray-300 mt-4 leading-relaxed">{overview}</p>
          </div>
        </div>
      </div>
  );

  return isOnDetailsPage ? CardContent : <Link className="m-4" to={`/details/${id}`}>{CardContent}</Link>;
};


export default MovieCardDetails;
