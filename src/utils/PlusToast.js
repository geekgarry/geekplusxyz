// ... 上面的 JavaScript 代码 ...
class PlusToast {
    constructor(options = {}) {
        this.options = {
            message: "",
            duration: 3000,
            icon: "",//内置提供success，error，warning，info四个，也可以自定义图标，直接传入icon图标的svg或img
            type: "light",// 设置黑暗/成功等显示类型：dark，success，error，warning，info，默认为light，light只是表明初始的样式是明亮主题
            closable: false,
            position: "top",
            animation: "slide", // 动画效果：'slide', 'fade',  'bounce'
            onlyOne: false,//是否只显示一次，多次点击只显示一次
            confirmMode: false,//是否为确认模式，确认模式可以和用户交互，会在消息下面显示确认和取消按钮
            ...options
        };
        // 用于存储定时器 ID
        // this.timerId = null;
        // 使用 Object.assign 合并默认参数和传入参数
        // this.options = Object.assign({}, defaultOptions, options);
        this.initStyles();
    }

    initStyles() {
        if (document.getElementById("plus-toast-styles")) return; // 避免重复添加样式

        const css = `
                /* 定义淡出动画 */
                @keyframes fadeOut {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                    }
                }
                /* 定义淡入动画 */
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                /* 淡入 */
                @keyframes fadein {
                    0% {
                        opacity:0;
                    }
                    100% {
                        opacity:1;
                    }
                }
                /* 弹入-从上 */
                @keyframes bounce-in {
                    0% {
                        opacity:0;
                        transform:translateY(-100px);
                    }
                    60% {
                        opacity:1;
                        transform:translateY(30px);
                    }
                    80% {
                        transform:translateY(-10px);
                    }
                    100% {
                        transform:translateY(0);
                    }
                }
                /* 弹出-向上*/
                @keyframes bounce-out {
                    0% {
                        transform:translateY(0);
                    }
                    20% {
                        opacity:1;
                        transform:translateY(20px);
                    }
                    100% {
                        opacity:0;
                        transform:translateY(-100px);
                    }
                }
                /* 滑入-从上 */
                @keyframes slide-in {
                    0% {
                        opacity:0;
                        transform:translateY(-100%);
                    }
                    60% {
                        opacity:0.6;
                        transform:translateY(-40%);
                    }
                    100% {
                        opacity:1;
                        transform:translateY(0);
                    }
                }
                /* 滑出-向上*/
                @keyframes slide-out {
                    0% {
                        opacity:1;
                        transform:translateY(0);
                    }
                    20% {
                        opacity:.8;
                        transform:translateY(-20%);
                    }
                    100% {
                        opacity:0;
                        transform:translateY(-100%);
                    }
                }
                @media screen {
                    /* 屏幕样式规则 */
                    @media (min-width: 1200px) {
                        /* 大屏幕样式规则 */
                        .plus-toast {
                            max-width: 680px;
                        }
                    }
                    @media (min-width: 992px) and (max-width: 1199px) {
                        /* 大屏幕样式规则 */
                        .plus-toast {
                            max-width: 530px;
                        }
                    }
    
                    @media (max-width: 991px) and (min-width: 601px) {
                        /* 小屏幕样式规则 */
                        .plus-toast {
                            max-width: 420px;
                        }
                    }
                    
                    @media (max-width: 600px) {
                        /* 超小屏幕样式规则 */
                        .plus-toast-container {
                            left: 0 !important;
                            right: 0 !important;
                            transform: translateX(0) !important;
                        }
                    }
                }
                .plus-toast-container {
                    position: fixed;
                    z-index: 10000;
                    /* 采用flex弹性布局，让容器内部的所有消息可以水平居中，还能任意的调整宽度 */
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                .plus-toast {
                    padding: 10px 15px;
                    background-color: rgba(256, 256, 256);
                    color: #000;
                    width: auto;
                    border-radius: 5px;
                    margin: 10px;
                    /* 让消息内部的三个元素（图标、文本、关闭按钮）可以垂直水平居中 */
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: center;
                    /* 增加一个过渡属性，当message元素的高度和margin变化时候将会有一个过渡动画 */
                    /*transition: height 0.2s ease-in-out, margin 0.2s ease-in-out;
                    transition: opacity 0.3s ease, transform 0.3s ease; */
                }
                .plus-toast .toast-main {
                    display: flex;
                    align-items: center;
                }
                .plus-toast .confirm-button-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center; /* 将按钮排列在中间 */
                    flex-wrap: nowrap;
                    align-items: center;
                    margin-top: 5px; /* 添加顶部间距 */
                }

                .plus-toast button {
                    background-color: transparent; /* 透明背景 */
                    border: none; /* 无边框 */
                    padding: 8px 16px; /* 内边距 */
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 4px; /* 圆角 */
                    margin: 0 7px; /* 按钮之间的间距 */
                }

                .plus-toast .confirm-button {
                    color: #409eff; /* 清新的蓝色 */
                }

                .plus-toast .cancel-button {
                    color: #606266; /* 浅灰色 */
                }
                .plus-toast.success {
                    background-color: #F0F9EB;
                    color: #67C23A;
                }
                .plus-toast.error {
                    background-color: #FEF0EF;
                    color: #ed5455;
                }
                .plus-toast.warning {
                    background-color: #faf5ed;
                    color: #df9928;
                }
                .plus-toast.info {
                    background-color: #d0dded;
                    color: #3377d7;
                }
                .plus-toast.dark {
                    background-color: rgba(0, 0, 0, 0.8);
                    color: #fff;
                }
                .plus-toast-icon {
                    margin-right: 10px;
                    display: grid;
                    place-items: center;
                }
                .plus-toast-close {
                    margin-left: 5px;
                    padding:0 5px;
                    cursor: pointer;
                    align-self: flex-start;
                    font-size: 1.5rem;
                }
                .plus-toast-container.top {
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .plus-toast-container.bottom {
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .plus-toast-container.left {
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .plus-toast-container.right {
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .plus-toast-container.center {
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .plus-toast-container.top-left {
                    top: 20px;
                    left: 20px;
                }
                .plus-toast-container.top-right {
                    top: 20px;
                    right: 20px;
                }
                .plus-toast-container.bottom-left {
                    bottom: 20px;
                    left: 20px;
                }
                .plus-toast-container.bottom-right {
                    bottom: 20px;
                    right: 20px;
                }
                /* 应用淡出动画 */
                .plus-toast.fade-out {
                    animation: fadeOut .3s ease-in-out forwards;
                }
                /* 应用淡入动画 */
                .plus-toast.fade-in {
                    animation: fadeIn .3s ease-in-out forwards;
                }
                .plus-toast.bounce-in {
                    animation: bounce-in .3s ease-in-out forwards;
                }
                .plus-toast.bounce-out {
                    animation: bounce-out .3s ease-in-out forwards;
                    /* 让动画结束后保持结束状态
                    animation-fill-mode: forwards; */
                }
                .plus-toast.slide-in {
                    animation: slide-in .3s ease-in-out forwards;
                }
                .plus-toast.slide-out {
                    animation: slide-out .3s ease-in-out forwards;
                    /* 让动画结束后保持结束状态
                    animation-fill-mode: forwards; */
                }
            `;

        const style = document.createElement("style");
        style.id = "plus-toast-styles";
        style.textContent = css;
        document.head.appendChild(style);
    }
    //创建相关的显示元素
    createToast(message) {

        const containerEle = "plus-toast-container";
        this.toastContainer = document.getElementsByClassName(containerEle)[0];
        if (!this.toastContainer) {
            this.toastContainer = document.createElement("div");
            this.toastContainer.classList.add(
                containerEle,
                this.currentOptions.position
            );
            // 添加到页面
            document.body.appendChild(this.toastContainer);
        }
        const toastEle="plus-toast";
        const toastEles= this.toastContainer.getElementsByClassName(toastEle);
        // 如果当前有消息框显示，并且是可关闭的，直接返回
        // 增加一个判断，如果当前已经有 toast 正在显示，则不创建新的 toast !this.toast.classList.contains(this.currentOptions.animation + "-out")
        if (this.currentOptions.onlyOne && toastEles.length > 0) {
            return;
        }
        // 创建 toast 元素
        this.toast = document.createElement("div");
        this.toast.classList.add(
            toastEle,
            this.currentOptions.type
        );
        // if(this.currentOptions.theme === "dark"){
        //     this.toast.style.cssText +=``;
        // }
        this.toastContainer.appendChild(this.toast);

        // 创建 toastMain 元素
        this.toastMain = document.createElement("div");
        this.toastMain.classList.add(
            "toast-main"
        );
        //添加toast消息主体main
        this.toast.appendChild(this.toastMain);

        // 添加图标
        const iconMap = {
            success: '<svg t="1721053091579" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27348" width="20" height="20"><path d="M0 512c0 282.784 229.184 512 512 512 282.784 0 512-229.216 512-512 0-282.816-229.216-512-512-512C229.184 0 0 229.184 0 512z m440.896 85.024l254.4-254.4a32 32 0 0 1 45.248 0l22.624 22.624a32 32 0 0 1 0 45.248l-294.144 294.176a31.904 31.904 0 0 1-21.952 9.344 32 32 0 0 1-32.672-7.744l-135.776-135.776a32 32 0 0 1 0-45.248l22.624-22.624a32 32 0 0 1 45.248 0l94.4 94.4z" fill="#34C724" p-id="27349"></path></svg>',
            error: '<svg t="1721052201965" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6613" width="20" height="20"><path d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z m218.624 672.256c15.872 15.872 15.872 41.984 0 57.856-8.192 8.192-18.432 11.776-29.184 11.776s-20.992-4.096-29.184-11.776L512 569.856l-160.256 160.256c-8.192 8.192-18.432 11.776-29.184 11.776s-20.992-4.096-29.184-11.776c-15.872-15.872-15.872-41.984 0-57.856L454.144 512 293.376 351.744c-15.872-15.872-15.872-41.984 0-57.856 15.872-15.872 41.984-15.872 57.856 0L512 454.144l160.256-160.256c15.872-15.872 41.984-15.872 57.856 0 15.872 15.872 15.872 41.984 0 57.856L569.856 512l160.768 160.256z" fill="#CF3736" p-id="6614"></path></svg>',
            warning: '<svg t="1721053964256" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9064" width="20" height="20"><path d="M512 65C265.13 65 65 265.13 65 512s200.13 447 447 447 447-200.13 447-447S758.87 65 512 65z m-40 187a40 40 0 0 1 80 0v336.67a40 40 0 1 1-80 0z m93.87 506.13A53.87 53.87 0 0 1 512 812a53.87 53.87 0 0 1-53.87-53.87A53.87 53.87 0 0 1 512 704.26a53.87 53.87 0 0 1 53.87 53.87z" fill="#F9A825" p-id="9065"></path></svg>',
            info: '<svg t="1721052326591" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22656" width="20" height="20"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 640c0 17.6-14.4 32-32 32s-32-14.4-32-32V480c0-17.6 14.4-32 32-32s32 14.4 32 32v224z m-32-320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#1875F0" p-id="22657"></path></svg>',
        };

        //添加消息图标
        if (this.currentOptions.icon) {
            const icon = document.createElement("span");
            icon.classList.add("plus-toast-icon");
            icon.innerHTML = iconMap[this.currentOptions.icon];
            if (/<[^>]+>/g.test(this.currentOptions.icon)) {
                icon.innerHTML = this.currentOptions.icon;
            }
            this.toastMain.appendChild(icon);
        }

        // 添加消息内容
        const messageContent = document.createElement("span");
        messageContent.textContent = message;
        if ((/<[^>]+>/g.test(message))) {
            messageContent.innerHTML = message;
        }
        this.toastMain.appendChild(messageContent);

        // 添加关闭按钮
        if(this.currentOptions.closable){
            const closeButton = document.createElement("span");
            closeButton.classList.add("plus-toast-close");
            closeButton.textContent = "×";
            closeButton.addEventListener("click", this.hideToast.bind(this,this.toast));
            this.toastMain.appendChild(closeButton);
        }

        // 添加确认和取消按钮
        if (this.currentOptions.confirmMode) {
            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("confirm-button-container"); // 添加类名
    
            const cancelButton = document.createElement("button");
            cancelButton.classList.add("cancel-button"); // 添加类名
            cancelButton.textContent = this.currentOptions.cancelText || "取消";
            cancelButton.addEventListener("click", () => {
              this.hideToast(this.toast);
              if (typeof this.currentOptions.onCancel === "function") {
                this.currentOptions.onCancel();
              }
            });
            buttonContainer.appendChild(cancelButton);

            const confirmButton = document.createElement("button");
            confirmButton.classList.add("confirm-button"); // 添加类名
            confirmButton.textContent = this.currentOptions.confirmText || "确认";
            confirmButton.addEventListener("click", () => {
              this.hideToast(this.toast);
              if (typeof this.currentOptions.onConfirm === "function") {
                this.currentOptions.onConfirm();
              }
            });
            buttonContainer.appendChild(confirmButton);
  
            this.toast.appendChild(buttonContainer);
        }
    }
    showToast() {
        // 使用 setTimeout 来触发 animation 效果
        setTimeout(() => {
            this.toast.classList.add(this.currentOptions.animation + "-in");
        }, 0);
    }
    hideToast(plusToast) {
        plusToast.classList.remove(this.currentOptions.animation + "-in");
        plusToast.classList.add(this.currentOptions.animation + "-out");
        // 在 animationend 结束后移除元素
        plusToast.addEventListener("animationend", () => {
            plusToast.remove();
        });

        // 这个地方是监听transition的过渡动画结束事件，在动画结束后把消息从dom树中移除。
        plusToast.addEventListener('transitionend', () => {
            // Element对象内部有一个remove方法，调用之后可以将该元素从dom树种移除！
            plusToast.remove();
        });
    }
    hideToastAfter(delay, plusToast) {
        // 如果存在定时器，清除之前的定时器
        // if (this.timerId && this.currentOptions.closable) {
        //     clearTimeout(this.timerId);
        //     this.timerId = null;
        // }
        // this.timerId = setTimeout();
        // if (!this.currentOptions.closable || this.currentOptions.duration > 0) {}
        // 设置定时器
        setTimeout(() => {
            this.hideToast(plusToast);
        }, delay);
    }
    //通用显示方法
    show(message, options = {}) {
        // 合并options，将传入的options覆盖到this.currentOptions上
        this.currentOptions = { ...this.options, ...options };
        this.createToast(message);
        this.showToast();
        if (!this.currentOptions.closable || this.currentOptions.duration > 0) {
            this.hideToastAfter(this.currentOptions.duration, this.toast);
        }
    }
    //成功特定显示
    success(message, options = {}) {
        this.currentOptions = { ...this.options, type: "success", icon: "success", ...options };
        this.createToast(message);
        this.showToast();
        if (!this.currentOptions.closable || this.currentOptions.duration > 0) {
            this.hideToastAfter(this.currentOptions.duration, this.toast);
        }
    }
    //失败或错误特定显示
    error(message, options = {}) {
        this.currentOptions = { ...this.options, type: "error", icon: "error", ...options };
        this.createToast(message);
        this.showToast();
        if (!this.currentOptions.closable || this.currentOptions.duration > 0) {
            this.hideToastAfter(this.currentOptions.duration, this.toast);
        }
    }
    //警告特定显示
    warning(message, options = {}) {
        this.currentOptions = { ...this.options, type: "warning", icon: "warning", ...options };
        this.createToast(message);
        this.showToast();
        if (!this.currentOptions.closable || this.currentOptions.duration > 0) {
            this.hideToastAfter(this.currentOptions.duration, this.toast);
        }
    }
    //消息特定显示
    info(message, options = {}) {
        this.currentOptions = { ...this.options, type: "info", icon: "info", ...options, };
        this.createToast(message);
        this.showToast();
        if (!this.currentOptions.closable || this.currentOptions.duration > 0) {
            this.hideToastAfter(this.currentOptions.duration, this.toast);
        }
    }
    //注册or登记特定显示方法
    register(message, options = {}) {
        // 合并options，将传入的options覆盖到this.options上
        this.currentOptions = { ...this.options, closable: true, onlyOne: true, ...options };
        this.createToast(message);
        this.showToast();
    }
    //登录特定显示方法
    login(message, options = {}) {
        // 合并options，将传入的options覆盖到this.options上
        this.currentOptions = { ...this.options, closable: true, onlyOne: true, ...options };
        this.createToast(message);
        this.showToast();
    }
    // 确认取消模式
    confirm(message, options = {}) {
        // 合并 options
        this.currentOptions = {
            ...this.options,
            onlyOne: true,
            confirmMode: true,
            ...options
        };
        this.createToast(message);
        this.showToast();
    }
}
// 导出 PlusToast 实例，而不是类本身
export default new PlusToast();