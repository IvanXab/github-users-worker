import { defineStore } from "pinia";
import { repositoryType } from "@/types/ApiType";

interface State {
  repositories: repositoryType[];
  filters: string;
  sorts: string;
};

export const useRepositoriesStore = defineStore('repositories', {
    state: () => ({
      repositories: [],
      filters: '',
      sorts: ''
    } as State),
    getters: {
        getFilteredRepositories(state) {
            const repositories: repositoryType[] = this.getSortedRepositories;
            if (state.filters && state.filters !== 'All') {
                return repositories.filter((repository: repositoryType) => repository.language === state.filters);
            }
            if (state.filters === 'All')  {
                return repositories;
            }
            return repositories;
        },
        getSortedRepositories(state): repositoryType[] {
            if (state.sorts === 'stars') {
                return [...state.repositories].sort((a: repositoryType, b: repositoryType) => {
                    if (a.stargazers_count > b.stargazers_count) {
                        return -1;
                    }
                    if (a.stargazers_count < b.stargazers_count) {
                        return 1;
                    }
                    return 0;
                });
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
            this.sorts = sortQuery;
        }
    }
});