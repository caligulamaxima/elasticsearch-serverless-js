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

import bulkApi from './api/bulk'
import clearScrollApi from './api/clear_scroll'
import IndicesApi from './api/indices'
import infoApi from './api/info'
import msearchApi from './api/msearch'
import msearchTemplateApi from './api/msearch_template'
import scrollApi from './api/scroll'
import searchApi from './api/search'

export default interface API {
  new(): API
  bulk: typeof bulkApi
  clearScroll: typeof clearScrollApi
  indices: IndicesApi
  info: typeof infoApi
  msearch: typeof msearchApi
  msearchTemplate: typeof msearchTemplateApi
  scroll: typeof scrollApi
  search: typeof searchApi
}

const kIndices = Symbol('Indices')

export default class API {
  [kIndices]: symbol | null
  constructor () {
    this[kIndices] = null
  }
}

API.prototype.bulk = bulkApi
API.prototype.clearScroll = clearScrollApi
API.prototype.info = infoApi
API.prototype.msearch = msearchApi
API.prototype.msearchTemplate = msearchTemplateApi
API.prototype.scroll = scrollApi
API.prototype.search = searchApi

Object.defineProperties(API.prototype, {
  indices: {
    get () { return this[kIndices] === null ? (this[kIndices] = new IndicesApi(this.transport)) : this[kIndices] }
  }
})
