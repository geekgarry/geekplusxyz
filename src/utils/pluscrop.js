// 裁剪类，支持放大缩小旋转图片并裁剪，支持设置裁剪大小

/**
 * 思路，创建所需元素，默认不添加到dom数，调用的时候就添加到dom树，
 * 确定之后将生成的blob 返回给用户
 */

class CropImg {
    constructor (config = {}) {
      if (new.target !== undefined) {
        this.width = config.width || 300
        this.height = config.height || 300
        this.create()
      } else {
        throw new Error('请通过new 方法调用')
      }
    }
    touchStart (e) {
      e.preventDefault()
      e.stopPropagation()
      // 判断 是否是两指缩放
      if (e.touches.length > 1) {
        this.pinch = true
        this.drag = false
        this.startPoint = {
          x: e.touches[0].screenX,
          y: e.touches[0].screenY,
          x1: e.touches[1].screenX,
          y1: e.touches[1].screenY,
        }
        return
      } else {
        this.drag = true
        this.pinch = false
        this.startPoint = {
          x: e.changedTouches[0].screenX,
          y: e.changedTouches[0].screenY
        }
        this.startDragTime = new Date().getTime()
      }
    }
    touchMove (e) {
      e.preventDefault()
      e.stopPropagation()
      let tnow = Date.now()
      if (this.pinch && tnow - this.startDragTime > 100) {
        // 缩放
        let ts = Math.sqrt(Math.pow(Math.abs(this.startPoint.x - this.startPoint.x1),2), Math.pow(Math.abs(this.startPoint.y - this.startPoint.y1), 2))
        let te = Math.sqrt(Math.pow(Math.abs(e.changedTouches[0].screenX - e.changedTouches[1].screenX), 2), Math.pow(Math.abs(e.changedTouches[0].screenY - e.changedTouches[1].screenY), 2))
        
        this.startPoint = {
          x: e.changedTouches[0].screenX,
          y: e.changedTouches[0].screenY,
          x1: e.changedTouches[1].screenX,
          y1: e.changedTouches[1].screenY,
        }
  
        if (ts - te > 1.5) {
          if (this.transform.scale > 0.2) {
            this.transform.scale -= 0.1
          } else {
            this.transform.scale = 0.2
          }
        } else if (te - ts > 1.5) {
          if (this.transform.scale < 5) {
            this.transform.scale += 0.1
          } else {
            this.transform.scale = 5
          }
        }
        this.drawIt()
        return
      }
      // 移动
      if (this.drag && tnow - this.startDragTime > 100) {
        this.startDragTime = tnow
        let tobj = [
          e.changedTouches[0].screenX - this.startPoint.x,
          e.changedTouches[0].screenY - this.startPoint.y
        ]
        this.transform.tmptranslate = tobj
        this.drawIt()
      }
    }
    mouseDown (e) {
      e.preventDefault()
      e.stopPropagation()
      this.drag = true
      this.startPoint = {
        x: e.screenX,
        y: e.screenY
      }
      this.startDragTime = new Date().getTime()
    }
    mouseMove (e) {
      e.preventDefault()
      e.stopPropagation()
      let tnow = Date.now()
      if (this.drag && tnow - this.startDragTime > 100) {
        this.startDragTime = tnow
        let tobj = [
          e.screenX - this.startPoint.x,
          e.screenY - this.startPoint.y
        ]
        this.transform.tmptranslate = tobj
        this.drawIt()
      }
    }
    mouseUp (e) {
      if (this.drag) {
        this.drag = false
      
        this.transform.translate = [
          this.transform.translate[0] + this.transform.tmptranslate[0],
          this.transform.translate[1] + this.transform.tmptranslate[1],
        ]
        this.transform.tmptranslate = [0,0]
        
        this.drawIt()
      }
    }
    mouseWheel (e) {
      var tmps=0;
          if(typeof e.wheelDelta=='number'){
              tmps=-e.wheelDelta;
              //普通浏览器有e.wheelDelta值，向上滚是正值120，向下滚是负值-120
          }else{
              tmps=e.detail;
              //火狐浏览器有e.detail值，向上滚是负值-3，向下滚是正值3
          }
      if (tmps < 0) {
        if (this.transform.scale < 5) {
          this.transform.scale += 0.1
        } else {
          this.transform.scale = 5
        }
      } else {
        if (this.transform.scale > 0.5) {
          this.transform.scale -= 0.1
        } else {
          this.transform.scale = 0.5
        }
      }
      this.drawIt()
    }
    create() {
      let tw = window.innerWidth
      let th = window.innerHeight
      this.tw = tw
      this.th = th
      // 查看设置的裁剪比例和设备的宽高比例关系
      let bili = this.width / this.height > tw / th 
      
      this.transform = {
        scale: 1,
        translate: [0,0],
        tmptranslate: [0,0],
        rotate: 0
      }
  // 整体裁剪框
      let dik = document.createElement('div')
      this.dik = dik
      dik.setAttribute('style', `
        position:fixed;
        background:rgba(0,0,0,0.6);
        margin:0;
        padding:0;
        left:0;top:0;
        width:100%;height:100%;
        z-index:9998;
      `)
  // 按钮
      let close = document.createElement('div')
      
      close.setAttribute('style', `
        width:34px;
        height:34px;
        position:fixed;
        right:20px;
        top:20px;
        z-index:1001;
        text-align:Center;
        line-height:34px;
        cursor:pointer;
        font-size:30px;
        transform: rotate(45deg);
        color:rgba(255,255,255,0.6);
      `)
      close.innerHTML = '+'
      close.addEventListener('click', this.close.bind(this))
      close.addEventListener('touchend', this.close.bind(this))
      dik.append(close)
      let clickHandle = (e) => {
        e.preventDefault()
        e.stopPropagation()
        switch(e.target.innerText) {
          case '左转': {
            this.transform.rotate -= 5
            this.drawIt()
            break
          }
          case '右转': {
            this.transform.rotate += 5
            this.drawIt()
            break
          }
          case '裁剪': {
            this.clip()
            break
          }
          default: {
            this.transform = {
              scale: 1,
              translate: [0,0],
              tmptranslate: [0,0],
              rotate: 0
            }
            this.imgRect = {...this.tmpRect}
            this.drawIt()
            break
          }
        }
      }
  
      let buts = document.createElement('div')
      buts.setAttribute('style', `
        position: fixed;
        width:350px;
        height: 40px;
        left: 0;
        right: 0;
        display:flex;
        bottom: 80px;
        background:rgba(0,0,0,0.3);
        border-radius: 20px;
        overflow: hidden;
        color:#fff;
        font-weight: bold;
        margin: auto;
        border: 1px solid rgba(255,255,255,1);
        opacity:0.6;
        line-height: 40px;
        text-align:center;
        font-size: 16px;
        z-index: 10001;
      `)
      
        // 子元素
      let but1 = document.createElement('div')
      but1.setAttribute('style', 'width:100%;cursor: pointer;height: 40px;')
      but1.addEventListener('click', clickHandle)
      but1.addEventListener('touchend', clickHandle)
      but1.innerHTML = '左转'
      
      let but2 = document.createElement('div')
      but2.setAttribute('style', 'width:100%;cursor: pointer;height: 40px;')
      but2.addEventListener('click', clickHandle)
      but2.addEventListener('touchend', clickHandle)
      but2.innerHTML = '右转'
  
      let but3 = document.createElement('div')
      but3.setAttribute('style', 'width:100%;cursor: pointer;height: 40px;')
      but3.addEventListener('click', clickHandle)
      but3.addEventListener('touchend', clickHandle)
      but3.innerHTML = '复位'
  
      let but4 = document.createElement('div')
      but4.setAttribute('style', 'width:100%;cursor: pointer;height: 40px;color:#0acc00;')
      but4.addEventListener('click', clickHandle)
      but4.addEventListener('touchend', clickHandle)
      but4.innerHTML = '裁剪'
  
      buts.append(but1)
      buts.append(but2)
      buts.append(but3)
      buts.append(but4)
      dik.append(buts)
  // 根据不同端绑定事件
      if (tw > 900) {
        // pc端
        dik.addEventListener('mousedown', this.mouseDown.bind(this))
        dik.addEventListener('mousemove', this.mouseMove.bind(this))
        dik.addEventListener('mouseup', this.mouseUp.bind(this))
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          // 火狐浏览器
          dik.addEventListener('DOMMouseScroll', this.mouseWheel.bind(this))
        } else {
          dik.addEventListener('mousewheel', this.mouseWheel.bind(this))
        }
      } else {
        // 手机端事件
        dik.addEventListener('touchstart', this.touchStart.bind(this))
        dik.addEventListener('touchmove', this.touchMove.bind(this))
        // 结束函数与鼠标一致
        dik.addEventListener('touchend', this.mouseUp.bind(this))
      }
      
