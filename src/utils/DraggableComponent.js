var _global;
class DraggableComponent {
    constructor(options = {}) {
        // 合并默认配置和用户配置
        this.options = Object.assign(
            {
                initialPosition: "left", // 初始位置：center, top-left, top-right, bottom-left, bottom-right, left, right
                edgeFolding: true, // 是否允许边缘折叠，这里的折叠实际上是把容器隐藏，只显示出一个悬浮的按钮或其他的元素
                collapseDelay: 5000, //边缘折叠延迟时间，意思在一定时间后才折叠
                content: "", // 内容，可以是字符串或 HTML 元素
                buoyContainerWidth: 30, // 悬浮标记指示容器长度
                buoyContainerHeight: 30, // 悬浮标记指示容器高度
                buoyContent: null, // 悬浮标记指示内容，可以是 HTML 字符串、DOM 元素或图片 URL
                buoyShape: "square", //表示浮标的边框是圆还是方，round or square
                resizable: false, // 是否允许调整大小 (暂未实现)
            },
            options
        );

        //初始化创建style样式
        this.initialStyle();

        // 查找已存在的 .plus-draggable-component 元素
        this.dragContainer = document.querySelector(".plus-draggable-component");

        // 如果不存在，则创建新的容器
        if (!this.dragContainer) {
            // 创建组件容器
            // this.dragContainer = document.createElement("div");
            // this.dragContainer.classList.add("plus-draggable-component");
            // this.dragContainer.style.position = "fixed";
            this.dragContainer = document.createElement("div");
            this.dragContainer.className = "plus-draggable-component";
            document.body.appendChild(this.dragContainer);

            // 设置初始内容
            this.setContent(this.options.content);
        }

        // 添加 CSS 样式
        this.dragContainer.style.cssText += `
            z-index: 9998;
            background-color: #fff;
            border: 1px solid #ccc;
            position: fixed;
            padding: 3px;
            width: fit-content;
            cursor: pointer;
            border-radius: 3px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            touch-action: none; /* 禁止浏览器默认行为，如滚动 */
            user-select: none; /* 防止选中文本 */
            /* 过渡动画的使用 */
            /*transition:  opacity 1.5s linear 0s;*/
            transition: transform 0.3s ease 0s;
            /*transition: top 0.01s, left 0.01s;  添加平滑动画 */
      `;

        // 初始化折叠状态和计时器
        this.isCollapsed = false;
        this.collapseTimeout = null;

        // 添加展开的浮标记号
        // 创建浮标容器
        this.buoyContainer = document.createElement("div");
        this.buoyContainer.classList.add("draggable-component-buoy-container");
        this.buoyContainer.style.cssText = `
            line-height: 1;
            z-index: 9999;
            position: fixed;
            width: ${this.options.buoyContainerWidth}px;
            height: ${this.options.buoyContainerHeight}px;
            cursor: pointer;
            background-color: rgb(50 50 50 / 50%);
            border-radius: 3px;
            display: inline-flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: inherit;
            / * 简单动画变换 */
            transition: transform 0.3s ease 0s;
        `;
        if(this.options.buoyShape === "round"){
            this.buoyContainer.style.cssText = `
                line-height: 1;
                z-index: 9999;
                position: fixed;
                width: ${this.options.buoyContainerWidth}px;
                height: ${this.options.buoyContainerHeight}px;
                cursor: pointer;
                background-color: rgb(50 50 50 / 50%);
                display: inline-flex;
                flex-wrap: nowrap;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                color: inherit;
                / * 简单动画变换 */
                transition: transform 0.3s ease 0s;
                border-radius: ${this.options.buoyContainerHeight}px;
            `;
        }
        document.body.appendChild(this.buoyContainer);

        //初始隐藏
        this.buoyContainer.classList.add("hideBuoy");
        // 添加浮标/按钮
        this.buoy = document.createElement("div");
        this.buoy.classList.add("draggable-component-buoy");
        this.buoy.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border-style: solid;
        border-color: white;
        border-image: initial;
        border-width: 0 2px 2px 0;
        border-bottom-right-radius: 3px;
        display: inline-block;
        /* padding: 3px; */
      `;
        this.buoyContainer.appendChild(this.buoy);

        // 设置初始位置
        this.setInitialPosition();

        // 添加事件监听器
        this.addEventListeners();

        // 将组件添加到页面
        document.body.appendChild(this.dragContainer);

        // 设置浮标/按钮内容
        this.setBuoyContent(this.options.buoyContent);
    }

    //初始化一些css样式
    initialStyle() {
        // 创建<style>元素并添加到<head>中
        if (document.getElementById("plus-draggable-component-styles")) return;
        const style = document.createElement('style');
        style.id = "plus-draggable-component-styles";
        style.textContent = `
        .open-blooming {
            transition: transform 0.3s ease 0s;
        }
        .plus-draggable-component.hideDrag {
            display: none; /* 初始隐藏拖拽容器 visibility: hidden; */
            transform: scale(0);
        }
        .draggable-component-buoy-container.hideBuoy {
            display: none; /* 初始隐藏浮标/按钮 visibility: hidden; */
            transform: scale(0);
        }
        `;
        document.head.appendChild(style);
        // 向<style>元素添加CSS规则
        // if (style.sheet.insertRule) {
        //     style.sheet.insertRule('body { background-color: red; }', 0);
        // } else if (style.sheet.addRule) {
        //     style.sheet.addRule("body", "background-color: blue;", 0);
        // }
    }

    // 设置组件内容
    setContent(content) {
        if (typeof content === "string") {
            this.dragContainer.innerHTML = content;
        } else if (content instanceof HTMLElement) {
            this.dragContainer.innerHTML = "";
            this.dragContainer.appendChild(content);
        }
    }

    // 设置初始位置
    setInitialPosition() {
        // 使用 setTimeout 确保在元素渲染后获取宽度和高度
        setTimeout(() => {
            const { innerWidth, innerHeight } = window;
            const { offsetWidth, offsetHeight } = this.dragContainer;

            // if(this.dragContainer.offsetWidth > innerWidth){
            //     this.dragContainer.style.width = "80%";
            // }
            switch (this.options.initialPosition) {
                case "center":
                    this.dragContainer.style.top = `${(innerHeight - offsetHeight) / 2}px`;
                    this.dragContainer.style.left = `${(innerWidth - offsetWidth) / 2}px`;
                    break;
                case "top-left":
                    this.dragContainer.style.top = "0";
                    this.dragContainer.style.left = "0";
                    // if (this.options.edgeFolding) {
                    //     this.isCollapsed = true;
                    //     this.dragContainer.style.left = `-${offsetWidth}px`; // 全部隐藏或只露出一点,offsetWidth - 20，减去20表示会显示出20的内容，以下同理
                    //     this.dragContainer.style.top = `-${offsetHeight}px`; // 全部隐藏或只露出一点
                    //     this.showBuoyHideDrag("top-left");
                    // }
                    //折叠容器
                    this.collapseContainer(null, -offsetWidth, -offsetHeight, "left-top");
                    break;
                case "top-right":
                    this.dragContainer.style.top = "0";
                    this.dragContainer.style.right = "0";
                    // if (this.options.edgeFolding) {
                    //     this.isCollapsed = true;
                    //     this.dragContainer.style.left = `${innerWidth}px`; // 全部隐藏或只露出一点
                    //     this.dragContainer.style.top = `-${offsetHeight}px`; // 全部隐藏或只露出一点
                    //     this.showBuoyHideDrag("top-right");
                    // }
                    //折叠容器
                    this.collapseContainer(null, innerWidth, -offsetHeight, "top-right");
                    break;
                case "bottom-left":
                    this.dragContainer.style.bottom = "0";
                    this.dragContainer.style.left = "0";
                    // if (this.options.edgeFolding) {
                    //     this.isCollapsed = true;
                    //     this.dragContainer.style.left = `-${offsetWidth}px`; // 全部隐藏或只露出一点,offsetWidth - 20，减去20表示会显示出20的内容，以下同理
                    //     this.dragContainer.style.top = `${innerHeight}px`; // 全部隐藏或只露出一点
                    //     this.showBuoyHideDrag("bottom-left");
                    // }
                    //折叠容器
                    this.collapseContainer(null, -offsetWidth, innerHeight, "bottom-left");
                    break;
                case "bottom-right":
                    this.dragContainer.style.bottom = "0";
                    this.dragContainer.style.right = "0";
                    // if (this.options.edgeFolding) {
                    //     this.isCollapsed = true;
                    //     this.dragContainer.style.left = `${innerWidth}px`; // 全部隐藏或只露出一点
                    //     this.dragContainer.style.top = `${innerHeight}px`; // 全部隐藏或只露出一点
                    //     this.showBuoyHideDrag("bottom-right");
                    // }
                    //折叠容器
                    this.collapseContainer(null, innerWidth, innerHeight, "right-bottom");
                    break;
                case "left":
                    this.dragContainer.style.top = `${(innerHeight - offsetHeight) / 2}px`;
                    this.dragContainer.style.left = "0";
                    // if (this.options.edgeFolding) {
                    //     this.isCollapsed = true;
                    //     this.dragContainer.style.left = `-${offsetWidth}px`; // 全部隐藏或只露出一点,offsetWidth - 20，减去20表示会显示出20的内容，以下同理
                    //     this.showBuoyHideDrag("left");
                    // }
                    //折叠容器
                    this.collapseContainer(null, -offsetWidth, null, "left");
                    break;
                case "right":
                    this.dragContainer.style.top = `${(innerHeight - offsetHeight) / 2}px`;
                    this.dragContainer.style.right = "0";
                    // if (this.options.edgeFolding) {
                    //     this.isCollapsed = true;
                    //     this.dragContainer.style.left = `${innerWidth}px`; // 全部隐藏或只露出一点
                    //     this.showBuoyHideDrag("right");
                    // }
                    //折叠容器
                    this.collapseContainer(null, innerWidth, null, "right");
                    break;
                default:
                    break;
            }
        }, 0);
    }

    // 设置浮标/按钮内容
    setBuoyContent(content) {
        if (content) {
            if (typeof content === "string") {
                // 如果是 HTML 字符串，则直接设置 innerHTML
                this.buoyContainer.innerHTML = content;
            } else if (content instanceof HTMLElement) {
                // 如果是 DOM 元素，则清空 buoyContainer 并添加该元素
                this.buoyContainer.innerHTML = "";
                this.buoyContainer.appendChild(content);
            } else if (typeof content === "object" && content.src) {
                // 如果是图片 URL，则创建 img 元素并设置 src 属性
                const img = document.createElement("img");
                img.src = content.src;
                this.buoyContainer.innerHTML = "";
                this.buoyContainer.appendChild(img);
            }
        }
    }

    // 添加事件监听器
    addEventListeners() {
        this.isDragging = false;
        this.isResizing = false;
        let startX, startY, initialX, initialY;

        //监听窗口变化
        window.addEventListener("resize", (e) => {
            this.isResizing = true;

            this.windowHeight = e.target.innerHeight; //|| document.documentElement.clientHeight || document.body.clientHeight;
            this.windowWidth = e.target.innerWidth; //|| document.documentElement.clientWidth || document.body.clientWidth;

            //调用窗口边缘计算
            this.clingToWindowEdge(0);
        });

        //已经不使用这种事件了，都包含在resize里了
        // window.addEventListener("orientationchange", (e) => {
        //     this.isResizing = true;

        //     //这里获取的总是上一次的高和宽
        //     this.windowHeight = e.target.innerHeight; //document.documentElement.clientHeight || document.body.clientHeight;
        //     this.windowWidth = e.target.innerWidth; //document.documentElement.clientWidth || document.body.clientWidth;
        //     //调用窗口边缘计算
        //     this.clingToWindowEdge(0);
        // });

        // 鼠标按下事件
        const handleMouseDown = (e) => {
            //阻止事件冒泡，防止影响别的事件
            this.stopPropaga(e);
            // 确保只在组件上触发拖拽
            if (!e.target.closest('.plus-draggable-component') && !e.target.closest('.draggable-component-buoy-container')) return;

            this.isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialX = this.dragContainer.offsetLeft;
            initialY = this.dragContainer.offsetTop;

            // 添加鼠标移动和鼠标松开事件到 document，以便在组件外部也能响应
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        // 鼠标移动事件
        const handleMouseMove = (e) => {
            if (!this.isDragging) return;
            this.preventDef(e); // 阻止事件的默认行为

            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            // const dragX = initialX + deltaX + Math.round(this.dragContainer.offsetWidth / 2);
            // const dragY = initialY + deltaY + Math.round(this.dragContainer.offsetHeight / 2);
            // this.setTranslate(dragX, dragY, this.dragContainer);

            // 通过修改 dragContainer样式的 left 和 top 属性
            this.dragContainer.style.left = `${initialX + deltaX}px`;
            this.dragContainer.style.top = `${initialY + deltaY}px`;
        };

        // 鼠标松开事件
        const handleMouseUp = () => {
            this.isDragging = false;

            this.clingToWindowEdge();

            // 移除鼠标移动和鼠标松开事件
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        // 添加鼠标按下事件监听器
        this.dragContainer.addEventListener("mousedown", handleMouseDown, { passive: false });
        this.dragContainer.addEventListener("mousemove", handleMouseMove, true);
        this.dragContainer.addEventListener("mouseup", handleMouseUp);
        // this.dragContainer.addEventListener('pointermove', function(event) {
        //     event.preventDefault();
        // });

        //****************移动端手指触摸事件*******************
        // 移动端手指触摸开始事件
        const handleTouchStart = (e) => {
            //阻止事件冒泡，防止影响别的事件
            this.stopPropaga(e);
            // 确保只在组件上触发拖拽
            if (!e.target.closest('.plus-draggable-component') && !e.target.closest('.draggable-component-buoy-container')) return;
            // if(e.target !== this.dragContainer) return;

            this.isDragging = true;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;

            initialX = this.dragContainer.offsetLeft;
            initialY = this.dragContainer.offsetTop;

            // 添加手指触摸移动和手指触摸结束事件到 document，以便在组件外部也能响应
            document.addEventListener("touchmove", handleTouchMove);
            document.addEventListener("touchend", handleTouchEnd);
        };

        // 手指触摸移动事件
        const handleTouchMove = (e) => {
            if (!this.isDragging) return;
            // this.preventDef(e); // 阻止事件的默认行为

            //if (this.getElementDepth(e.target) === 4) {
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;
            this.dragContainer.style.left = `${initialX + deltaX}px`;
            this.dragContainer.style.top = `${initialY + deltaY}px`;
            //}

            // 判断是否移动了一段距离，如果是则阻止默认行为
            // if ((Math.abs(e.touches[0].clientX - startX) > 15 ||
            // Math.abs(e.touches[0].clientY - startY) > 15) ) {
            //     if(this.isDragging){
            //         e.preventDefault(); // 阻止事件的默认行为
            //         const deltaX = e.touches[0].clientX - startX;
            //         const deltaY = e.touches[0].clientY - startY;
            //         this.dragContainer.style.left = `${initialX + deltaX}px`;
            //         this.dragContainer.style.top = `${initialY + deltaY}px`;
            //     }
            // }else{
            //     if(this.isDragging){
            //         // e.preventDefault(); // 阻止事件的默认行为
            //         const deltaX = e.touches[0].clientX - startX;
            //         const deltaY = e.touches[0].clientY - startY;
            //         this.dragContainer.style.left = `${initialX + deltaX}px`;
            //         this.dragContainer.style.top = `${initialY + deltaY}px`;
            //     }
            // }
        };

        // 手指触摸结束事件
        const handleTouchEnd = () => {
            this.isDragging = false;

            this.clingToWindowEdge();

            // 移除手指触摸移动和手指触摸结束事件
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };

        // 添加手指触摸按下事件监听器
        this.dragContainer.addEventListener("touchstart", handleTouchStart, { passive: false });
        this.dragContainer.addEventListener("touchmove", handleTouchMove, true);
        this.dragContainer.addEventListener("touchend", handleTouchEnd);
    }

    // 延迟时间紧贴边缘，要在一定时间之后再执行折叠
    clingToWindowEdge(timeDelay = this.options.collapseDelay) {
        //获取窗口的长高和容器的长高
        const { innerWidth, innerHeight } = window;
        
        const { offsetWidth, offsetHeight } = this.dragContainer;
        const edgeThreshold = 7; // 距离边缘的阈值,默认距离四边和四角小于7时
        const collapseDelay = timeDelay; // 折叠延迟，单位为毫秒

        clearTimeout(this.collapseTimeout); // 清除之前的计时器

        //优先判断是否是四个角
        if ((this.dragContainer.offsetLeft < edgeThreshold) && (this.dragContainer.offsetTop < edgeThreshold)) {
            //当前为左上，左上角
            //靠近窗口左边边缘，小于edgeThreshold
            this.dragContainer.style.left = "0";
            //靠近窗口上边边缘，小于edgeThreshold
            this.dragContainer.style.top = "0";
            //允许边缘折叠
            // if (this.options.edgeFolding) {
            // 设置折叠计时器
            // this.collapseTimeout = setTimeout(() => {
            //     this.isCollapsed = true;
            //     this.dragContainer.style.left = `-${offsetWidth}px`; // 全部隐藏或只露出一点,offsetWidth - 20，减去20表示会显示出20的内容，以下同理
            //     this.dragContainer.style.top = `-${offsetHeight}px`; // 全部隐藏或只露出一点
            //     this.showBuoyHideDrag("left-top");
            // }, collapseDelay);
            // }
            //折叠容器
            this.collapseContainer(collapseDelay, -offsetWidth, -offsetHeight, "left-top");
        } else if ((innerWidth - this.dragContainer.offsetLeft - offsetWidth < edgeThreshold) && (innerHeight - this.dragContainer.offsetTop - offsetHeight < edgeThreshold)) {
            //当前为右下，右下角
            //靠近窗口右边边缘，小于edgeThreshold
            this.dragContainer.style.left = `${innerWidth - offsetWidth}px`;
            //靠近窗口下边边缘，小于edgeThreshold
            this.dragContainer.style.top = `${innerHeight - offsetHeight}px`;
            //允许边缘折叠
            // if (this.options.edgeFolding) {
            // 设置折叠计时器
            // this.collapseTimeout = setTimeout(() => {
            //     this.isCollapsed = true;
            //     this.dragContainer.style.left = `${innerWidth}px`; // 全部隐藏或只露出一点
            //     this.dragContainer.style.top = `${innerHeight}px`; // 全部隐藏或只露出一点
            //     this.showBuoyHideDrag("right-bottom");
            // }, collapseDelay);
            // }
            //折叠容器
            this.collapseContainer(collapseDelay, innerWidth, innerHeight, "right-bottom");
        } else if ((this.dragContainer.offsetTop < edgeThreshold) && (innerWidth - this.dragContainer.offsetLeft - offsetWidth < edgeThreshold)) {
            //当前为上右，右上角
            //靠近窗口右边边缘，小于edgeThreshold
            this.dragContainer.style.left = `${innerWidth - offsetWidth}px`;
            //靠近窗口上边边缘，小于edgeThreshold
            this.dragContainer.style.top = "0";
            //允许边缘折叠
            // if (this.options.edgeFolding) {
            // 设置折叠计时器
            // this.collapseTimeout = setTimeout(() => {
            //     this.isCollapsed = true;
            //     this.dragContainer.style.left = `${innerWidth}px`; // 全部隐藏或只露出一点
            //     this.dragContainer.style.top = `-${offsetHeight}px`; // 全部隐藏或只露出一点
            //     this.showBuoyHideDrag("top-right");
            // }, collapseDelay);
            // }
            //折叠容器
            this.collapseContainer(collapseDelay, innerWidth, -offsetHeight, "top-right");
        } else if ((innerHeight - this.dragContainer.offsetTop - offsetHeight < edgeThreshold) && (this.dragContainer.offsetLeft < edgeThreshold)) {
            //当前为下左，左下角
            //靠近窗口左边边缘，小于edgeThreshold
            this.dragContainer.style.left = "0";
            //靠近窗口下边边缘，小于edgeThreshold
            this.dragContainer.style.top = `${innerHeight - offsetHeight}px`;
            //允许边缘折叠
            // if (this.options.edgeFolding) {
            // 设置折叠计时器
            // this.collapseTimeout = setTimeout(() => {
            //     this.isCollapsed = true;
            //     this.dragContainer.style.left = `-${offsetWidth}px`; // 全部隐藏或只露出一点,offsetWidth - 20，减去20表示会显示出20的内容，以下同理
            //     this.dragContainer.style.top = `${innerHeight}px`; // 全部隐藏或只露出一点
            //     this.showBuoyHideDrag("bottom-left");
            // }, collapseDelay);
            // }
            //折叠容器
            this.collapseContainer(collapseDelay, -offsetWidth, innerHeight, "bottom-left");
        } else {
            //判断拖拽元素是靠近上边边还是下边
            if ((this.dragContainer.offsetTop < edgeThreshold)) {
                //靠近窗口上边边缘，小于edgeThreshold
                this.dragContainer.style.top = "0";
                //允许边缘折叠
                // if (this.options.edgeFolding) {
                // 设置折叠计时器
                // this.collapseTimeout = setTimeout(() => {
                //     this.isCollapsed = true;
                //     this.dragContainer.style.top = `-${offsetHeight}px`; // 全部隐藏或只露出一点，显示露出多少，就减去一个数字
                //     this.showBuoyHideDrag("top");
                // }, collapseDelay);
                // }
                //折叠容器
                this.collapseContainer(collapseDelay, null, -offsetHeight, "top");
            } else if (innerHeight - this.dragContainer.offsetTop - offsetHeight < edgeThreshold) {
                //靠近窗口下边边缘，小于edgeThreshold
                this.dragContainer.style.top = `${innerHeight - offsetHeight}px`;
                //允许边缘折叠
                // if (this.options.edgeFolding) {
                // 设置折叠计时器
                // this.collapseTimeout = setTimeout(() => {
                //     this.isCollapsed = true;
                //     this.dragContainer.style.top = `${innerHeight}px`; // 全部隐藏或只露出一点
                //     this.showBuoyHideDrag("bottom");
                // }, collapseDelay);
                // }
                //折叠容器
                this.collapseContainer(collapseDelay, null, innerHeight, "bottom");
            }

            //判断拖拽元素是靠近左边还是右边
            if (this.dragContainer.offsetLeft < edgeThreshold) {
                //靠近窗口左边边缘，小于edgeThreshold
                this.dragContainer.style.left = "0";
                //允许边缘折叠
                // if (this.options.edgeFolding) {
                // 设置折叠计时器
                // this.collapseTimeout = setTimeout(() => {
                //     this.isCollapsed = true;
                //     this.dragContainer.style.left = `-${offsetWidth}px`; // 全部隐藏或只露出一点,offsetWidth - 20，减去20表示会显示出20的内容，以下同理
                //     this.showBuoyHideDrag("left");
                // }, collapseDelay);
                // }
                //折叠容器
                this.collapseContainer(collapseDelay, -offsetWidth, null, "left");
            } else if (innerWidth - this.dragContainer.offsetLeft - offsetWidth < edgeThreshold) {
                //靠近窗口右边边缘，小于edgeThreshold
                this.dragContainer.style.left = `${innerWidth - offsetWidth}px`;
                //允许边缘折叠
                // if (this.options.edgeFolding) {
                // 设置折叠计时器
                // this.collapseTimeout = setTimeout(() => {
                //     this.isCollapsed = true;
                //     this.dragContainer.style.left = `${innerWidth}px`; // 全部隐藏或只露出一点
                //     this.showBuoyHideDrag("right");
                // }, collapseDelay);
                // }
                //折叠容器
                this.collapseContainer(collapseDelay, innerWidth, null, "right");
            }
        }
    }

    //折叠容器，带有延迟时间，delayTime延迟时间，delayTime传入为null表示不适用延迟函数。
    //leftNum左边距离，top顶部距离，position显示位置（left，top-right）
    collapseContainer(delayTime = null, leftNum = null, topNum = null, position = null) {
        //允许边缘折叠
        if (this.options.edgeFolding && delayTime) {
            this.collapseTimeout = setTimeout(() => {
                this.isCollapsed = true;
                //左边距离
                if (leftNum) {
                    this.dragContainer.style.left = `${leftNum}px`; // 全部隐藏或只露出一点，显示露出多少，就减去一个数字
                }
                //顶部距离
                if (topNum) {
                    this.dragContainer.style.top = `${topNum}px`; // 全部隐藏或只露出一点，显示露出多少，就减去一个数字
                }
                if (!this.isDragging) {
                    this.showBuoyHideDrag(position);
                }
            }, delayTime);
        } else if (this.options.edgeFolding) {
            this.isCollapsed = true;
            //左边距离
            if (leftNum) {
                this.dragContainer.style.left = `${leftNum}px`; // 全部隐藏或只露出一点，显示露出多少，就减去一个数字
            }
            //顶部距离
            if (topNum) {
                this.dragContainer.style.top = `${topNum}px`; // 全部隐藏或只露出一点，显示露出多少，就减去一个数字
            }
            if (!this.isDragging) {
                this.showBuoyHideDrag(position);
            }
        }
    }

    // 获取元素的层级，当前元素是第几层
    getElementDepth(element) {
        let depth = 0;
        while (element.parentNode) {
            depth++;
            element = element.parentNode;
        }
        return depth;
    }

    //阻止默认的滚动事件
    preventDef(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        }
    }

    //组织事件冒泡
    stopPropaga(e) {
        //阻止事件冒泡，防止影响别的事件
        if (e && e.stopPropagatio) {
            e.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }
    }

    // 显示浮标/按钮，隐藏拖拖拽容器
    showBuoyHideDrag(position) {
        //获取窗口的长高和容器的长高
        const { offsetWidth, offsetHeight } = this.dragContainer;
        const buoyWidth = this.options.buoyContainerWidth;
        const buoyHeight = this.options.buoyContainerHeight;

        // this.dragContainer.classList.add("open-blooming");
        // 隐藏组件，显示浮标/按钮
        this.dragContainer.classList.add("hideDrag");
        // 添加动画效果
        this.buoyContainer.style.transition = "transform 0.3s ease 0s"; // 设置过渡效果
        // this.buoyContainer.style.display = "inline-flex";
        this.buoyContainer.classList.remove("hideBuoy");

        //显示浮动标识/按钮
        switch (position) {
            case "left":
                this.buoyContainer.style.left = `${(this.dragContainer.offsetLeft + this.dragContainer.offsetWidth)}px`; //显示在左边，需要获取left加长度
                this.buoyContainer.style.top = `${this.dragContainer.offsetTop}px`; // 显示在上方，只需要获取top，对上下的位置，不影响视图显示
                break;
            case "right":
                this.buoyContainer.style.left = `${this.dragContainer.offsetLeft - buoyWidth}px`; // 因为dragContainer的位置被移除视窗之外，所以我们获取到的位置要减去20才可以显示，20代表buoyContainer的长或高
                this.buoyContainer.style.top = `${this.dragContainer.offsetTop}px`; // 显示在右边，对上下的位置，不影响视图显示
                break;
            case "top":
                this.buoyContainer.style.left = `${this.dragContainer.offsetLeft}px`; //显示在上方，也只需要获取left，对左右的位置，不影响视图显示
                this.buoyContainer.style.top = `${(this.dragContainer.offsetTop + this.dragContainer.offsetHeight)}px`; //显示在上方，需要获取top加高度
                break;
            case "left-top":
                this.buoyContainer.style.left = `${(this.dragContainer.offsetLeft + this.dragContainer.offsetWidth)}px`; //显示在左边，需要获取left加长度
                this.buoyContainer.style.top = `${(this.dragContainer.offsetTop + this.dragContainer.offsetHeight)}px`; // 显示在上方，需要获取top加高度
                break;
            case "top-right":
                this.buoyContainer.style.left = `${this.dragContainer.offsetLeft - buoyWidth}px`; // 因为dragContainer的位置被移除视窗之外，所以我们获取到的位置要减去20才可以显示，20代表buoyContainer的长或高
                this.buoyContainer.style.top = `${(this.dragContainer.offsetTop + this.dragContainer.offsetHeight)}px`; // 显示在上方，需要获取top加高度
                break;
            case "bottom":
                this.buoyContainer.style.left = `${this.dragContainer.offsetLeft}px`; // 显示在下方，对左右的位置，不影响视图显示
                this.buoyContainer.style.top = `${this.dragContainer.offsetTop - buoyHeight}px`; // 因为dragContainer的位置被移除视窗之外，所以我们获取到的位置要减去20才可以显示，20代表buoyContainer的长或高
                break;
            case "bottom-left":
                this.buoyContainer.style.left = `${(this.dragContainer.offsetLeft + this.dragContainer.offsetWidth)}px`; //显示在左边，需要获取left加长度
                this.buoyContainer.style.top = `${this.dragContainer.offsetTop - buoyHeight}px`; // 因为dragContainer的位置被移除视窗之外，所以我们获取到的位置要减去20才可以显示，20代表buoyContainer的长或高
                break;
            case "right-bottom":
                this.buoyContainer.style.left = `${this.dragContainer.offsetLeft - buoyWidth}px`; // 因为dragContainer的位置被移除视窗之外，所以我们获取到的位置要减去20才可以显示，20代表buoyContainer的长或高
                this.buoyContainer.style.top = `${this.dragContainer.offsetTop - buoyHeight}px`; // 因为dragContainer的位置被移除视窗之外，所以我们获取到的位置要减去20才可以显示，20代表buoyContainer的长或高
                break;
        }

        // 点击浮标/按钮隐藏，展开拖拽容器
        this.buoyContainer.onclick = () => {
            this.hideBuoyShowDrag(position);
        };
    }

    // 隐藏浮标显示拖拽
    hideBuoyShowDrag(position) {
        this.isCollapsed = !this.isCollapsed;
        if (this.isCollapsed) {
            // 折叠组件，显示浮标/按钮
            this.clingToWindowEdge();
        } else {
            // 展开组件，隐藏悬浮buoyContainer
            // this.dragContainer.style.visibility = "visible";
            this.dragContainer.classList.remove("hideDrag");
            // this.buoyContainer.style.display = "none";
            this.buoyContainer.classList.add("hideBuoy");
            clearTimeout(this.collapseTimeout); // 清除延迟

            // 显示拖拽容器
            switch (position) {
                case "left":
                    this.dragContainer.style.left = `${(this.dragContainer.offsetLeft + this.dragContainer.offsetWidth)}px`; // 恢复之前的位置
                    this.dragContainer.style.top = `${this.dragContainer.offsetTop}px`; // 恢复之前的位置
                    break;
                case "right":
                    this.dragContainer.style.left = `${(this.dragContainer.offsetLeft - this.dragContainer.offsetWidth)}px`; // 恢复之前的位置
                    this.dragContainer.style.top = `${this.dragContainer.offsetTop}px`; // 恢复之前的位置
                    break;
                case "left-top":
                    this.dragContainer.style.left = `${(this.dragContainer.offsetLeft + this.dragContainer.offsetWidth)}px`; // 恢复之前的位置
                    this.dragContainer.style.top = `${(this.dragContainer.offsetTop + this.dragContainer.offsetHeight)}px`; // 恢复之前的位置
                    break;
                case "top-right":
                    this.dragContainer.style.left = `${(this.dragContainer.offsetLeft - this.dragContainer.offsetWidth)}px`; // 恢复之前的位置
                    this.dragContainer.style.top = `${(this.dragContainer.offsetTop + this.dragContainer.offsetHeight)}px`; // 恢复之前的位置
                    break;
                case "top":
                    this.dragContainer.style.left = `${(this.dragContainer.offsetLeft)}px`; // 恢复之前的位置
                    this.dragContainer.style.top = `${(this.dragContainer.offsetTop + this.dragContainer.offsetHeight)}px`; // 恢复之前的位置
                    break;
                case "bottom-left":
                    this.dragContainer.style.left = `${(this.dragContainer.offsetLeft + this.dragContainer.offsetWidth)}px`; // 恢复之前的位置
                    this.dragContainer.style.top = `${(this.dragContainer.offsetTop - this.dragContainer.offsetHeight)}px`; // 恢复之前的位置
                    break;
                case "right-bottom":
                    this.dragContainer.style.left = `${(this.dragContainer.offsetLeft - this.dragContainer.offsetWidth)}px`; // 恢复之前的位置
                    this.dragContainer.style.top = `${(this.dragContainer.offsetTop - this.dragContainer.offsetHeight)}px`; // 恢复之前的位置
                    break;
                case "bottom":
                    this.dragContainer.style.left = `${(this.dragContainer.offsetLeft)}px`; // 恢复之前的位置
                    this.dragContainer.style.top = `${(this.dragContainer.offsetTop - this.dragContainer.offsetHeight)}px`; // 恢复之前的位置
                    break;
            }

            //点击之后如果没有任何操作时，则重新调用clingToWindowEdge();
            this.clingToWindowEdge();
        }
    }
    
    setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
}

// 将 DraggableComponent 对象暴露给全局对象
_global = (function () { return this || (0, eval)('this'); }());
if (typeof module !== "undefined" && module.exports) {
    module.exports = DraggableComponent;
} else if (typeof define === "function" && define.amd) {
    define(function () { return DraggableComponent; });
} else {
    !('DraggableComponent' in _global) && (_global.DraggableComponent = DraggableComponent);
}
