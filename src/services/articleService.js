import httpClient from 'services/httpClient';
import {
  getDataBodyFromResponseToData,
  mapDataWithPaginationFromDataDataResponse,
  mapErrorResponseToErrorObject
} from 'utils/api-request.util';

class ArticleService {
  #articleFeedsUrl = '/top-headlines';
  #subscriberExclusiveUrl = '/categories/subscriber-exclusive/posts';

  constructor () {
    this.fetchArticleFeeds = this.fetchArticleFeeds.bind(this);
    this.fetchSubscriberExclusiveArticles = this.fetchSubscriberExclusiveArticles.bind(this);
  }

  /**
   * Fetching article feeds list
   *
   * @typedef {{ page: number, itemsPerPage: number }} PagingParams
   * @param {PagingParams} params
   * @return {Object}
   */
  async fetchArticleFeeds (params) {
    try {
      const responseData = await httpClient.get(
        this.#articleFeedsUrl,
        { params: { page: params.page, pageSize: params.itemsPerPage, country: 'us' } }
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
   * @typedef {{ page: number, itemsPerPage: number }} PagingParams
   * @param {PagingParams} params
   * @return {Object}
   */
  async fetchSubscriberExclusiveArticles (params) {
    try {
      const responseData = await httpClient.get(
        this.#subscriberExclusiveUrl,
        { params: { page: params.page, pageSize: params.itemsPerPage } }
      );
      return getDataBodyFromResponseToData(responseData);
    } catch (err) {
      return mapErrorResponseToErrorObject(err);
    }
  }
}

export default ArticleService;
