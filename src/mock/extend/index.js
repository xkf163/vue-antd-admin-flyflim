import Mock from 'mockjs'
import {logos, sayings, positions, avatars, admins} from '../common'

const Random = Mock.Random

const timeList = [
  {
    CN: '早上好',
    HK: '早晨啊',
    US: 'Good morning',
  },{
    CN: '上午好',
    HK: '上午好',
    US: 'Good morning',
  },{
    CN: '中午好',
    HK: '中午好',
    US: 'Good afternoon',
  },{
    CN: '下午好',
    HK: '下午好',
    US: 'Good afternoon',
  },{
    CN: '晚上好',
    HK: '晚上好',
    US: 'Good evening',
  }
]

const welcomeMessages = [
  {
    CN: '休息一会儿吧',
    HK: '休息一會兒吧',
    US: 'you may need a break',
  },
  {
    CN: '准备吃什么呢',
    HK: '準備吃什麼呢',
    US: 'what are you going to eat',
  },
  {
    CN: '要不要打一把 DOTA',
    HK: '要不要打一把 DOTA',
    US: 'how about a game of DOTA',
  },
  {
    CN: '我猜你可能累了',
    HK: '我猜你可能累了',
    US: 'i guess you might be tired',
  }
]

const goods = ['运动鞋', '短裤', 'T恤', '七分裤', '风衣', '寸衫']
const films = ['少林搭棚大师.Return.to.the.36th.Chamber.1980.Blu-ray.Remux.1080p.AVC.FLAC.2.0.2Audio-PTer',
  '疯狂原始人.The.Croods.2013.BluRay.1080p.MultiAudio.DTS-HD.MA5.1.x264-beAst', '五亿探长雷洛传1：雷老虎.Lee.Rock.Ⅰ.1991.1080P.WEB-DL.H265.AAC-LeagueWEB',
  '吉祥如意.The.Reunions.2020.WEB-DL.1080p.H264.DD5.1-HDSWEB', '逃学外传.To.Miss.With.Love.1992.HDTV.SUBBED.MiniSD-TLF',
  '新喜剧之王.The.New.King.of.Comedy.2019.BluRay.1080p.x264.AC3.2Audios-CMCT','明日边缘.Edge of Tomorrow 2014 2160p UHD Blu-ray HEVC Atmos TrueHD 7.1-FiNalHD@HDSky',
'Doctor Strange in the Multiverse of Madness 2022 V3 UHD BluRay 2160p HEVC Atmos TrueHD7.1-AQLJ@HDSky','The Witch Part 2 The Other One 2022 V2 WEB-DL 1080p H264 AAC5.1-AQLJ']

Random.extend({
  admin () {
    return this.pick(admins)
  },
  welcome () {
    return this.pick(welcomeMessages)
  },
  timeFix () {
    const time = new Date()
    const hour = time.getHours()
    return hour < 9
      ? timeList[0] : (hour <= 11 ? timeList[1] : (hour <= 13 ? timeList[2] : (hour <= 20 ? timeList[3] : timeList[4])))
  },
  avatar () {
    return this.pick(avatars)
  },
  position () {
    return this.pick(positions)
  },
  goods () {
    return this.pick(goods)
  },
  films () {
    return this.pick(films)
  },
  saying () {
    return this.pick(sayings)
  },
  logo () {
    return this.pick(logos)
  }
})
