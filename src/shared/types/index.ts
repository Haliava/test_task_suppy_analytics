export type GithubRepositoryURL = `https://github.com/${string}/${string}`;
export type RepositoryData = {
    name: string,
    url: GithubRepositoryURL,
    shortDescriptionHTML: string
}

export type RepositoryObject = {
    repo: RepositoryData,
};

export interface ApiResponse {
    search: {
        repos: RepositoryObject[],
        pageInfo: {
            hasNextPage: boolean,
            endCursor: string | null,
        }
    }
}

export type EntriesSliceState = {
    entries: RepositoryObject[],
    status: 'idle' | 'loading' | 'failed',
    query: string,
    cursor?: string,
    hasNextPage: boolean,
};