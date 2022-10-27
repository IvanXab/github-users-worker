import {defineStore} from "pinia";
import {repositoryType} from "../types/ApiType";

interface State {
    repositories: repositoryType[];
    filters: string;
    sortes: string;
}

export const usePepositoresStore = defineStore('repositories', {
    state: () => ({
        repositories: [],
        filters: '',
        sortes: ''
    } as State),
    getters: {
        getFilteredRepos (state) {
            if (state.filters && state.filters !== 'All') {
                return state.repositories.filter((r:repositoryType) => r.language === state.filters);
            }
            if (state.filters === 'All')  {
                return state.repositories;
            }
            return state.repositories;
        },
        getRepositories(state) {
            return state.repositories;
        }
    },
    actions: {
        setRepositories(repos: repositoryType[]) {
            this.repositories = repos;
        },
        setFilter(filterQuery: string) {
            this.filters = filterQuery;
        },
        setSort(sortQuery: string) {
            this.sortes = sortQuery;
        }
    }
});
