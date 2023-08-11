import Watermark from "./watermark/Watermark"
import GradentBorder from "./gradent-border/GradentBorder"
import { worksSetting } from "~/local/works-setting"
import { WorksHrefEnum } from "~/types"
import TextFold from "./text-fold/TextFold"
import RotateGame from "./rotate-game/RotateGame"

export const workShow = (id: number) => {
  const workOnlyOne = worksSetting.find((item) => item.id === id)
  if (workOnlyOne) {
    switch (workOnlyOne.href) {
      case WorksHrefEnum.watermark:
        return <Watermark />
      case WorksHrefEnum.gradientBorder:
        return <GradentBorder />
      case WorksHrefEnum.textFold:
        return <TextFold />
      case WorksHrefEnum.rotateGame:
        return <RotateGame />  
      default:
        return <div>暂无</div>
    }    
  }
}
