import Mock from 'mockjs'
import '@/mock/extend'
import {parseUrlParams} from '@/utils/request'



const filmList = Mock.mock({
    'list|99': [{
        'key|+1': 1,
        'id|+1': 1,
        'logo|1-4': 1,
        'name': '@FILMS',
        'auditTime': '@DATETIME'
    }]
})

Mock.mock(RegExp(`${process.env.VUE_APP_API_BASE_URL}/films` + '.*'),'get', ({url}) => {
    const params = parseUrlParams(decodeURI(url))
    let {page, pageSize} = params
    page = eval(page) - 1 || 0
    pageSize = eval(pageSize) || 10
    delete params.page
    delete params.pageSize
    let result = filmList.list.filter(item => {
        for (let [key, value] of Object.entries(params)) {
            if (item[key] != value) {
                return false
            }
        }
        return true
    })
    const total = result.length
    if ((page) * pageSize > total) {
        result = []
    } else {
        result = result.slice(page * pageSize, (page + 1) * pageSize)
    }
    return {
        code: 0,
        message: 'success',
        data: {
            page: page + 1,
            pageSize,
            total,
            list: result
        }
    }
})

const columnsConfig = [
    {
        title: '序',
        dataIndex: 'id'
    },
    {
        searchAble: true,
        dataIndex: 'logo',
        dataType: 'select',
        slots: {title: 'statusTitle'},
        scopedSlots: {customRender: 'status'},
        search: {
            selectOptions: [
                {title: '已下单', value: 1},
                {title: '已付款', value: 2},
                {title: '已审核', value: 3},
                //{title: '已发货', value: 4}
            ]
        }
    },
    {
        title: '详情',
        dataIndex: 'name',
        searchAble: true
    },
    {
        title: '保存时间',
        dataIndex: 'auditTime',
        dataType: 'time',
    }
]
Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/columns/film`, 'get', () => {
    return columnsConfig
})
