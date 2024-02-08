import {Octokit} from "@octokit/core";
import {paginateGraphql} from "@octokit/plugin-paginate-graphql";
import {ApiResponse, EntriesSliceState} from "../types";

export const emptyQueryStub: ApiResponse = {
    search: {
        repos: [
            {
                repo: {
                    name: 'Здесь будут выведены репозитории списком',
                    url: 'https://github.com/RHDV-Freelance/Afisha',
                    shortDescriptionHTML: 'по нажитию на кнопку загрузятся +10 репозиториев'
                },
            },
        ],
        pageInfo: {
            hasNextPage: false,
            endCursor: null,
        }
    }
};

export const initialSliceState: EntriesSliceState = {
    entries: emptyQueryStub.search.repos,
    status: 'idle',
    query: '',
    hasNextPage: true,
}

const MyOctokit = Octokit.plugin(paginateGraphql);
export const octokit = new MyOctokit({ auth: 'TOKEN_HERE' });

export const maxRepoCount = 10;