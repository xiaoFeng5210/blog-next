"use client"
import { FC, useEffect } from 'react'
const Watermark: FC = () => {
  let eleUploadFile: HTMLInputElement
  let eleImgCover: HTMLImageElement
  let eleImgUploadX: HTMLElement
  useEffect(() => {
    eleUploadFile = document.getElementById('uploadFile') as HTMLInputElement
    eleImgCover = document.getElementById('imgCover') as HTMLImageElement
    eleImgUploadX = document.getElementById('imgUploadX') as HTMLElement
    eleUploadFile.addEventListener('change', function (e) {
      const reader = new FileReader()
      const file = (e.target as HTMLInputElement)?.files?.[0]
      reader.onload = function (e) {
        const base64 = e.target?.result as string
        if (base64) {
          imgTogether(base64, (str) => {
            const size = 500 / (window.devicePixelRatio || 1)
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
    const size = 500;
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
    <div className='w-full h-full flex flex-col items-center'>
      <p className='text-2xl'>前端图片水印</p>
      <div className="divider"></div>
      <input type="file" id="uploadFile" className='clip' accept="image/*" />
      <img id="imgCover" src="/img/works/watermark.png" className="clip"></img>
      <p id="imgUploadX"></p>
    </div>
  )
}
export default Watermark
