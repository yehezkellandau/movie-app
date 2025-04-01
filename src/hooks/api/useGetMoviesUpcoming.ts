import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { TypeMovieList } from "@/types/api/movieList";

const useGetMoviesUpcoming = () => {
    const fetchResource = useFetch()
    return useQuery({queryKey:["movies","Upcoming"], queryFn: async()=> {
        return await fetchResource<TypeMovieList>("movie/upcoming");
    }, retry:false});
}
export default useGetMoviesUpcoming;