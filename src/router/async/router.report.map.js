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
        component: () => import('@/ensoft/form/ReportMonth')
    },
    season: {
        path: 'season',
        name: '新季报',
        invisible: true,
        component: () => import('@/ensoft/form/ReportSeason')
    },
    reportMonths: {
        path: 'report/months',
        component: view.blank,
        //invisible: true
    },
    monthStatusNew: {
        path: 'status/new',
        name: '新建',
        component: () => import('@/ensoft/view/ReportMonth')
    },
    monthStatusDone: {
        path: 'status/done',
        name: '已报',
        component: () => import('@/ensoft/view/ReportMonth')
    },
    reportSeasons: {
        path: 'report/seasons',
        component: view.blank,
        //invisible: true
    },
    seasonStatusNew: {
        path: 'status/new',
        name: '新建',
        component: () => import('@/ensoft/view/ReportSeason')
    },
    seasonStatusDone: {
        path: 'status/done',
        name: '已报',
        component: () => import('@/ensoft/view/ReportSeason')
    },
}

export default routerMapReport
