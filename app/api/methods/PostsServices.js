import Api from '..';
import { ApiEndpoint, Method } from '../ApiConstants';

/**
  API request signature (URL, method, token, params, data)
 */

export function getPost(country){
  return Api(
    `${ApiEndpoint.GET_POSTS}?country=${country}&apiKey=${ApiEndpoint.API_KEY}`,
    Method.GET,
    null,
    null,
    null
  );
}

export function getNews(query){
  return Api(
    `${ApiEndpoint.GET_NEWS}?q=${query}&apiKey=${ApiEndpoint.API_KEY}`,
    Method.GET,
    null,
    null,
    null
  );
}
