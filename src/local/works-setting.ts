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
  }
]
