import config from "../release/config";

const basePath = {
    sandbox: `https://jsonplaceholder.typicode.com`,
    live: `https://jsonplaceholder.typicode.com`
}

const posts = (config.live ? basePath.live : basePath.sandbox) + `/posts`;
const events = (config.live ? basePath.live : basePath.sandbox) + `/events`;

export const routes = {
    GET_POSTS: `${posts}`,
    GET_POST_BY_ID: `${posts}`,

    POST_POSTS: `${posts}`,
};