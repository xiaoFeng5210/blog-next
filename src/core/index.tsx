import Watermark from "./watermark/Watermark"
import { worksSetting } from "~/local/works-setting"
import { WorksHrefEnum } from "~/types"

export const workShow = (id: number) => {
  const workOnlyOne = worksSetting.find((item) => item.id === id)
  if (workOnlyOne) {
    switch (workOnlyOne.href) {
      case WorksHrefEnum.watermark:
        return <Watermark />
      default:
        return <div>暂无</div>
    }    
  }
}
