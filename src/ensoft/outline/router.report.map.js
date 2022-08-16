// 视图组件
const view = {
    tabs: () => import('@/layouts/tabs'),
    blank: () => import('@/layouts/BlankView'),
    page: () => import('@/layouts/PageView')
}

// 路由组件注册
const routerMapReport = {
    reportApplication: {
        path: 'report',
        name:'信息报送',
        component: view.blank
    },
    reportDailyNav: {
        name: '信息日报导航',
        path: 'dailys-v',
        component: view.blank,
        //invisible: true
    },
    dailyViewNew: {
        path: 'status/new',
        name: '日报视图新建',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    dailyViewDone: {
        path: 'status/done',
        name: '日报视图已报',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    reportMonthNav: {
        name: '信息月报导航',
        path: 'months-v',
        component: view.blank,
        //invisible: true
    },
    monthViewNew: {
        path: 'status/new',
        name: '新建',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    monthViewDone: {
        path: 'status/done',
        name: '月报视图已报',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    reportMonthFormNew: {
        path: 'month',
        name: '月报新建',
        invisible: true,
        component: () => import('@/ensoft/form/ReportMonthForm')
    },
    reportMonthFormDetail: {
        path: ':id',
        name: '月报详情',
        invisible: true
    },
///////////////////////////////////////////////////////////
    reportSeasonNav: {
        name: '信息季报导航',
        path: 'seasons-v',
        component: view.blank
    },
    seasonViewNew: {
        path: 'status/new',
        name: '季报视图新建',
        component: () => import('@/ensoft/view/ReportSeasonView')
    },
    seasonViewDone: {
        path: 'status/done',
        name: '季报视图已报',
        component: () => import('@/ensoft/view/ReportSeasonView')
    },
    reportSeasonFormNew: {
        path: 'season',
        name:'季报新建',
        invisible: true,
        component: () => import('@/ensoft/form/ReportSeasonForm')
    },
    reportSeasonFormDetail: {
        path: ':id',
        name: '季报详情',
        invisible: true
    },

////////////////////////////////
    reportYearNav: {
        name: '信息年报导航',
        path: 'years-v',
        component: view.blank
    },
    yearViewNew: {
        path: 'status/new',
        name: '年报视图新建',
        component: () => import('@/ensoft/view/ReportSeasonView')
    },
    yearViewDone: {
        path: 'status/done',
        name: '季报视图已报',
        component: () => import('@/ensoft/view/ReportSeasonView')
    },




}

export default routerMapReport
