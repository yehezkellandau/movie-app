import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import {CreateWithLoginResponse} from '../../types/api/CreateWithLoginResponse';

const useGetToken = () => {
    const fetchResource = useFetch()
    return useQuery({queryKey:["token","getToken"], queryFn: async()=> {
        return await fetchResource<CreateWithLoginResponse>("authentication/token/new");
    }, retry:false});
}
export default useGetToken;