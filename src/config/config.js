// 自定义配置，参考 ./default/setting.config.js，需要自定义的属性在这里配置即可
module.exports = {
  theme: {
    color: '#13c2c2',
    mode: 'dark',
  },
  multiPage: true,
  asyncRoutes: true,       //异步加载路由，true:开启，false:不开启
  //systemName: 'Vue FlyFilm', //系统名称
  animate: {
    name: 'lightSpeed',
    direction: 'left'
  }
}
