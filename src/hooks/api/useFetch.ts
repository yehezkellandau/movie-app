const useFetch = () => {
    const fetchResource = async <T>(url: string,config?:RequestInit):Promise<T> => {
        try{
            const response = await fetch("https://api.themoviedb.org/3/" + url, {...config, headers:{...config?.headers, Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTAxZTBlZTRmNzFkN2ViNzJiZjk2ZTQ0MWE0NDViMyIsIm5iZiI6MTc0MzQzOTg1NS4xODQsInN1YiI6IjY3ZWFjN2VmYjVlMDI1OGZjZDBlYzg5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Jw7GIGQ2MH-8TllstdlwR0ffaGqj9W04GmjDTbbIBI"}});
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