  // 绘制图片的canvas
      // let clipCan = document.createElement('canvas')
      // clipCan.setAttribute('width', tw)
      // clipCan.setAttribute('height', th)
      // this.clipCan = clipCan
      // dik.insertAdjacentElement('afterbegin', clipCan) // 放到所有元素后边
  // 裁剪的半透明框
      let shade = document.createElement('canvas')
      shade.setAttribute('style', `
        position:absolute;
        left:0;top:0;
        width:100%;height:100%;
        cursor: hand;
        z-index:999;
        `)
      shade.setAttribute('width', tw)
      shade.setAttribute('height', th)
      let sctx = shade.getContext('2d')
      // sctx.globalAlpha = '0.7'
      sctx.fillStyle = 'rgba(0,0,0,0.4)'
      sctx.fillRect(0, 0, tw, th)
      // 算出同比下设备上应该显示的宽或高
      let sh = bili ? (th * this.width/this.height - th*0.1): (th *0.9)  // 高
      sh = sh > this.height ? this.height:sh
      let sw = sh * this.width / this.height // 宽
      let sl = (tw - sw) / 2
      let st = (th - sh) / 2
      sctx.clearRect(sl, st, sw, sh)
      // 【绘制裁剪框的角】
      sctx.strokeStyle = 'rgba(255,255,255,0.8)'
      sctx.lineWidth = '2'
      sctx.lineJoin='rect'
  
