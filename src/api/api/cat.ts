/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class Cat {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Shows information about currently configured aliases to indices including filter and routing infos.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat-alias.html | Elasticsearch API documentation}
    */
  async aliases (this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatAliasesResponse>
  async aliases (this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatAliasesResponse, unknown>>
  async aliases (this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptions): Promise<T.CatAliasesResponse>
  async aliases (this: That, params?: T.CatAliasesRequest | TB.CatAliasesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.name != null) {
      method = 'GET'
      path = `/_cat/aliases/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/aliases'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns information about existing component_templates templates.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat-component-templates.html | Elasticsearch API documentation}
    */
  async componentTemplates (this: That, params?: T.CatComponentTemplatesRequest | TB.CatComponentTemplatesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatComponentTemplatesResponse>
  async componentTemplates (this: That, params?: T.CatComponentTemplatesRequest | TB.CatComponentTemplatesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatComponentTemplatesResponse, unknown>>
  async componentTemplates (this: That, params?: T.CatComponentTemplatesRequest | TB.CatComponentTemplatesRequest, options?: TransportRequestOptions): Promise<T.CatComponentTemplatesResponse>
  async componentTemplates (this: That, params?: T.CatComponentTemplatesRequest | TB.CatComponentTemplatesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.name != null) {
      method = 'GET'
      path = `/_cat/component_templates/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/component_templates'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Provides quick access to the document count of the entire cluster, or individual indices.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat-count.html | Elasticsearch API documentation}
    */
  async count (this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatCountResponse>
  async count (this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatCountResponse, unknown>>
  async count (this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptions): Promise<T.CatCountResponse>
  async count (this: That, params?: T.CatCountRequest | TB.CatCountRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = 'GET'
      path = `/_cat/count/${encodeURIComponent(params.index.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/count'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns help for the Cat APIs.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat.html | Elasticsearch API documentation}
    */
  async help (this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatHelpResponse>
  async help (this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatHelpResponse, unknown>>
  async help (this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptions): Promise<T.CatHelpResponse>
  async help (this: That, params?: T.CatHelpRequest | TB.CatHelpRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_cat'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns information about indices: number of primaries and replicas, document counts, disk size, ...
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat-indices.html | Elasticsearch API documentation}
    */
  async indices (this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatIndicesResponse>
  async indices (this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatIndicesResponse, unknown>>
  async indices (this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptions): Promise<T.CatIndicesResponse>
  async indices (this: That, params?: T.CatIndicesRequest | TB.CatIndicesRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = 'GET'
      path = `/_cat/indices/${encodeURIComponent(params.index.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/indices'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Gets configuration and usage information about data frame analytics jobs.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat-dfanalytics.html | Elasticsearch API documentation}
    */
  async mlDataFrameAnalytics (this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlDataFrameAnalyticsResponse>
  async mlDataFrameAnalytics (this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlDataFrameAnalyticsResponse, unknown>>
  async mlDataFrameAnalytics (this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptions): Promise<T.CatMlDataFrameAnalyticsResponse>
  async mlDataFrameAnalytics (this: That, params?: T.CatMlDataFrameAnalyticsRequest | TB.CatMlDataFrameAnalyticsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.id != null) {
      method = 'GET'
      path = `/_cat/ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/ml/data_frame/analytics'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Gets configuration and usage information about datafeeds.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat-datafeeds.html | Elasticsearch API documentation}
    */
  async mlDatafeeds (this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlDatafeedsResponse>
  async mlDatafeeds (this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlDatafeedsResponse, unknown>>
  async mlDatafeeds (this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptions): Promise<T.CatMlDatafeedsResponse>
  async mlDatafeeds (this: That, params?: T.CatMlDatafeedsRequest | TB.CatMlDatafeedsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['datafeed_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.datafeed_id != null) {
      method = 'GET'
      path = `/_cat/ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/ml/datafeeds'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Gets configuration and usage information about anomaly detection jobs.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat-anomaly-detectors.html | Elasticsearch API documentation}
    */
  async mlJobs (this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlJobsResponse>
  async mlJobs (this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlJobsResponse, unknown>>
  async mlJobs (this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptions): Promise<T.CatMlJobsResponse>
  async mlJobs (this: That, params?: T.CatMlJobsRequest | TB.CatMlJobsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['job_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.job_id != null) {
      method = 'GET'
      path = `/_cat/ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/ml/anomaly_detectors'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Gets configuration and usage information about inference trained models.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat-trained-model.html | Elasticsearch API documentation}
    */
  async mlTrainedModels (this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatMlTrainedModelsResponse>
  async mlTrainedModels (this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatMlTrainedModelsResponse, unknown>>
  async mlTrainedModels (this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptions): Promise<T.CatMlTrainedModelsResponse>
  async mlTrainedModels (this: That, params?: T.CatMlTrainedModelsRequest | TB.CatMlTrainedModelsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['model_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.model_id != null) {
      method = 'GET'
      path = `/_cat/ml/trained_models/${encodeURIComponent(params.model_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/ml/trained_models'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Gets configuration and usage information about transforms.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/cat-transforms.html | Elasticsearch API documentation}
    */
  async transforms (this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.CatTransformsResponse>
  async transforms (this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.CatTransformsResponse, unknown>>
  async transforms (this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptions): Promise<T.CatTransformsResponse>
  async transforms (this: That, params?: T.CatTransformsRequest | TB.CatTransformsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['transform_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.transform_id != null) {
      method = 'GET'
      path = `/_cat/transforms/${encodeURIComponent(params.transform_id.toString())}`
    } else {
      method = 'GET'
      path = '/_cat/transforms'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
