// 视图组件
const view = {
    tabs: () => import('@/layouts/tabs'),
    blank: () => import('@/layouts/BlankView'),
    page: () => import('@/layouts/PageView')
}

// 路由组件注册
const routerMapReport = {

    defectApplication: {
        path: 'defect',
        name:'隐患风险管理',
        component: view.blank
    },

    defectNav: {
        name: '隐患管理',
        path: 'defects-v',
        component: view.blank,
        //invisible: true
    },
    defectViewNew: {
        path: 'status/new',
        name: '新建',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    defectViewDoing: {
        path: 'status/doing',
        name: '在途',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    defectViewExpired: {
        path: 'status/expired',
        name: '超期',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    defectViewDone: {
        path: 'status/done',
        name: '完成',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    defectViewAll: {
        path: 'status/all',
        name: '所有',
        component: () => import('@/ensoft/view/ReportMonthView')
    },
    defectFormNew: {
        path: 'defect',
        name: '隐患新建',
        invisible: true,
        component: () => import('@/ensoft/form/ReportMonthForm')
    },
    defectFormDetail: {
        path: ':id',
        name: '隐患详情',
        invisible: true
    },







}

export default routerMapReport
