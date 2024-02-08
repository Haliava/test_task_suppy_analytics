import {emptyQueryStub, maxRepoCount, octokit} from "../../shared/constants/data";
import {ApiResponse} from "../../shared/types";

export type TFetchEntries = (arg: {query?: string, cursor?: string}) => Promise<ApiResponse>;
export const fetchEntries: TFetchEntries = async (arg) => {
    if (arg.query === undefined)
        return emptyQueryStub;

    return await octokit.graphql<ApiResponse>(
        `query FetchRepos($cursor: String, $queryStr: String!, $maxRepoCount: Int!) {
          search(query: $queryStr, type: REPOSITORY, first: $maxRepoCount, after: $cursor) {
            repos: edges {
               repo: node {
               ... on Repository {
                     name
                     url
                     shortDescriptionHTML
                 }
               }
            }
            pageInfo {
                hasNextPage
                endCursor
            }
          }
        }`, {
            queryStr: arg.query,
            maxRepoCount: maxRepoCount,
            ...(arg.cursor === undefined ? {} : {cursor: arg.cursor})
        });
}
