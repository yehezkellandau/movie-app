import MovieCard from "@/components/ui/MovieCard";
import SearchBar from "@/components/ui/searchBar";
import useSearchMovie from "@/hooks/api/useSearchMovie";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
const SearchResults = () => {
    const {title} = useParams();
    const [value, setValue] = useState<string>(title || "")
    const [searchValue, setSearchValue] = useState<string>(title || "");
    const {isLoading, error, data}  = useSearchMovie(searchValue);


    const renderContent = useMemo(() => {
        if(isLoading){
            return <p>Loading....</p>
        }
        if(error || !data){
            return <p>error...</p>
        }
        return data.results.map(movie => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} posterUrl={movie.poster_path}/>
        ))
    },[isLoading,error,data]) 

    const handleSearch = () => {
        setSearchValue(value);
    }
    
    return (
        <div>
            <SearchBar defaultValue={title} onSearch={handleSearch} onChange={(e)=> setValue(e.target.value)}/>
            <div>
                <p className="text-sm ml-5">Showing results for: <span className="text-lg">{value}</span></p>
            </div>
            <div className="grid-container">
            {renderContent}
            </div>
        </div>
    );
};
export default SearchResults;