import config from "../release/config";

const basePath = {
    dev:  config.local ? `https://jsonplaceholder.typicode.com` : 'https://jsonplaceholder.typicode.com',
    live: `https://jsonplaceholder.typicode.com`
}

const posts = (config.live ? basePath.live : basePath.dev) + `/posts`;
const events = (config.live ? basePath.live : basePath.dev) + `/events`;

export const routes = {
    GET_POSTS: `${posts}`,
    GET_POST_BY_ID: `${posts}`,

    POST_POSTS: `${posts}`,
};