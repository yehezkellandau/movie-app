export type ProfileResponse = {
    avatar: {
        gravatar: {
            hash: string;
        },
        tmdb: {
            avatar_path: string | null;
        }
    },
    id: number;
    name:string;
    username: string;
}