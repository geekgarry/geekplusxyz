/**
 *  对话框式弹出提示框插件 - PopoverTip
 *  使用方法：
 *    1. 引入该js文件
 *    2. 在需要使用弹出框的元素上添加 class "popover-trigger"，
 *       并设置 data-placement 属性指定弹出方向（可选，默认为 auto）
 *    3. 在触发元素后面添加弹出框内容，并包裹在 class 为 "popover-tip" 的元素中
 *  例如：
 *    <div class="popover-wrapper">
 *        <button class="popover-trigger" data-placement="right">触发弹出框</button>
 *        <div class="popover-tip">
 *            <p>弹出框内容</p>
 *        </div>
 *    </div>
 */
class PlusPopoverTip {
    constructor() {
        this.initStyles();
    }

    initStyles() {
        if (!document.querySelector(`style[data-plus-popover-tip-css]`)) {
            // 创建样式表并添加到文档头部
            const style = document.createElement('style');
            style.setAttribute('data-plus-popover-tip-css', '');
            style.innerHTML = `
                :root {
                    --plus-popover-tip-bg-color: #ecedee;
                }
                .plus-popover-wrapper {
                    position: relative;
                    display: inline-block;
                }
                .plus-popover-tip {
                    display: none;
                    position: absolute;
                    visibility: hidden; /* 隐藏，但会渲染 */
                    background-color: var(--plus-popover-tip-bg-color, #e9eaeb);
                    border: 1px solid var(--plus-popover-tip-bg-color, #e9eaeb);
                    border-radius: 4px;
                    padding: 10px;
                    z-index: 10;
                    width: fit-content;
                }
                .plus-popover-tip.show {
                    display: block;
                    visibility: visible;
                }
                .plus-popover-tip::before {
                    content: '';
                    position: absolute;
                    border: 6px solid transparent;
                    z-index: -1;
                }
                /* 箭头样式 */
                .plus-popover-tip.top::before {
                    border-top-color: inherit;
                    left: 50%;
                    top: 100%;
                    transform: translateX(-50%);
                }
                .plus-popover-tip.bottom::before {
                    border-bottom-color: inherit;
                    left: 50%;
                    bottom: 100%;
                    transform: translateX(-50%);
                }
                .plus-popover-tip.left::before {
                    border-left-color: inherit;
                    top: 50%;
                    left: 100%;
                    transform: translateY(-50%);
                }
                .plus-popover-tip.right::before {
                    border-right-color: inherit;
                    top: 50%;
                    right: 100%;
                    transform: translateY(-50%);
                }
            `;
            document.head.appendChild(style);
        }
    }

    // 初始化弹出框
    initPopoverTip() {
        const triggers = document.querySelectorAll('.plus-popover-trigger');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', function (event) {
                const popover = this.nextElementSibling || this.parentElement.querySelector('.plus-popover-tip');
                let placement = this.dataset.placement || 'auto';
                // 计算弹出框位置
                const triggerRect = this.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const windowWidth = window.innerWidth;

                // 先将弹出框显示出来，以便获取其尺寸
                popover.style.display = 'block';
                const popoverRect = popover.getBoundingClientRect();

                let top = 0;
                let left = 0;

                if (placement === 'auto') {
                    // 自动调整位置逻辑
                    const spaceAbove = triggerRect.top;
                    const spaceBelow = windowHeight - triggerRect.bottom;
                    const spaceLeft = triggerRect.left;
                    const spaceRight = windowWidth - triggerRect.right;

                    if (spaceAbove >= popoverRect.height && spaceAbove >= spaceBelow) {
                        placement = 'top';
                        top -= popoverRect.height + 10; // 8px 箭头偏移
                        // 水平居中
                        left += (triggerRect.width - popoverRect.width) / 2;
                    } else if (spaceBelow >= popoverRect.height) {
                        placement = 'bottom';
                        top += triggerRect.height + 10;
                        // 水平居中
                        left += (triggerRect.width - popoverRect.width) / 2;
                    } else if (spaceLeft >= popoverRect.width && spaceLeft >= spaceRight) {
                        placement = 'left';
                        left -= popoverRect.width + 10;
                        // 垂直居中
                        top += (triggerRect.height - popoverRect.height) / 2;
                    } else if (spaceRight >= popoverRect.width) {
                        placement = 'right';
                        left += triggerRect.width + 10;
                        // 垂直居中
                        top += (triggerRect.height - popoverRect.height) / 2;
                    } else {
                        // 如果空间不足，默认顶部弹出
                        placement = 'top';
                        top -= popoverRect.height + 10; // 8px 箭头偏移
                        // 水平居中
                        left += (triggerRect.width - popoverRect.width) / 2;
                    }
                } else {
                    // 非自动模式下，根据选择的位置调整
                    switch (placement) {
                        case 'top':
                            top -= popoverRect.height + 10;
                            // 水平居中
                            left += (triggerRect.width - popoverRect.width) / 2;
                            break;
                        case 'bottom':
                            top += triggerRect.height + 10;
                            // 水平居中
                            left += (triggerRect.width - popoverRect.width) / 2;
                            break;
                        case 'left':
                            left -= popoverRect.width + 10;
                            // 垂直居中
                            top += (triggerRect.height - popoverRect.height) / 2;
                            break;
                        case 'right':
                            left += triggerRect.width + 10;
                            // 垂直居中
                            top += (triggerRect.height - popoverRect.height) / 2;
                            break;
                    }
                }
                popover.style.top = `${top}px`;
                popover.style.left = `${left}px`;
                popover.classList.add('show', placement);

                // 点击其他区域关闭弹出框
                document.addEventListener('click', function closePopover(event) {
                    if (!trigger.contains(event.target) && !popover.contains(event.target)) {
                        popover.classList.remove('show', 'top', 'bottom', 'left', 'right');
                        document.removeEventListener('click', closePopover);
                    }
                });
                event.stopPropagation();
            });
        });
    }
}
export default new PlusPopoverTip();