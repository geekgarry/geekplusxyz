// 自定义 PlusDialog 插件
(function () {
    function PlusDialog(options) {
        this.options = {
            //content: '', // 对话框内容
            onShow: function () { },
            onHide: () => { },
            ...options,
        };
        this.init();
    }

    PlusDialog.prototype = {
        constructor: PlusDialog,

        init: function () {
            this.createElements();
            this.bindEvents();
        },

        createElements: function () {
            // 创建遮罩层
            this.overlay = document.createElement('div');
            this.overlay.classList.add('plus-dialog-overlay');
            //   this.overlay = document.getElementsByClassName("plus-dialog-overlay")[0];
            this.overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      `;

            // 创建对话框内容
            this.content = document.createElement('div');
            this.content.classList.add('dialog-content');
            this.content.innerHTML = this.options.content;
            this.content.style.cssText = `
          display:inline-block;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          z-index: 1009;
      `;
            //   this.content = document.querySelector(".plus-dialog-main");
            //   this.content.style.width = 'auto';
            // 将内容添加到遮罩层
            this.overlay.appendChild(this.content);

            // 添加到页面
            document.body.appendChild(this.overlay);
        },

        bindEvents: function () {
            // 点击遮罩层时关闭对话框
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.hide();
                }
            });
        },

        show: function () {
            this.overlay.style.display = 'flex';
            this.options.onShow();
        },

        hide: function () {
            this.overlay.style.display = 'none';
            this.options.onHide();
        },

        hideAfter: function (delay) {
            setTimeout(() => {
                this.hide();
            }, delay);
        }
    };
    window.PlusDialog = PlusDialog;
})();
export default PlusDialog;