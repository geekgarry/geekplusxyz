"use strict"
var pd_global;
const PlusDrawer = {
    options: {
        side: 'left',
        dwWidth: 235, //drawer抽屉菜单宽度，也是左滑和右滑的x轴距离
        closeButton: true, //是否显示关闭按钮在drawer中,默认开启
        toggleAnimation: 'rotate(90deg)',
        duration: 300
    },
    init: function (options) {

        this.options = Object.assign({}, this.options, options);
        this.openClass = "leftOpen";
        // 添加CSS样式
        this.addStyles();
        //初始化Dom元素
        this.initDom();

        this.initEvents();
    },

    addStyles: function () {
        this.dwWidth = this.options.dwWidth;
        // 判断是否已存在相同内容的 style 标签
        if (!document.querySelector(`style[data-plus-drawer-css]`)) {
            const style = document.createElement('style');
            style.setAttribute('data-plus-drawer-css', '');
            style.innerHTML = `
            .plus-drawer-toggle {
                position: relative;
                /* background-color: #4CAF5000; */
                color: inherit;
                /* padding: 0px; */
                border: none;
                cursor: pointer;
            }
            
            .plus-drawer {
                position: fixed; 
                top: 0; 
                width: ${this.dwWidth}px; 
                height: 100%; 
                display: inline-flex;
                flex-wrap: nowrap;
                flex-direction: column;
                justify-content: flex-start;
                /* align-items: center; */
                background-color: inherit;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
                transition: transform 0.3s ease-in-out; 
                z-index: 100; 
            }
            
            .plus-drawer.left {
                left: -${this.dwWidth}px;
            }
            
            .plus-drawer.right {
                right: -${this.dwWidth}px;
            }
            
            .plus-drawer.leftOpen {
                transform: translateX(${this.dwWidth}px);
            }
            
            .plus-drawer.rightOpen {
                transform: translateX(-${this.dwWidth}px);
            }
            
            .plus-drawer-close {
                position: absolute; 
                top: 6px; 
                right: 6px; 
                background-color: rgba(221, 225, 229, 0.77);
                border: none; 
                font-size: 20px;
                cursor: pointer;
                line-height: 1;
                display: none;
            }

            .plus-drawer:hover .plus-drawer-close{
                display: block;
            }
            `;
            document.head.appendChild(style);
        }
    },

    initDom: function () {
        this.toggleButtons = document.querySelectorAll('.plus-drawer-toggle');
        this.drawers = document.querySelectorAll('.plus-drawer');
        if(this.options.side === 'right'){
            this.openClass = "rightOpen";
        }
        this.drawers.forEach(drawer => {
            drawer.classList.add(this.options.side);
            if (this.options.closeButton) {
                //const btnDiv = document.createElement("div");
                const closeButton = document.createElement("button");
                closeButton.className = "plus-drawer-close";
                closeButton.innerText = "×";
                //btnDiv.appendChild(closeButton);
                drawer.appendChild(closeButton);
            }
        });
    },

    initEvents: function () {
        const self = this;
        this.toggleButtons.forEach(button => {
            button.addEventListener('click', function (event) {
                // 阻止事件冒泡，防止触发 document 的点击事件
                event.stopPropagation();
                const target = document.querySelector(this.dataset.target);
                self.toggleDrawer(target);
                //self.toggleAnimation(this);
            });
        });

        this.drawers.forEach(drawer => {
            const closeButton = drawer.querySelector('.plus-drawer-close');
            if (closeButton) {
                closeButton.addEventListener('click', function (event) {
                    // 阻止事件冒泡
                    event.stopPropagation();
                    self.closeDrawer(drawer);
                });
            }
            // 点击 Drawer 以外的区域关闭 Drawer
            document.addEventListener('click', function (event) {
                if (!drawer.contains(event.target)) {
                    self.closeDrawer(drawer);
                }
            });
        });
    },

    toggleDrawer: function (drawer) {
        drawer.classList.toggle(this.openClass);
    },

    closeDrawer: function (drawer) {
        drawer.classList.remove(this.openClass);
    },

    toggleAnimation: function (button) {
        button.style.transition = `transform ${this.options.duration}ms ease`;
        button.style.transform = button.style.transform === this.options.toggleAnimation ? '' : this.options.toggleAnimation;
    }
};

// 将 PlusDrawer 对象暴露给全局对象
pd_global = (function () { return this || (0, eval)('this'); }());
if (typeof module !== "undefined" && module.exports) {
    module.exports = PlusDrawer;
} else if (typeof define === "function" && define.amd) {
    define(function () { return PlusDrawer; });
} else {
    !('PlusDrawer' in pd_global) && (pd_global.PlusDrawer = PlusDrawer);
}
