import type { WorksSettings } from '~/types'
import { WorksType, WorksHrefEnum } from '~/types'
export const worksSetting: WorksSettings[] = [
  {
    title: 'canvas水印图片合成',
    desc: 'canvas js上传图片',
    img: '/img/works/natrue.jpg',
    id: 1,
    type: WorksType.graphics,
    href: WorksHrefEnum.watermark
  },
  {
    title: '渐变边框',
    desc: '提升体验的样式',
    img: '/img/works/渐变边框.png',
    id: 2,
    type: WorksType.interactiveExperience,
    href: WorksHrefEnum.gradientBorder
  },
  {
    title: 'CSS 实现多行文本“展开收起”',
    desc: '多行文本展开收起',
    img: '',
    id: 3,
    type: WorksType.interactiveExperience,
    href: WorksHrefEnum.textFold
  },
  {
    title: 'css3实现转盘抽奖',
    desc: '用css3实现一个转盘抽奖活动',
    img: '/img/works/natrue.jpg',
    id: 4,
    type: WorksType.interactiveExperience,
    href: WorksHrefEnum.rotateGame
  }
]
