import axios from "axios";
import { repositoryType, userType } from "@/types/ApiType";


export class AxiosService {
    async fetchUser (username: string): Promise<userType>  {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    };

    async fetchRepos(username: string): Promise<repositoryType[]>  {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response.data;
    };
}