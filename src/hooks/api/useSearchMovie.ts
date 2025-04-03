import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { TypeMovieList } from "@/types/api/movieList";

const useSearchMovie = (value:string) => {
    const fetchResource = useFetch()
    return useQuery({queryKey:["movies","search", value], queryFn: async(context)=> {
        const [_key, _index, searchValue] = context.queryKey;
        return await fetchResource<TypeMovieList>("search/movie?query="+ searchValue);
    }, retry:false});
}
export default useSearchMovie;