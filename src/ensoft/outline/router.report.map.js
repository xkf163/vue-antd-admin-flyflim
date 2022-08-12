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
        //name: '月报新建',
        invisible: true,
        component: () => import('@/ensoft/form/ReportMonthForm')
    },
    monthDetail: {
        path: ':id',
        name: '月报',
        invisible: true,
    },
    season: {
        path: 'season',
        //name: '季报新建',
        invisible: true,
        component: () => import('@/ensoft/form/ReportSeasonForm')
    },
    seasonDetail: {
        path: ':id',
        name: '季报',
        invisible: true,
        //component: () => import('@/ensoft/form/ReportSeasonForm')
    },
    reportMonths: {
        name: '信息月报导航',
        path: 'report/months',
        component: view.blank,
        //invisible: true
    },
    monthListNew: {
        path: 'status/new',
        name: '新建',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    monthListDone: {
        path: 'status/done',
        name: '月报视图已报',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    reportSeasons: {
        name: '信息季报导航',
        path: 'report/seasons',
        component: view.blank,
        //invisible: true
    },
    seasonListNew: {
        path: 'status/new',
        name: '季报视图新建',
        component: () => import('@/ensoft/view/ReportSeasonView')
    },
    seasonListDone: {
        path: 'status/done',
        name: '季报视图已报',
        component: () => import('@/ensoft/view/ReportSeasonView')
    },

}

export default routerMapReport
