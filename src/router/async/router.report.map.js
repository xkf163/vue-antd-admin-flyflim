// 视图组件
const view = {
    tabs: () => import('@/layouts/tabs'),
    blank: () => import('@/layouts/BlankView'),
    page: () => import('@/layouts/PageView')
}


// 路由组件注册
const routerMapReport = {
    report: {
        path: 'report',
        component: view.blank,
        invisible: true
    },
    month: {
        path: 'month',
        name: '新月报',
        invisible: true,
        component: () => import('@/ensoft/form/ReportMonthForm')
    },
    season: {
        path: 'season',
        name: '新季报',
        invisible: true,
        component: () => import('@/ensoft/form/ReportSeasonForm')
    },
    reportMonths: {
        path: 'report/months',
        component: view.blank,
        //invisible: true
    },
    monthStatusNew: {
        path: 'status/new',
        name: '新建',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    monthStatusDone: {
        path: 'status/done',
        name: '已报',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    reportSeasons: {
        path: 'report/seasons',
        component: view.blank,
        //invisible: true
    },
    seasonStatusNew: {
        path: 'status/new',
        name: '新建',
        component: () => import('@/ensoft/view/ReportSeasonView')
    },
    seasonStatusDone: {
        path: 'status/done',
        name: '已报',
        component: () => import('@/ensoft/view/ReportSeasonView')
    },
}

export default routerMapReport
