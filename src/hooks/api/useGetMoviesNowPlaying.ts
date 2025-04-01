import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { TypeMovieList } from "@/types/api/movieList";

const useGetMoviesNowPlaying = () => {
    const fetchResource = useFetch()
    return useQuery({queryKey:["movies","nowPlaying"], queryFn: async()=> {
        return await fetchResource<TypeMovieList>("movie/now_playing");
    }, retry:false});
}
export default useGetMoviesNowPlaying;