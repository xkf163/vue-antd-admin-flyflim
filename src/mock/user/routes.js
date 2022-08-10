import Mock from 'mockjs'

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/routes`, 'get', () => {
  let result = {}
  result.code = 0
  result.data = [{
    router: 'root',
    children: [
      {
        router: 'dashboard',
        children: ['workplace', 'analysis'],
      },
      {
        router: 'report',
        name: '信息报送',
        children: ['month','season']
      },
      {
        router: 'reportMonths',
        name: '信息月报',
        icon: 'cloud-server',
        children: ['monthStatusNew','monthStatusDone']
      },
      {
        router: 'reportSeasons',
        name: '信息季报',
        icon: 'cloud-server',
        children: ['seasonStatusNew','seasonStatusDone']
      },
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
