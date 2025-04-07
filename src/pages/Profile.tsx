import useGetProfile from "@/hooks/api/useGetProfile";

const Profile = ()=> {
    const { data, isLoading, isError } = useGetProfile();
    if(isLoading){
        return <p>Loading...</p>
    }
    if(isError || !data){
        return <p>Error...</p>
    }
    // return (
    //     <div>
    //         <p>username: {data.username}</p>
    //     </div>
    // )
    const getInitials = (username: string) => {
        const words = username.trim().split(" ");
        if (words.length === 1) return words[0][0]?.toUpperCase();
        return (words[0][0] + words[1][0]).toUpperCase();
      };


    const hasAvatar = !!data.avatar.tmdb.avatar_path;
    const avatarUrl = hasAvatar
      ? `https://image.tmdb.org/t/p/w200${data.avatar.tmdb.avatar_path}`
      : undefined;
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
          <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 text-center">
            {hasAvatar ? (
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-md border"
              />
            ) : (
              <div className="w-32 h-32 rounded-full mx-auto bg-gray-300 text-white flex items-center justify-center text-4xl font-bold shadow-md">
                {getInitials(data.username)} {/* Utilisation de username pour les initiales */}
              </div>
            )}
    
            <h1 className="text-2xl font-bold mt-4 text-gray-800">{data.name}</h1> {/* Affiche le nom complet */}
            <p className="text-gray-500">@{data.username}</p> {/* Affiche le username */}
          </div>
        </div>
      );
}
export default Profile;