      sctx.beginPath()
      sctx.moveTo(sl -8, st + 15)
      sctx.lineTo(sl -8, st - 8)
      sctx.lineTo(sl + 15, st - 8)
      sctx.stroke()
  
      sctx.beginPath()
      sctx.moveTo(sl + sw + 8, st + 15)
      sctx.lineTo(sl + sw + 8, st - 8)
      sctx.lineTo(sl + sw - 15, st - 8)
      sctx.stroke()
  
      sctx.beginPath()
      sctx.moveTo(sl + sw + 8, st + sh - 15)
      sctx.lineTo(sl + sw + 8, st + sh + 8)
      sctx.lineTo(sl + sw - 15, st + sh + 8)
      sctx.stroke()
  
      sctx.beginPath()
      sctx.moveTo(sl + 15, st + sh + 8)
      sctx.lineTo(sl - 8, st + sh + 8)
      sctx.lineTo(sl - 8, st + sh - 15)
      sctx.stroke()
  
      sctx.strokeStyle = 'rgba(255,255,255,0.2)'
      sctx.lineWidth = '1'
  
      sctx.beginPath()
      sctx.moveTo(sl - 6, st + 75)
      sctx.lineTo(sl - 6, st - 6)
      sctx.lineTo(sl + 75, st - 6)
      sctx.stroke()
  
      sctx.beginPath()
      sctx.moveTo(sl + sw + 6, st + 75)
      sctx.lineTo(sl + sw + 6, st - 6)
      sctx.lineTo(sl + sw - 75, st - 6)
      sctx.stroke()
  
