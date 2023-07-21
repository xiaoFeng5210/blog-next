export enum WorksType {
  product = '产品',
  interactiveExperience = '交互体验',
  graphics = '2d图形',
  three = '3d图形',
  components = '组件',
} 
export interface WorksSettings {
  title: string
  desc: string
  img: string
  id: string | number
  type: WorksType
  href?: WorksHrefEnum
}

export enum WorksHrefEnum {
  watermark = 'watermark',
  // 渐变边框
  gradientBorder = 'gradientBorder',

  textFold = 'textFold'
}

export type WorksHref = 'watermark'
