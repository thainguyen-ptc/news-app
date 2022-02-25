import httpClient from 'services/httpClient';
import {
  mapDataWithPaginationFromDataDataResponse,
  mapErrorResponseToErrorObject
} from 'utils/api-request.util';

class ArticleService {
  #articleFeedsUrl = '/top-headlines';
  #topHeadlinesResourcesUrl = '/top-headlines/sources';

  constructor () {
    this.fetchArticleFeeds = this.fetchArticleFeeds.bind(this);
    this.fetchTopHeadlinesResources = this.fetchTopHeadlinesResources.bind(this);
  }

  /**
   * Fetching article feeds list
   *
   * @typedef {{ page: number, itemsPerPage: number, sources: string }} RequestParams
   * @param {RequestParams} params
   * @return {Object}
   */
  async fetchArticleFeeds (params) {
    try {
      const {
        itemsPerPage: pageSize,
        ...restParams
      } = params;
      const responseData = await httpClient.get(
        this.#articleFeedsUrl,
        {
          params: {
            pageSize,
            ...restParams
          }
        }
      );
      const dataWithPaging = mapDataWithPaginationFromDataDataResponse(responseData, 'articles');
      const totalItems = dataWithPaging.pagingInfo.totalItems,
        totalPages = Math.ceil(totalItems / params.itemsPerPage);

      return {
        data: dataWithPaging.data,
        pagingInfo: {
          totalItems,
          itemsPerPage: params.itemsPerPage,
          currentPage: params.page,
          totalPages
        }
      };
    } catch (err) {
      return mapErrorResponseToErrorObject(err);
    }
  }

  /**
   * Fetching subscriber exclusive article list
   *
   * @return {Object}
   */
  async fetchTopHeadlinesResources () {
    try {
      const responseData = await httpClient.get(
        this.#topHeadlinesResourcesUrl,
        { params: {} }
      );
      const dataWithPaging = mapDataWithPaginationFromDataDataResponse(responseData, 'sources');
      const totalItems = dataWithPaging.data.length,
        totalPages = 1;

      return {
        data: dataWithPaging.data,
        pagingInfo: {
          totalItems,
          itemsPerPage: totalItems,
          currentPage: 1,
          totalPages
        }
      };
    } catch (err) {
      return mapErrorResponseToErrorObject(err);
    }
  }
}

export default ArticleService;
