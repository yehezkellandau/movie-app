import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { TypeMovie } from "@/types/api/movie";

const useGetMovieDetails = (id:number) => {
    const fetchResource = useFetch()
    return useQuery({queryKey:["movie","details"], queryFn: async()=> {
        return await fetchResource<TypeMovie>("movie/"+ id);
    }, retry:false});
}
export default useGetMovieDetails;