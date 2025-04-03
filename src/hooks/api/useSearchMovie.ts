import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { TypeMovieList } from "@/types/api/movieList";

const useSearchMovie = (value:string) => {
    const fetchResource = useFetch()
    return useQuery({queryKey:["movies","search", {searchValue:value}], queryFn: async(context)=> {
        const [_key, _index, searchValue] = context.queryKey;
        console.log(searchValue)
        return await fetchResource<TypeMovieList>("search/movie?query="+ searchValue?.searchValue);
    }, retry:false});
}
export default useSearchMovie;