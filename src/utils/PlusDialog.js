// 自定义 PlusDialog 插件
(function () {
    function PlusDialog(options) {
        this.options = {
            title: " ",//对话框标题
            content: '', // 对话框内容
            dialogTarget: "",
            onlyCloseBtn: false, //是否使用关闭按钮，如果有关闭按钮则只能使用关闭按钮
            onShow: function () { },
            onHide: () => { },
            ...options,
        };

        onShowCallback: null;//显示回调函数
        onHideCallback: null;//隐藏回调函数

        this.init();
    }

    PlusDialog.prototype = {
        constructor: PlusDialog,

        init: function () {
            this.addStyles();
            this.closeBtnArray = [];
        },

        addStyles: function () {
            if (!document.querySelector(`style[data-plus-dialog-css]`)) {
            const style = document.createElement('style');
            style.setAttribute('data-plus-dialog-css', '');
            style.innerHTML = `
            .plus-dialog-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: none;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                overflow: auto;
            }

            .plus-dialog-main-body {
                position: absolute;
                left: 50%; top: 50%;
                transform: translate(-50%, -50%);
                background-color: #fefefe;
                border-radius: 5px;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                z-index: 1009;
                width: auto;
                display:inline-flex;
                flex-direction: column;
                flex-wrap: nowrap;
            }
            
            .plus-dialog-container {
                box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
                padding: 7px;
            }

            .plus-dialog-header {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;
                justify-content: space-between;
                background-color: inherit;
                border-top-left-radius: inherit;
                border-top-right-radius: inherit;
                padding: 7px;
            }

            .plus-dialog-overlay .close-button-container {
                display: flex;
                justify-content: center;
                justify-self: flex-end;
                align-self: center;
            }
            
            .close-button-container > .close-button-plus-dialog {
                z-index: 2026; background-color: rgba(64, 66, 68, 0.87); padding: 0px; border-radius: 100%;
                color: #f3f1f0; border: none; width: 20px; height: 20px; line-height: 1; display: grid; 
                place-content: center; margin: 5px;
            }

            .plus-dialog-container.theme-red .plus-dialog-main-body {
                background-color: #f00;
            }
            `;
            document.head.appendChild(style);
            }
        },

        createElements: function () {
            const self = this;
            const dialogOverlays = document.querySelectorAll(".plus-dialog-overlay");
            dialogOverlays.forEach(dialogItem => {
                if(this.options.dialogTarget === "" && !dialogItem.dataset.dialogTarget) {
                    self.dialogOverlay = dialogItem;
                }else if(dialogItem.dataset.dialogTarget === this.options.dialogTarget){
                    self.dialogOverlay = dialogItem;
                }
            });
            //创建关闭按钮
            const closeBtnContainer = document.createElement("div");
                closeBtnContainer.className = "close-button-container";
                this.closeButton = document.createElement("button");
                this.closeButton.className = "close-button-plus-dialog";
                if(this.checkSVGSupport()){
                    this.closeButton.innerHTML = '<svg t="1724780707138" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5255" width="15" height="15"><path d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z" fill="currentColor" p-id="5256"></path><path d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z" fill="currentColor" p-id="5257"></path><path d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z" fill="currentColor" p-id="5258"></path><path d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z" fill="currentColor" p-id="5259"></path><path d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z" fill="currentColor" p-id="5260"></path><path d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z" fill="currentColor" p-id="5261"></path><path d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z" fill="currentColor" p-id="5262"></path><path d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z" fill="currentColor" p-id="5263"></path></svg>';
                }else {
                    this.closeButton.innerText = '×';
                }
                closeBtnContainer.appendChild(this.closeButton);
            //如果页面中不存在写好的dialogOverlay标签
            if(!this.dialogOverlay){
                // 创建遮罩层
                this.dialogOverlay = document.createElement('div');
                this.dialogOverlay.classList.add('plus-dialog-overlay');
                // 创建对话框内容
                this.mainBody = document.createElement('div');
                this.mainBody.classList.add('plus-dialog-main-body');
                this.header = document.createElement("div");
                this.header.className = "plus-dialog-header";
                if(this.options.title !==null && typeof this.options.title === 'string' && this.options.title.trim() !== '') {
                    const titleDiv = document.createElement("div");
                    titleDiv.innerText = this.options.title;
                    this.header.appendChild(titleDiv);
                }
                if(!this.header.contains(closeBtnContainer)) {
                    this.header.appendChild(closeBtnContainer);
                }
                this.container = document.createElement("div");
                this.container.className = "plus-dialog-container";
                this.container.innerHTML = this.options.content;
                this.mainBody.appendChild(this.header);
                this.mainBody.appendChild(this.container);
                // 将内容添加到遮罩层
                this.dialogOverlay.appendChild(this.mainBody);
                // 添加到页面
                document.body.appendChild(this.dialogOverlay);
            }
            //开始计算对话框中的所有标签元素，判断是否存在dataset.cancel为plus-dialog，存在则添加加到一个按钮数组
            const elementArray = this.dialogOverlay.querySelectorAll("*");
            elementArray.forEach(button => {
                if(button.dataset.cancel === "plus-dialog"){
                    this.closeBtnArray.push(button);
                }
            });
            //如果仅按钮可关闭为true
            if(this.options.onlyCloseBtn){
                const children = this.dialogOverlay.querySelector('.plus-dialog-main-body');
                const childrenContent = children.firstChild;
                if(this.closeBtnArray.length === 0 && !children.contains(closeBtnContainer)) {
                    children.insertBefore(closeBtnContainer, childrenContent);
                }
            }
        },

        bindEvents: function () {
            const self =  this;
            if(this.options.onlyCloseBtn) {
                if(this.closeButton){
                    this.closeButton.addEventListener('click', (e) => {
                        self.hide();
                    });
                }
            }else {
                // 点击遮罩层时关闭对话框
                this.dialogOverlay.addEventListener('click', (e) => {
                    if (e.target === this.dialogOverlay) {
                        this.hide();
                    }
                });
            }
            this.closeBtnArray.forEach(button => {
                button.addEventListener('click', function (event) {
                    self.hide();
                });
            });
        },

        // 设置显示回调函数
        onShow: function (callback) {
            this.onShowCallback = callback;
        },

        // 设置隐藏回调函数
        onHide: function (callback) {
            this.onHideCallback = callback;
        },

        show: function (options = {}) {
            // 合并配置选项
            this.options = Object.assign(this.options, options);

            this.createElements();
            this.bindEvents();
            this.dialogOverlay.style.display = 'flex';
            this.options.onShow();
            if (typeof this.onShowCallback === "function") {
                this.onShowCallback();
            }
        },

        hide: function () {
            this.dialogOverlay.style.display = 'none';
            this.options.onHide();
            if (typeof this.onHideCallback === "function") {
                this.onHideCallback();
            }
        },

        hideAfter: function (delay) {
            setTimeout(() => {
                this.hide();
            }, delay);
        },

        //检测是否支持svg
        checkSVGSupport() {
            // 检查SVG是否在DOM中可用
            if (typeof SVGRect !== 'function') {
                // 在这里执行相关的文字符号逻辑
                return false;
            } else {
                // 在这里执行相关的SVG逻辑
                return true;
            }
        }
    };
    window.PlusDialog = PlusDialog;
})();
export default new PlusDialog;