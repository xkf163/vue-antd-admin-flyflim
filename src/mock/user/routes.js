import Mock from 'mockjs'

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/routes`, 'get', () => {
  let result = {}
  result.code = 0
  result.data = [{
    router: 'root',
    children: [
      {
        router: 'dashboard',
        name: '首页',
        icon: 'home',
        children: ['workplace', 'analysis'],
      },
      {
        router: 'reportApplication',
        name:'信息报送',
        icon: 'cloud-upload',
        children: [
          {
            router: 'reportDailyNav',
            name: '信息日报',
            icon: 'cloud-upload',
            children: [
              {
                router: 'dailyViewNew',
                name: '新建',
              },
              {
                router: 'dailyViewDone',
                name: '已报',
              }
            ]
          },
          {
            router: 'reportMonthNav',
            name: '信息月报',
            icon: 'cloud-upload',
            children: [
              {
                router: 'monthViewNew',
                name: '新建',
              },
              {
                router: 'monthViewDone',
                name: '已报',
              }
            ]
          },
          {
            router: 'reportSeasonNav',
            name: '信息季报',
            icon: 'cloud-upload',
            children: [
              {
                router: 'seasonViewNew',
                name: '新建',
              },
              {
                router: 'seasonViewDone',
                name: '已报',
              }
            ]
          },
          {
            router: 'reportYearNav',
            name: '信息年报',
            icon: 'cloud-upload',
            children: [
              {
                router: 'yearViewNew',
                name: '新建',
              },
              {
                router: 'yearViewDone',
                name: '已报',
              }
            ]
          },
          {
            router: 'reportMonthFormNew',
            name: '月报表单新建',
            children: ['reportMonthFormDetail']
          },
          {
            router: 'reportSeasonFormNew',
            name: '季报表单新建',
            children: ['reportSeasonFormDetail']
          },
        ]
      },
      {
        router: 'defectApplication',
        name: '隐患风险管理',
        icon: 'exclamation-circle',
        children: [
          {
            router: 'defectNav',
            name: '隐患管理',
            icon: 'exclamation-circle',
            children: [
              {
                router: 'defectViewNew',
                name: '新建',
              },
              {
                router: 'defectViewDoing',
                name: '在途',
              },
              {
                router: 'defectViewExpired',
                name: '超期',
              },
              {
                router: 'defectViewDone',
                name: '完成',
              },
              {
                router: 'defectViewAll',
                name: '所有',
              }
            ]
          }]
      },
/* -------------------------------------------------------
      {
        router: 'local',
        name: '本地',
        icon: 'cloud-server',
        children: ['localStars','localFilms']
      },
      {
        router: 'form',
        children: ['basicForm', 'stepForm', 'advanceForm']
      },
      {
        router: 'list',
        children: ['queryList','advanceTable']
      },
      {
        router: 'basicForm',
        name: '验权表单',
        icon: 'file-excel',
        authority: 'queryForm'
      },

 */
      {
        router: 'antdv',
        path: 'antdv',
        name: 'Ant Design Vue',
        icon: 'ant-design',
        link: 'https://www.antdv.com/docs/vue/introduce-cn/'
      },
      {
        router: 'document',
        path: 'document',
        name: '使用文档',
        icon: 'file-word',
        link: 'https://iczer.gitee.io/vue-antd-admin-docs/'
      }


    ]
  }]
  return result
})
