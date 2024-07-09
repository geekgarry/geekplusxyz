// PlusCropper.js
(function () {
  function ImageCropper(options = {}) {
    this.options = Object.assign({
      container: document.body,  // 容器元素
      imageSrc: '',             // 图片地址
      cropAreaWidth: 150,       // 裁切区域初始宽度
      cropAreaHeight: 100,      // 裁切区域初始高度
      onCrop: (croppedImageDataURL) => { }, // 裁切完成回调函数
      onShow: () => { }, //显示事件回调函数，显示的监听回调
      onHide: () => { } //隐藏事件回调函数，隐藏的监听回调
    }, options);
    this.init();
    this.show();
  }
  ImageCropper.prototype.init = function () {
    this.isDragging = false; // 是否正在拖动裁剪框
    this.isResizing = false; // 是否正在调整裁剪框大小
    this.resizeDirection = '';
    this.cropAreaX = 50;
    this.cropAreaY = 50;

    this.createElements();
    this.bindEvents();
  };
  ImageCropper.prototype.createElements = function () {
    const container = typeof this.options.container === 'string' ?
      document.querySelector(this.options.container) : this.options.container;
    // 创建蒙版
    this.overlay = document.createElement('div');
    this.overlay.id = 'imageCropperOverlay';
    this.overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      `;
    // 创建裁切容器
    this.cropperContainer = document.createElement('div');
    this.cropperContainer.id = 'imageCropperContainer';
    this.cropperContainer.style.cssText = `
        position: relative;
        width: auto;
        height: auto;
        overflow: hidden;
        background-color: #fff;
        z-index: 1001;
      `;
    // 创建图片
    this.image = document.createElement('img');
    this.image.src = this.options.imageSrc;
    this.image.alt = '待裁切图片';
    this.image.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
    // 创建裁切区域
    this.cropArea = document.createElement('div');
    this.cropArea.id = 'imageCropperArea';
    this.cropArea.style.cssText = `
        position: absolute;
        border: 2px dashed #000;
        cursor: move;
        resize: both;
        /* overflow: hidden; */
        left: ${this.cropAreaX}px;
        top: ${this.cropAreaY}px;
        width: ${this.options.cropAreaWidth}px;
        height: ${this.options.cropAreaHeight}px;
      `;
    // 创建裁切按钮
    // this.cropBtn = document.createElement('button');
    // this.cropBtn.innerText = '裁切';
    // this.cropBtn.style.cssText = `
    //   display: block;
    //   margin: 20px auto;
    //   padding: 10px 20px;
    //   background-color: #4CAF50;
    //   color: white;
    //   border: none;
    //   cursor: pointer;
    // `;
    // 创建四个拖动点
    this.resizeHandles = ['n', 's', 'w', 'e', 'se'].map(direction => {
      const handle = document.createElement('div');
      handle.classList.add('resize-handle', `resize-handle-${direction}`);
      handle.style.cssText = `
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid #fff;
        `;
      this.cropArea.appendChild(handle);
      return handle;
    });
    this.resizeHandles[0].style.top = '-5px';
    this.resizeHandles[0].style.left = '50%';
    this.resizeHandles[0].style.marginLeft = '-5px';
    this.resizeHandles[0].style.cursor = 'ns-resize';
    this.resizeHandles[1].style.bottom = '-5px';
    this.resizeHandles[1].style.left = '50%';
    this.resizeHandles[1].style.marginLeft = '-5px';
    this.resizeHandles[1].style.cursor = 'ns-resize';
    this.resizeHandles[2].style.left = '-5px';
    this.resizeHandles[2].style.top = '50%';
    this.resizeHandles[2].style.marginTop = '-5px';
    this.resizeHandles[2].style.cursor = 'ew-resize';
    this.resizeHandles[3].style.right = '-5px';
    this.resizeHandles[3].style.top = '50%';
    this.resizeHandles[3].style.marginTop = '-5px';
    this.resizeHandles[3].style.cursor = 'ew-resize';
    this.resizeHandles[4].style.right = '-5px';
    this.resizeHandles[4].style.bottom = '-5px';
    this.resizeHandles[4].style.cursor = 'se-resize';
    // 添加元素到页面
    this.cropperContainer.appendChild(this.image);
    this.cropperContainer.appendChild(this.cropArea);
    // this.cropperContainer.appendChild(this.cropBtn);
    this.overlay.appendChild(this.cropperContainer);
    container.appendChild(this.overlay);
    // 初始化变量
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.cropAreaX = 50;
    this.cropAreaY = 50;
    this.cropAreaWidth = this.options.cropAreaWidth;
    this.cropAreaHeight = this.options.cropAreaHeight;
    // 创建按钮容器
    this.buttonContainer = document.createElement('div');
    this.buttonContainer.id = 'imageCropperBtnContainer';
    this.buttonContainer.style.cssText = `
        display: flex;
        justify-content: space-around;
        align-self: stretch;
        margin-top: 20px;
      `;
    // 创建裁切按钮
    this.cropBtn = document.createElement('button');
    this.cropBtn.id = 'imageCropperCropBtn';
    this.cropBtn.innerText = '裁切';
    this.cropBtn.style.cssText = `
        padding: 8px 16px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
      `;
    // 创建左旋转按钮
    this.rotateLeftBtn = document.createElement('button');
    this.rotateLeftBtn.id = 'imageCropperRotateLeftBtn';
    this.rotateLeftBtn.innerText = '左旋转';
    this.rotateLeftBtn.style.cssText = `
        padding: 8px 16px;
        background-color: #2196F3;
        color: white;
        border: none;
        cursor: pointer;
      `;
    // 创建右旋转按钮
    this.rotateRightBtn = document.createElement('button');
    this.rotateRightBtn.id = 'imageCropperRotateRightBtn';
    this.rotateRightBtn.innerText = '右旋转';
    this.rotateRightBtn.style.cssText = `
        padding: 8px 16px;
        background-color: #f44336;
        color: white;
        border: none;
        cursor: pointer;
      `;
    // 添加按钮到容器
    this.buttonContainer.appendChild(this.rotateLeftBtn);
    this.buttonContainer.appendChild(this.cropBtn);
    this.buttonContainer.appendChild(this.rotateRightBtn);
    // ... (添加元素到页面代码与之前相同) ...
    //this.cropperContainer.appendChild(this.buttonContainer);
    this.overlay.appendChild(this.buttonContainer);
  };
  // ImageCropper.prototype.resizeHandler = function (direction, initialX, initialY, initialWidth, initialHeight, e) {};
  ImageCropper.prototype.bindEvents = function () {
    // 添加移动端支持
    const touchStartEvent = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
    const touchMoveEvent = 'ontouchmove' in window ? 'touchmove' : 'mousemove';
    const touchEndEvent = 'ontouchend' in window ? 'touchend' : 'mouseup';

    // --- 限制裁剪框边界 ---
    const constrainCropArea = () => {
      // 获取图片在容器中的实际尺寸和位置
      const imageRect = this.image.getBoundingClientRect();
      const containerRect = this.cropperContainer.getBoundingClientRect();
      // 获取图片的边界
      const imageLeft = imageRect.left - containerRect.left;
      const imageTop = imageRect.top - containerRect.top;
      const imageRight = imageLeft + imageRect.width;
      const imageBottom = imageTop + imageRect.height;

      // 限制裁剪框位置
      this.cropAreaX = Math.max(imageLeft, Math.min(this.cropAreaX, imageRight - this.cropAreaWidth));
      this.cropAreaY = Math.max(imageTop, Math.min(this.cropAreaY, imageBottom - this.cropAreaHeight));

      // 限制裁剪框大小
      this.cropAreaWidth = Math.min(this.cropAreaWidth, imageRight - this.cropAreaX);
      this.cropAreaHeight = Math.min(this.cropAreaHeight, imageBottom - this.cropAreaY);
    };

    // 拖动裁切框
    this.cropArea.addEventListener(touchStartEvent, (e) => {
      e.preventDefault(); // 阻止默认触摸事件
      // e.stopPropagation();
      if (e.target !== this.cropArea || this.isResizing) return;
      this.isDragging = true;

      // this.startX = this.getTouchClientX(e);
      // this.startY = this.getTouchClientY(e);
      this.startX = this.getTouchClientX(e) - this.cropAreaX;
      // 使用相对于裁剪框的坐标
      this.startY = this.getTouchClientY(e) - this.cropAreaY;
    });

    // 绑定拖动裁剪框事件
    document.addEventListener(touchMoveEvent, (e) => {
      if (!this.isDragging) return;
      // const diffX = this.getTouchClientX(e) - this.startX;
      // const diffY = this.getTouchClientY(e) - this.startY;
      // this.cropAreaX = Math.max(0, Math.min(this.cropperContainer.offsetWidth - this.cropAreaWidth, this.cropAreaX + diffX));
      // this.cropAreaY = Math.max(0, Math.min(this.cropperContainer.offsetHeight - this.cropAreaHeight, this.cropAreaY + diffY));
      // this.cropArea.style.left = this.cropAreaX + 'px';
      // this.cropArea.style.top = this.cropAreaY + 'px';
      // this.startX = this.getTouchClientX(e);
      // this.startY = this.getTouchClientY(e);
      this.cropAreaX = Math.max(0, Math.min(this.getTouchClientX(e) - this.startX, this.cropperContainer.offsetWidth - this.cropAreaWidth));
      this.cropAreaY = Math.max(0, Math.min(this.getTouchClientY(e) - this.startY, this.cropperContainer.offsetHeight - this.cropAreaHeight));
      // this.cropAreaX = this.getTouchClientX(e) - this.startX; 
      // this.cropAreaY = this.getTouchClientY(e) - this.startY;
      constrainCropArea();//.call(this); // 限制裁剪框边界
      this.updateCropAreaStyle();
    });

    document.addEventListener(touchEndEvent, () => {
      this.isDragging = false;
    });

    // --- 四边和右下角拖动缩放 ---
    const handleResizeStart = (direction, e) => {
      e.stopPropagation();//阻止事件冒泡，防止影响别的事件
      this.isResizing = true;
      this.resizeDirection = direction;
      this.startX = this.getTouchClientX(e);
      this.startY = this.getTouchClientY(e);

      // 用于修正拖动时鼠标/手指位置和裁剪框位置的偏差
      // 记录初始尺寸和位置,记录裁剪框初始位置
      this.initialWidth = this.cropAreaWidth;
      this.initialHeight = this.cropAreaHeight;
      this.initialX = this.cropAreaX;
      this.initialY = this.cropAreaY;
    };

    const handleResize = (e) => {
      if (!this.isResizing) return;
      const diffX = this.getTouchClientX(e) - this.startX;
      const diffY = this.getTouchClientY(e) - this.startY;
      switch (this.resizeDirection) {
        case 'n':
          this.cropAreaHeight = Math.max(30, this.initialHeight - diffY); // 最小高度限制为10px
          this.cropAreaY = this.initialY + (this.initialHeight - this.cropAreaHeight);
          break;
        case 's':
          this.cropAreaHeight = Math.max(30, this.initialHeight + diffY); // 最小高度限制为10px
          break;
        case 'w':
          this.cropAreaWidth = Math.max(30, this.initialWidth - diffX); // 最小宽度限制为10px
          this.cropAreaX = this.initialX + (this.initialWidth - this.cropAreaWidth);
          break;
        case 'e':
          this.cropAreaWidth = Math.max(30, this.initialWidth + diffX); // 最小宽度限制为10px
          break;
        case 'se':
          this.cropAreaWidth = Math.max(30, this.initialWidth + diffX); // 最小宽度限制为10px
          this.cropAreaHeight = Math.max(30, this.initialHeight + diffY); // 最小高度限制为10px
          break;
      }
      constrainCropArea();//.call(this); // 限制裁剪框边界
      this.updateCropAreaStyle();
    };

    const handleResizeEnd = () => {
      this.isResizing = false;
    };

    this.resizeHandles.forEach(handle => {
      handle.addEventListener(touchStartEvent, (e) => {
        e.preventDefault(); // 阻止默认行为，例如在触摸屏上滚动
        handleResizeStart.call(this, handle.classList[1].split('-')[2], e);
      });
      // handle.addEventListener(touchStartEvent, handleResizeStart.bind(this, handle.classList[1].split('-')[2]));
    });

    //**********----右下角拖动缩放----***********
    this.cropArea.addEventListener(touchStartEvent, (e) => {
      e.preventDefault(); // 阻止默认行为，例如在触摸屏上滚动
      if (this.isResizingFromCorner(e)) {
        handleResizeStart.call(this, 'se', e);
      }
    });

    document.addEventListener(touchMoveEvent, handleResize.bind(this));
    document.addEventListener(touchEndEvent, handleResizeEnd.bind(this));

    // --- 裁切功能 ---
    this.cropBtn.addEventListener('click', this.cropImage.bind(this));
    // --- 旋转功能 ---
    this.rotateLeftBtn.addEventListener('click', () => {
      this.rotateImage(-90);
    });
    this.rotateRightBtn.addEventListener('click', () => {
      this.rotateImage(90);
    });
    // --- 点击蒙版或裁切框以外区域关闭裁切框 ---
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {// || e.target === this.cropArea
        this.hide();
      }
    });
  };
  ImageCropper.prototype.cropImage = function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = this.cropAreaWidth;
    canvas.height = this.cropAreaHeight;
    const imageWidthRatio = this.cropperContainer.offsetWidth / this.image.naturalWidth;
    const imageHeightRatio = this.cropperContainer.offsetHeight / this.image.naturalHeight;
    const imageDisplayWidth = this.image.naturalWidth * imageWidthRatio;
    const imageDisplayHeight = this.image.naturalHeight * imageHeightRatio;
    const imageDisplayX = (this.cropperContainer.offsetWidth - imageDisplayWidth) / 2;
    const imageDisplayY = (this.cropperContainer.offsetHeight - imageDisplayHeight) / 2;
    const sourceX = (this.cropAreaX - imageDisplayX) / imageWidthRatio;
    const sourceY = (this.cropAreaY - imageDisplayY) / imageHeightRatio;
    const sourceWidth = this.cropAreaWidth / imageWidthRatio;
    const sourceHeight = this.cropAreaHeight / imageHeightRatio;
    ctx.drawImage(this.image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, this.cropAreaWidth, this.cropAreaHeight);
    const croppedImageDataURL = canvas.toDataURL();
    this.options.onCrop(croppedImageDataURL);
    this.hide();
  };
  //获取图片的原始高度和宽度
  ImageCropper.prototype.getImgNaturalDimensions = function (oImg, callback) {
    var nWidth, nHeight;
    if (!oImg.naturalWidth) {
      nWidth = oImg.naturalWidth;
      nHeight = oImg.naturalHeight;
      callback(oImg, { w: nWidth, h: nHeight });
    } else {
      var nImg = new Image();
      nImg.onload = function () {
        var nWidth = nImg.width,
          nHeight = nImg.height;
        callback(oImg, { w: nWidth, h: nHeight });
      }
      nImg.src = oImg.src;
    }
  };
  //计算缩放后的宽度和高度，分为以下几种情况:
  //图片的高和宽都超限了，这时要算一下哪个超的多，按超多的缩放比例等比计算宽和高。
  //高超限，宽未超限，按高的缩放等比计算。
  //宽超限，高未超退，按宽的缩放等比计算。
  //高宽均未超限，返回原始宽和高。
  ImageCropper.prototype.scaleData = function (maxW, maxH, orgW, orgH) {
    if (orgW < maxW && orgH < maxH) {
      return { w: orgW, h: orgH }
    } else if (orgW > maxW && orgH > maxH) {
      var sw = orgW / maxW, sh = orgH / maxH;
      if (sw > sh) {
        return { w: maxW, h: maxH / sw };
      } else {
        return { w: maxW / sh, h: maxH };
      }
    } else if (orgW > maxW) {
      var sw = orgW / maxW;
      return { w: maxW, h: orgH / sw };
    } else {
      var sh = orgH / maxH;
      return { w: orgW / sh, h: maxH };
    }
  };
  ImageCropper.prototype.scaleImage = function (originalWidth, originalHeight, maxWidth, maxHeight) {
    var ratio = Math.max(maxWidth / originalWidth, maxHeight / originalHeight);
    return {
      width: originalWidth * ratio,
      height: originalHeight * ratio
    };
  };
  //显示裁剪界面
  ImageCropper.prototype.show = function () {
    this.overlay.style.display = 'flex';//显示
    this.options.onShow();
  };
  //隐藏裁剪界面
  ImageCropper.prototype.hide = function () {
    //this.overlay.style.display = 'none';//隐藏，不会直接移除，和下面的同样
    this.overlay.remove();//直接移除元素
    this.options.onHide();
  };
  //旋转图片
  ImageCropper.prototype.rotateImage = function (degrees) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = this.image;
    // 计算旋转后的canvas尺寸
    if (Math.abs(degrees) % 180 === 90) {
      canvas.width = image.naturalHeight;
      canvas.height = image.naturalWidth;
    } else {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
    }
    ctx.translate(canvas.width / 2, canvas.height / 2); // 将canvas原点移动到中心
    ctx.rotate(degrees * Math.PI / 180); // 旋转canvas
    ctx.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2); // 绘制图片
    this.image.src = canvas.toDataURL(); // 更新图片src
  };
  //检查鼠标是否在右下角的10X10的方块区域
  ImageCropper.prototype.isResizingFromCorner = function (e) {
    const rect = this.cropArea.getBoundingClientRect();
    const cornerSize = 10; // 可调整的角落区域大小

    // 检查鼠标是否在右下角区域
    return (e.clientX >= rect.right - cornerSize && e.clientY >= rect.bottom - cornerSize);
  };
  ImageCropper.prototype.getTouchClientX = function (e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
  };
  ImageCropper.prototype.getTouchClientY = function (e) {
    return e.touches ? e.touches[0].clientY : e.clientY;
  };
  ImageCropper.prototype.updateCropAreaStyle = function () {
    this.cropArea.style.left = this.cropAreaX + 'px';
    this.cropArea.style.top = this.cropAreaY + 'px';
    this.cropArea.style.width = this.cropAreaWidth + 'px';
    this.cropArea.style.height = this.cropAreaHeight + 'px';
  };
  window.ImageCropper = ImageCropper;
})();
export default ImageCropper;