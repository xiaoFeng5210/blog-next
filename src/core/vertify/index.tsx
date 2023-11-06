'use client'
import { useEffect } from "react"

const VertifyAli = () => {
  let captcha

  useEffect(() => {
    (window as any).initAliyunCaptcha({
      SceneId: '94urq7id', // 场景ID。根据步骤二新建验证场景后，您可以在验证码场景列表，获取该场景的场景ID
      prefix: '1omzcs', // 身份标。开通阿里云验证码2.0后，您可以在控制台概览页面的实例基本信息卡片区域，获取身份标
      mode: 'popup', // 验证码模式。popup表示要集成的验证码模式为弹出式。无需修改
      element: '#captcha-element', //页面上预留的渲染验证码的元素，与原代码中预留的页面元素保持一致。
      button: '#button-vertify', // 触发验证码弹窗的元素。button表示单击登录按钮后，触发captchaVerifyCallback函数。您可以根据实际使用的元素修改element的值
      captchaVerifyCallback: captchaVerifyCallback, // 业务请求(带验证码校验)回调函数，无需修改
      onBizResultCallback: onBizResultCallback, // 业务请求结果回调函数，无需修改
      getInstance: getInstance, // 绑定验证码实例函数，无需修改
      slideStyle: {
        width: 360,
        height: 40,
      }, // 滑块验证码样式，支持自定义宽度和高度，单位为px。其中，width最小值为320 px
      language: 'cn', // 验证码语言类型，支持简体中文（cn）、繁体中文（tw）、英文（en）
      immediate: false
    });
  }, [])
  function getInstance(instance: any) {
    captcha = instance;
  }
  function promisetest() {
    // 随即返回一个true或false
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.random() > 0.5);
      }, 1000);
    });
  }
  async function captchaVerifyCallback(captchaVerifyParam: any) {
    console.log(captchaVerifyParam)
    const rand = await promisetest();
    // 2.构造标准返回参数
    const verifyResults = {
      captchaResult: rand,
      bizResult: rand,
    };
    return verifyResults;
  }
  function onBizResultCallback(bizResult: any) {
    if (bizResult === true) {
      // 如果业务验证通过，跳转到对应页面。此处以跳转到https://www.aliyun.com/页面为例
      // window.location.href = 'https://www.aliyun.com/';
      alert('业务验证通过！')
    } else {
      // 如果业务验证不通过，给出不通过提示。此处不通过提示为业务验证不通过！
      alert('业务验证不通过！');
    }
  }

  return (
    <div>
      <div id="space-semantic">
        <div id="embed-wrapper">
          <h2>弹出式</h2>
          <div>
            <div>
              <label>用户名：</label>
              <input id="username-embed" />
            </div>
            <div>
              <label>密码：</label>
              <input id="password-embed" type="password" />
            </div>
            <div id="captcha-element" className="w-[500px] h-[200px]"></div>
            <button id="button-vertify">登录</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VertifyAli
