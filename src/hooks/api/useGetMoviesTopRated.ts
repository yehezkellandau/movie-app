import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { TypeMovieList } from "@/types/api/movieList";

const useGetMoviesTopRated = () => {
    const fetchResource = useFetch()
    return useQuery({queryKey:["movies","topRated"], queryFn: async()=> {
        return await fetchResource<TypeMovieList>("movie/top_rated");
    }, retry:false});
}
export default useGetMoviesTopRated;