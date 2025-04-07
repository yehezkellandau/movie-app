import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { ProfileResponse } from "@/types/api/ProfileResponse";
import { useAuthContext } from "@/context/AuthContext";

const useGetProfile = () => {
    const fetchResource = useFetch()
    const { sessionId } = useAuthContext();
    return useQuery({queryKey:["profile","detailsProfile"], queryFn: async()=> {
        return await fetchResource<ProfileResponse>("account/"+ import.meta.env.VITE_ACCOUNT_ID + "?session_id=" + sessionId);
    }, retry:false});
}
export default useGetProfile;