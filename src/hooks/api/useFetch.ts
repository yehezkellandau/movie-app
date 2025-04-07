
const useFetch = () => {
    const fetchResource = async <T>(url: string,config?:RequestInit):Promise<T> => {
        try{
            const response = await fetch(import.meta.env.VITE_URL_API + url, {...config, headers:{...config?.headers, accept:"application/json", "Content-Type": "application/json", Authorization:"Bearer " + import.meta.env.VITE_TOKEN_API}});
            if(!response.ok){
                throw new Error("Error");
            }else{
                return await response.json();
            }
        }
        catch(error:any){
            throw error;
        }
    }
    return fetchResource;
}
export default useFetch;