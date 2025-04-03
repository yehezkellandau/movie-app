import MovieCard from "@/components/ui/MovieCard";
import SearchBar from "@/components/ui/searchBar";
import useSearchMovie from "@/hooks/api/useSearchMovie";
// import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router";
const SearchResults = () => {
    const {title} = useParams();
    const {isLoading, error, data}  = useSearchMovie(title ||  "");
    const [searchValue, setSearchValue] = useState<string>("");
    // const queryClient = useQueryClient();
    const navigate = useNavigate();

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

    // const handleSearch = () => {
    //     queryClient.invalidateQueries({queryKey:["movies","search", {searchValue}]});
    // }
    const handleSearch = () => {
        if (searchValue) {
            navigate(`/search/${searchValue}`); 
        }
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    
    return (
        <div>
            <SearchBar defaultValue={title} onSearch={handleSearch} onKeyDown={handleKeyDown} onChange={(e) => setSearchValue(e.target.value)}/>
            <div>
                <p className="text-sm ml-5">Showing results for: <span className="text-lg">{title}</span></p>
            </div>
            <div className="grid-container">
            {renderContent}
            </div>
        </div>
    );
};
export default SearchResults;