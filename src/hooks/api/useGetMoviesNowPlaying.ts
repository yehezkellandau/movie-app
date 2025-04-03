import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { TypeMovieList } from "@/types/api/movieList";

const useGetMoviesPopular = () => {
    const fetchResource = useFetch()
    return useQuery({queryKey:["movies","now_playing"], queryFn: async()=> {
        return await fetchResource<TypeMovieList>("movie/now_playing");
    }, retry:false});
}
export default useGetMoviesPopular;