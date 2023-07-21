import type { WorksSettings } from '~/types'
import { WorksType, WorksHrefEnum } from '~/types'
export const worksSetting: WorksSettings[] = [
  // {
  //   title: '测试标题',
  //   desc: '测试描述，一些技术点摘要',
  //   img: '/img/works/natrue.jpg',
  //   id: 0,
  //   type: WorksType.interactiveExperience,
  // },
  // {
  //   title: '测试标题2',
  //   desc: '测试描述，一些技术点摘要',
  //   img: '/img/works/natrue.jpg',
  //   id: 1,
  //   type: WorksType.product,
  // }
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
    desc: 'https://juejin.cn/post/6963904955262435336',
    img: '',
    id: 3,
    type: WorksType.interactiveExperience,
    href: WorksHrefEnum.textFold
  }
]
