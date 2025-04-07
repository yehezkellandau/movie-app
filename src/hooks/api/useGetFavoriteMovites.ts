import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { useAuthContext } from "@/context/AuthContext";
import { TypeMovieList } from "@/types/api/movieList";

const useGetFavoriteMovies = () => {
    const fetchResource = useFetch()
    const { sessionId } = useAuthContext();
    return useQuery({queryKey:["movie","favorite"], queryFn: async()=> {
        return await fetchResource<TypeMovieList>(`account/${import.meta.env.VITE_ACCOUNT_ID}/favorite/movies?session_id=${sessionId}`);
    }, retry:false});
}
export default useGetFavoriteMovies;