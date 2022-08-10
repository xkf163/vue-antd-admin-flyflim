import {GOODS, GOODS_COLUMNS, FILM, FILM_COLUMNS, STAR, STAR_COLUMNS} from './api'
import {METHOD, request} from '@/utils/request'

export async function goodsList(params) {
  return request(GOODS, METHOD.GET, params)
}

export async function goodsColumns() {
  return request(GOODS_COLUMNS, METHOD.GET)
}

export async function filmList(params) {
  return request(FILM, METHOD.GET, params)
}

export async function filmColumns(params) {
  return request(FILM_COLUMNS, METHOD.GET, params)
}

export async function starList(params) {
  return request(STAR, METHOD.GET, params)
}

export async function starColumns(params) {
  return request(STAR_COLUMNS, METHOD.GET, params)
}

export default {goodsList, goodsColumns, filmList, filmColumns, starList, starColumns}
