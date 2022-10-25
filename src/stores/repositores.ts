import {defineStore} from "pinia";
import {repositoryType} from "../types/ApiType";

type repositoryStore = {
    repositories: repositoryType[] | null
}

export const usePepositoresStore = defineStore<string, repositoryStore>({
    id:'repositories',
    state: () => ({
        repositories: null
    }),
    getters: {

    }
});