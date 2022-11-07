export type userType = {
    name: string,
    login: string,
    email: string,
    location: string,
    avatar_url: string,
    html_url: string,
    bio: string,
};

export type repositoryType = {
    name: string,
    description: string,
    language: string,
    stargazers_count: string,
    forks_count: string,
    html_url: string,
};

export type optionsType = {
    value: string,
    label: string,
};