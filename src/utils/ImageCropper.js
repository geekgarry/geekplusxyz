// PlusCropper.js
;(function () {
  "use strict"
  var _global;
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
    // 图片缩放程度，旋转角度,位移位置坐标
    this.transform = {
      scale: 1,
      rotation: 0,
      translates: [0,0]
    }
    //创建一个初始位置坐标startPoint
    this.startPoint = {
      diffX: 0,
      diffY: 0
    }
    //开始创建和加载元素
    this.createElements();
    // var orgImg = new Image();
    // orgImg.onload = () => {
    //   this.getImgNaturalDimensions(orgImg,(oImg, dimensions) => {
        // console.log(dimensions);
        // const newWH = this.scaleData(document.body.offsetWidth,document.body.offsetHeight,dimensions.nWidth,dimensions.nHeight);
        // console.log(newWH);
    //   });
    // }
    // orgImg.src = this.options.imageSrc;
    //绑定事件
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
        z-index: 2024;
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
        z-index: 2025;
      `;
    // 创建图片
    this.cropingImage = document.createElement('img');
    this.cropingImage.id="croppingImage";
    this.cropingImage.src = this.options.imageSrc;
    this.cropingImage.alt = '待裁切图片';
    this.cropingImage.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
    // 创建裁切区域, overflow可以不需要使用，注释掉，可以完全显示五个缩放点，更精确拖拉裁切框
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
    this.cropperContainer.appendChild(this.cropingImage);
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

    // if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    //   // 火狐浏览器
    //   dik.addEventListener('DOMMouseScroll', this.mouseWheel.bind(this))
    // } else {
    //   dik.addEventListener('mousewheel', this.mouseWheel.bind(this))
    // }

    // --- 限制裁剪框边界 ---
    const constrainCropArea = () => {
      // 获取图片在容器中的实际尺寸和位置
      const imageRect = this.cropingImage.getBoundingClientRect();
      const containerRect = this.cropperContainer.getBoundingClientRect();
      // 获取图片的边界
      var imageLeft = imageRect.left - containerRect.left;
      var imageTop = imageRect.top - containerRect.top;
      if(imageRect.left < containerRect.left){
        imageLeft = 0;
      }
      if(imageRect.top < containerRect.top){
        imageTop = 0;
      }
      var imageRight = imageLeft + imageRect.width;
      var imageBottom = imageTop + imageRect.height;
      if(imageRect.right > containerRect.right){
        imageRight = containerRect.width;
      }
      if(imageRect.bottom > containerRect.bottom){
        imageBottom = containerRect.height;
      }

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
      e.stopPropagation();
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
          this.cropAreaHeight = Math.max(25, this.initialHeight - diffY); // 最小高度限制为25px
          this.cropAreaY = this.initialY + (this.initialHeight - this.cropAreaHeight);
          break;
        case 's':
          this.cropAreaHeight = Math.max(25, this.initialHeight + diffY); // 最小高度限制为25px
          break;
        case 'w':
          this.cropAreaWidth = Math.max(25, this.initialWidth - diffX); // 最小宽度限制为25px
          this.cropAreaX = this.initialX + (this.initialWidth - this.cropAreaWidth);
          break;
        case 'e':
          this.cropAreaWidth = Math.max(25, this.initialWidth + diffX); // 最小宽度限制为25px
          break;
        case 'se':
          this.cropAreaWidth = Math.max(25, this.initialWidth + diffX); // 最小宽度限制为25px
          this.cropAreaHeight = Math.max(25, this.initialHeight + diffY); // 最小高度限制为25px
          break;
      }
      constrainCropArea.call(this); // 限制裁剪框边界
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

    //分别添加鼠标移动和结束事件，如果含有多个执行事件，不能使用bind(),使用call()/apply()
    document.addEventListener(touchMoveEvent, function(e) {
      e.preventDefault();
      handleResize.call(this, e);
      if(e.type.includes('touchmove')){
        // const touchCurrentX = e.touches[0].clientX;
        // const touchDiffX = touchCurrentX - touchStartX;
        // if (Math.abs(touchDiffX) > 30) { // 设置滑动距离阈值
        //   this.rotateImage(touchDiffX > 0 ? 90 : -90);
        //   touchStartX = touchCurrentX; // 重置初始触摸位置
        // }
        if(e.touches.length===2){
          handleDragImageMove.call(this, e);
        }
      }else{
        handleDragImageMove.call(this, e);
      }
    });

    document.addEventListener(touchEndEvent, () => {
      handleDragImageEnd.call(this);
      handleResizeEnd.call(this);
    });

    /**
     * 鼠标拖动抬起事件,拖拽图片结束事件
     */
    const handleDragImageEnd = () => {
      this.isImageDragging = false;
    }
    /**
     * 鼠标按下事件.拖拽图片开始事件
     */
    this.cropingImage.addEventListener(touchStartEvent, (e) => {
      e.preventDefault();
      this.isImageDragging = true;
      this.startPoint = {
        diffX: this.getTouchClientX(e),
        diffY: this.getTouchClientY(e)
      };
    });
    //拖拽图片更新位置拖拽图片事件
    const updateDragImagePosition = () => {
      this.cropingImage.style.transform = `rotate(${this.transform.rotation}deg) translate(${this.transform.translates[0]}px, ${this.transform.translates[1]}px) scale(${this.transform.scale})`;
      this.cropingImage.style.cursor = this.isImageDragging ? "move" : "default";
    };
    /**
    * 鼠标移动事件,拖拽图片移动事件
    */
    const handleDragImageMove = (e) => {
      e.stopPropagation();
      var mouseX = Math.max(this.getTouchClientX(e),this.getTouchClientX(e) - this.cropingImage.offsetLeft);
      var mouseY = Math.max(this.getTouchClientY(e),this.getTouchClientY(e) - this.cropingImage.offsetTop);
      if (!this.isImageDragging) return;
      var ptX = mouseX - this.startPoint.diffX;
      var ptY = mouseY - this.startPoint.diffY;
      if (this.isImageDragging) {
        let transTp=[ptX,ptY];
        this.transform.translates = transTp;
        updateDragImagePosition.call(this,e);
      }
    };

    // --- 裁切功能 ---
    this.cropBtn.addEventListener('click', this.cropImage.bind(this));

    // --- 旋转功能 ---
    this.rotateLeftBtn.addEventListener('click', () => {
      this.rotateRightAngle(-90);
    });

    this.rotateRightBtn.addEventListener('click', () => {
      this.rotateRightAngle(90);
    });

    // --- 移动端左右滑动旋转rotate ---
    let rotateTouchSX= 0;

    var touchStartX = 0;
    var touchStartY = 0;
    //缩放，两个手指的距离，来计算放大还是缩小
    var twoFingerDistance = 0;
    this.cropperContainer.addEventListener('touchstart', (e) => {
      e.preventDefault();// 阻止默认滚动行为
      if (e.touches.length === 2) {
        twoFingerDistance = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );
      }
      if(e.target === this.cropperContainer || e.target === this.cropingImage){
        rotateTouchSX = e.touches[0].clientX;
      }
      // else if(e.target === this.cropArea){
      //   touchStartX = e.touches[0].clientX;
      //   touchStartY = e.touches[0].clientY;
      // }
    });
    //剪切区域内的移动端触摸移动事件
    this.cropperContainer.addEventListener('touchmove', (e) => {
      e.preventDefault();// 阻止默认滚动行为
      var scaleIdx=0;
      if(e.touches.length ===1){
        if(e.target === this.cropperContainer || e.target === this.cropingImage){
          const touchCurrentX = e.touches[0].clientX;
          const touchDiffX = touchCurrentX - rotateTouchSX;

          if (Math.abs(touchDiffX) > 8) { // 设置滑动距离阈值
            this.rotateImage(touchDiffX > 0 ? -1 : 1);
            rotateTouchSX = touchCurrentX; // 重置初始触摸位置
          }
        }
      }
      // else if(e.target === this.cropArea){
      //   const touchCurrentX = e.touches[0].clientX;
      //   const touchDiffX = touchCurrentX - touchStartX;
      //   const touchCurrentY = e.touches[0].clientY;
      //   const touchDiffY = touchCurrentY - touchStartY;

      //   if (Math.abs(touchDiffX) > 5) { // 设置滑动距离阈值
      //     this.rotateImage(touchDiffX > 0 ? 1 : -1);
      //     this.cropAreaWidth = Math.max(25, this.cropAreaWidth + touchDiffX); // 最小宽度限制为25px
      //     touchStartX = touchCurrentX; // 重置初始触摸位置
      //   }
      //   if (Math.abs(touchDiffY) > 5) { // 设置滑动距离阈值
      //     this.rotateImage(touchDiffX > 0 ? 1 : -1);
      //     this.cropAreaHeight = Math.max(25, this.cropAreaHeight + touchDiffY); // 最小宽度限制为25px
      //     touchStartY = touchCurrentY; // 重置初始触摸位置
      //   }
      // }
      if(e.touches.length ===2){
        if(e.target !== this.cropArea){
          const currentDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
          );
          if (twoFingerDistance-currentDistance >= 15) {
            // 放大图片
            scaleIdx +=3;      
            this.scaleImage(scaleIdx);
          } else if (currentDistance-twoFingerDistance >= 15) {
            // 缩小图片，可添加边界条件判断防止过小
            scaleIdx -=3;
            this.scaleImage(scaleIdx);
          }
        }
      }
    });

    // --- 电脑端滚轮旋转 ---
    this.cropperContainer.addEventListener('wheel', (e) => {
      e.preventDefault(); // 阻止默认滚动行为
      let distance = e.deltaY > 0 ? 1 : -1;
      // 记录初始尺寸和位置,记录裁剪框初始位置
      this.initialWidth = this.cropAreaWidth;
      this.initialHeight = this.cropAreaHeight;
      if(e.target === this.cropArea){
        if(e.shiftKey) {
          this.cropAreaHeight = Math.max(25, this.initialHeight + distance); // 最小高度限制为25px
        }else if(e.ctrlKey){
          this.cropAreaWidth = Math.max(25, this.initialWidth + distance); // 最小高度限制为25px
        }else {
          this.cropAreaWidth = Math.max(25, this.initialWidth + distance); // 最小宽度限制为25px
          this.cropAreaHeight = Math.max(25, this.initialHeight + distance); // 最小高度限制为25px
        }
        constrainCropArea();//.call(this); // 限制裁剪框边界
        this.updateCropAreaStyle();
      }else {
        if(e.shiftKey){
          var sIdx=0;
          if(typeof e.wheelDelta=='number'){
            sIdx=-e.wheelDelta;
            //普通浏览器有e.wheelDelta值，向上滚是正值120，向下滚是负值-120
          }else{
            sIdx=e.detail;
            //火狐浏览器有e.detail值，向上滚是负值-3，向下滚是正值3
          }
          this.scaleImage(sIdx);
        }else {
          this.rotateImage(distance);
        }
      }
    });

    // --- 点击蒙版或裁切框以外区域关闭裁切框 ---
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {// || e.target === this.cropArea
        this.hide();
      }
    });
  };
  //裁切图片
  ImageCropper.prototype.cropImage = function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // --- 设置 canvas 尺寸 ---
    canvas.width = this.cropAreaWidth;
    canvas.height = this.cropAreaHeight;

    // --- 计算缩放比例和中心点 ---
    var imageWidthRatio = this.cropperContainer.offsetWidth / this.cropingImage.naturalWidth;
    var imageHeightRatio = this.cropperContainer.offsetHeight / this.cropingImage.naturalHeight;
    // const imageDisplayWidth = this.cropingImage.naturalWidth * imageWidthRatio;
    // const imageDisplayHeight = this.cropingImage.naturalHeight * imageHeightRatio;
    // const imageDisplayX = (this.cropperContainer.offsetWidth - imageDisplayWidth) / 2;
    // const imageDisplayY = (this.cropperContainer.offsetHeight - imageDisplayHeight) / 2;
    const imageCenterX = this.cropperContainer.offsetWidth / 2;
    const imageCenterY = this.cropperContainer.offsetHeight / 2;

    // --- 计算旋转后的裁剪区域 ---
    const rotatedCropArea = this.getRotatedRect(
      this.cropAreaX + this.cropAreaWidth / 2 -imageCenterX,
      this.cropAreaY + this.cropAreaHeight / 2 -imageCenterY,
      this.cropAreaWidth,
      this.cropAreaHeight,
      this.transform.rotation
    );
    // imageWidthRatio = this.cropperContainer.offsetWidth / rotatedCropArea.width;
    // imageHeightRatio = this.cropperContainer.offsetHeight / rotatedCropArea.height;

    const sourceX = (rotatedCropArea.x + imageCenterX) / imageWidthRatio;
    const sourceY = (rotatedCropArea.y + imageCenterY) / imageHeightRatio;
    const sourceWidth = rotatedCropArea.width / imageWidthRatio;
    const sourceHeight = rotatedCropArea.height / imageHeightRatio;
    // const sourceX = (this.cropAreaX - imageDisplayX) / imageWidthRatio;
    // const sourceY = (this.cropAreaY - imageDisplayY) / imageHeightRatio;
    // const sourceWidth = this.cropAreaWidth / imageWidthRatio;
    // const sourceHeight = this.cropAreaHeight / imageHeightRatio;

    // --- 在 canvas 上绘制旋转后的图片 ---
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(this.transform.rotation * Math.PI / 180);
    ctx.scale(this.transform.scale, this.transform.scale);
    // 重新设置旋转中心
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    // 重新定位图片到canvas上
    var x = -this.cropingImage.width / 2;
    var y = -this.cropingImage.height / 2;
    // ctx.drawImage(this.cropingImage, x, y);
    ctx.drawImage(this.cropingImage, sourceX-sourceWidth / 2, sourceY-sourceHeight / 2, sourceWidth, sourceHeight, 0, 0, this.cropAreaWidth, this.cropAreaHeight);
    // 恢复Canvas状态
    ctx.restore();
    // --- 获取裁剪后的图片数据 ---
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
  ImageCropper.prototype.scaleOrgImage = function (originalWidth, originalHeight, maxWidth, maxHeight) {
    var ratio = Math.max(maxWidth / originalWidth, maxHeight / originalHeight);
    return {
      width: originalWidth * ratio,
      height: originalHeight * ratio
    };
  };
  //显示裁剪界面
  ImageCropper.prototype.show = function (imgUrl) {
    this.overlay.style.display = 'flex';//显示
    this.options.onShow();
  };
  //隐藏裁剪界面
  ImageCropper.prototype.hide = function () {
    //this.overlay.style.display = 'none';//隐藏，不会直接移除，和下面的同样
    this.overlay.remove();//直接移除元素
    this.options.onHide();
  };
  // --- 计算旋转后的矩形 ---
  ImageCropper.prototype.getRotatedRect = function (x, y, width, height, angle) {
    const rad = angle * Math.PI / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    var newWidth = Math.abs(width * cos) + Math.abs(height * sin);
    var newHeight = Math.abs(width * sin) + Math.abs(height * cos);
    if (Math.abs(angle) % 180 === 90) {
      newWidth = height;
      newHeight = width;
    }
    const newX = x + (width - newWidth) / 2;
    const newY = y + (height - newHeight) / 2;
    return {
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    };
  };
  //重新绘制（在旋转或缩放后要裁切前）图片
  ImageCropper.prototype.rotateRightAngle = function (degrees) {
    var angleDegress = 0;
    angleDegress += degrees;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = this.cropingImage;
    // 计算旋转后的canvas尺寸
    if (Math.abs(angleDegress) % 180 === 90) {
      canvas.width = image.naturalHeight;
      canvas.height = image.naturalWidth;
    } else {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
    }
    ctx.translate(canvas.width / 2, canvas.height / 2); // 将canvas原点移动到中心
    ctx.rotate(angleDegress * Math.PI / 180); // 旋转canvas
    this.cropingImage.style.transform = 'rotate(0deg)';
    ctx.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2); // 绘制图片
    this.cropingImage.src = canvas.toDataURL(); // 更新图片src
  };
  //旋转图片
  ImageCropper.prototype.rotateImage = function (degrees) {
    this.transform.rotation += degrees;
    // 使用CSS transform属性旋转图片
    this.cropingImage.style.transform = `rotate(${this.transform.rotation}deg) translate(${this.transform.translates[0]}px, ${this.transform.translates[1]}px) scale(${this.transform.scale},${this.transform.scale})`;
  };
  //缩放图片
  ImageCropper.prototype.scaleImage = function (scaleIndex) {
    if (scaleIndex < 0) {
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
    /*使用zoom属性-----相对起点缩放*/
    // const OE = e || window.event;
    // const el=this.cropingImage;
    // //获取图片的宽高
    // const offsetWidth = el.offsetWidth;
    // const offsetHeight = el.offsetHeight;
    // //获取图片距离body左侧和上面的距离
    // const left = parseFloat(el.offsetLeft);
    // const top = parseFloat(el.offsetTop);
    // //获取定点的位置（鼠标在图片上的位置）
    // const disX = OE.clientX - el.offsetLeft;
    // const disY = OE.clientY - el.offsetTop;
    // //wheelDelta的值为正（120.240...）则是鼠标向上；为负（-120，-240）则是向下
    // if (e.wheelDelta > 0) {
    //   el.style.width = offsetWidth + offsetWidth * 0.2 + 'px'; //图片缩放，这个0.2是自定义的缩放比例可根据实际情况调整
    //   el.style.height = offsetHeight + offsetHeight * 0.2 + 'px';
    //   el.style.left = left - disX * 0.2 + 'px'; //由于图片是定点缩放的，所以图片的位置应该更改
    //   el.style.top = top - disY * 0.2 + 'px';
    // } else {
    //   el.style.width = offsetWidth - offsetWidth * 0.2 + 'px';
    //   el.style.height = offsetHeight - offsetHeight * 0.2 + 'px';
    //   el.style.left = left + disX * 0.2 + 'px';
    //   el.style.top = top + disY * 0.2 + 'px';
    // }
    // 计算变换原点
    // var origin = this.startPoint.diffX + 'px ' + this.startPoint.diffY + 'px';
    // this.cropingImage.style.transformOrigin = origin; // 设置变换原点
    /**
    * 当目标元素 是img时，需要禁用元素鼠标可拖拽
    * div user-drag 默认是none 可以不设置
    */
    this.cropingImage.style.userDrag='none'
    this.cropingImage.style.webkitUserDrag='none';

	  //禁用选则，防止拖拽时出现先择元素内部元素的情况
    this.cropingImage.style.userSelect='none'
    // 使用CSS transform属性来控制缩放图片
    this.cropingImage.style.transition = `transition: transform 0.5s;`;/* 添加变换动画 */
    this.cropingImage.style.transform = `rotate(${this.transform.rotation}deg) translate(${this.transform.translates[0]}px, ${this.transform.translates[1]}px) scale(${this.transform.scale},${this.transform.scale})`;
  };
  //检查鼠标是否在右下角的10X10的方块区域
  ImageCropper.prototype.isResizingFromCorner = function (e) {
    const rect = this.cropArea.getBoundingClientRect();
    const cornerSize = 20; // 可调整的角落区域大小

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
  //window.ImageCropper = ImageCropper;
  _global = (function(){ return this || (0, eval)('this'); }());
  if (typeof module !== "undefined" && module.exports) {
      module.exports = ImageCropper;
  } else if (typeof define === "function" && define.amd) {
      define(function(){return ImageCropper;});
  } else {
      !('ImageCropper' in _global) && (_global.ImageCropper = ImageCropper);
  }
})();