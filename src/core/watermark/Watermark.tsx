import { FC, useEffect } from 'react'
const Watermark: FC = () => {
  let eleUploadFile: HTMLInputElement
  let eleImgCover: HTMLImageElement
  let eleImgUploadX: HTMLElement
  useEffect(() => {
    eleUploadFile.addEventListener('change', function (e) {
      const reader = new FileReader()
      const file = (e.target as HTMLInputElement)?.files?.[0]
      reader.onload = function (e) {
        const base64 = e.target?.result as string
        if (base64) {
          imgTogether(base64, (str) => {
            const size = 180 / (window.devicePixelRatio || 1)
            eleImgUploadX.innerHTML = `<img src="${str}" width="${size}" height="${size}" />`
          })
        } else {
          eleImgUploadX.innerText = '上传失败'
        }
      }
      if (file) {
        reader.readAsDataURL(file)
      }
    })
  }, [])
  const imgTogether = (url: string, callback: (str: string) => void) => {
    const canvas = document.createElement('canvas')
    const size = 180;
    canvas.width = size
    canvas.height = size
    const context = canvas.getContext('2d')
    const imgUpload =  new Image()
    imgUpload.onload = function () {
      context?.drawImage(imgUpload, 0, 0, size, size, 0, 0, size, size)
      // 绘制水印
      context?.drawImage(eleImgCover, 0, 0, size, size, 0, 0, size, size)
      callback(canvas.toDataURL('image/png'))
    }
    imgUpload.src = url
  }
  return (
    <div className='w-full h-full'>
      <input type="file" id="uploadFile" className='clip' accept="image/*" />
      <label className='ui-button ui-button-primary' htmlFor="uploadFile">选择图片</label>
      <img id="imgCover" src="./watermark.png" className="clip"></img>
      <p id="imgUploadX"></p>
    </div>
  )
}
export default Watermark
