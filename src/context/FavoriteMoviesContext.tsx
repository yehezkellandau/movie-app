import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { TypeMovie } from "@/types/api/movie";
import { useAuthContext } from "./AuthContext";
import useGetFavoriteMovies from "@/hooks/api/useGetFavoriteMovites";

type FavoriteMoviesContextType = {
    favoriteMovies?: TypeMovie[];
}

const FavoriteMoviesContext = createContext<FavoriteMoviesContextType>({
    favoriteMovies: [],
})
export const useFavoriteMoviesContext = ()=>useContext(FavoriteMoviesContext);

const FavoriteMoviesContextProvider = ({children}:PropsWithChildren) => {
    const {isAuthenticated} = useAuthContext();
    const {data,refetch} = useGetFavoriteMovies();
    
    useEffect(()=> {
        console.log(isAuthenticated)
        if(isAuthenticated){
            refetch();
            
        }
        
    }, [isAuthenticated])
    return (
        <FavoriteMoviesContext.Provider
        value={{favoriteMovies: data?.results}}
        >{children}</FavoriteMoviesContext.Provider>
    );
};
export default FavoriteMoviesContextProvider;