      sctx.beginPath()
      sctx.moveTo(sl + sw + 6, st + sh - 75)
      sctx.lineTo(sl + sw + 6, st + sh + 6)
      sctx.lineTo(sl + sw - 75, st + sh + 6)
      sctx.stroke()
  
      sctx.beginPath()
      sctx.moveTo(sl + 75, st + sh + 6)
      sctx.lineTo(sl - 6, st + sh + 6)
      sctx.lineTo(sl - 6, st + sh - 75)
      sctx.stroke()
  
      this.rect = {sl, st, sw, sh} // 缓存当前裁剪框位置
  
      dik.insertAdjacentElement('beforeend', shade) // 放到所有元素后边
  
      // document.body.append(this.dik)
    }
    init (file, call) {
      this.call = call
      // 设置裁剪的图片, 需要传入图片文件
      let img = new Image()
      this.img = img
      // 加入到dom树中
      this.dik.append(this.img)
      document.body.append(this.dik)
      img.onload = () => {
        let timgw = this.rect.sw + 400
        let timgh = img.height / img.width * timgw
        this.imgRect = {
          imgl: this.rect.sl - 200,
          imgt: (this.th - timgh) / 2,
          imgw: timgw,
          imgh: timgh,
        }
        this.tmpRect = Object.assign({}, this.imgRect)
        this.drawIt()
      }
      img.src = window.URL.createObjectURL(file)
    }
    drawIt () {
      // console.log(this.transform)
      let arr = this.transform.tmptranslate
      let tranx = this.transform.translate[0]
      let trany = this.transform.translate[1]
      if (arr && arr.length) {
        tranx += arr[0]
        trany += arr[1]
      }
      this.img.setAttribute('style', `
        position: fixed;
        margin:0;
        display:block;
        box-sizing:border-box;
        z-index: 99;
        left: ${this.imgRect.imgl}px;
        top: ${this.imgRect.imgt}px;
        width: ${this.imgRect.imgw}px;
        height: ${this.imgRect.imgh}px;
        transform:rotate(${this.transform.rotate}deg) translate(${tranx}px,${trany}px) scale(${this.transform.scale},${this.transform.scale});
        transform-origin: 50% 50%;
      `)
    }
    clip(call) {
      // 绘制函数，根据状态绘制
      let tcan = document.createElement('canvas')
      tcan.setAttribute('width', this.tw)
      tcan.setAttribute('height', this.th)
      let ctx = tcan.getContext('2d')
      
      let tobj = {...this.imgRect}
          
      if (this.transform.scale) {
        ctx.translate(this.tw/2, this.th/2)
        ctx.scale(this.transform.scale, this.transform.scale)
        ctx.translate(-this.tw/2, -this.th/2)
      }
      if (this.transform.rotate !== 0) {
        ctx.translate(this.tw/2, this.th/2)
        ctx.rotate(this.transform.rotate / 180 * Math.PI)
        ctx.translate(-this.tw/2, -this.th/2)
      }
      ctx.translate(this.transform.translate[0], this.transform.translate[1])
      ctx.drawImage(this.img, tobj.imgl, tobj.imgt, tobj.imgw, tobj.imgh)
      this.dik.removeChild(this.img)
  
      // this.dik.append(tcan)
      // return
  
      let rescan = document.createElement('canvas')
      rescan.setAttribute('width', this.rect.sw)
      rescan.setAttribute('height', this.rect.sh)
      let resctx = rescan.getContext('2d')
      let timgData = ctx.getImageData(...Object.values(this.rect))
      resctx.putImageData(timgData, 0, 0)
      rescan.toBlob(blob => {
        this.call(new File([blob], 'cliped.png'))
        this.close()
      })
    }
    close () {
      // 关闭
      document.body.removeChild(this.dik)
      this.transform = {
        scale: 1,
        translate: [0,0],
        tmptranslate: [0,0],
        rotate: 0
      }
      this.img = null
      // 获取裁剪图片的blob
      this.call = null
    }
  }
  
  export default CropImg