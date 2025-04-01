type MovieCardProps = {
  title: string;
  posterUrl: string;
};

const MovieCard = ({ title, posterUrl }: MovieCardProps) => {
  return (
    <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${posterUrl})` }}
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
