;(function () {
// window.onload = function (){
  "use strict"
  var codeBlocks = document.querySelectorAll('pre');
  var codeContainer = document.querySelectorAll(".code-container");
  if(codeBlocks && codeContainer.length === 0){
    codeBlocks.forEach(function (codeBlock) {
      var copyButton = document.createElement('span');
      copyButton.className = 'copy';
      copyButton.textContent = '复制代码';
  
      // 创建包裹代码块和按钮的容器元素
      var container = document.createElement('div');
      container.className = 'code-container';
  
      // 将按钮添加到容器元素内
      container.appendChild(copyButton);
  
      // 将容器元素插入到代码块之前
      codeBlock.parentNode.insertBefore(container, codeBlock);
  
      // 设置容器元素样式，使其定位为相对定位（position: relative）
      container.style.position = 'relative';
  
      // 设置复制按钮样式，使其绝对定位于容器元素的右上角
      copyButton.style.position = 'absolute';
      copyButton.style.top = '3px';
      copyButton.style.right = '6px';
  
      copyButton.addEventListener('click', function () {
        // 获取代码块的文本内容textContent
        var code = codeBlock.innerText;
  
        if (navigator.clipboard && window.isSecureContext) {
          try {
            navigator.clipboard.writeText(code).then(() => {
              // 修改复制按钮文本为“已复制”
              this.textContent = '复制成功';
            }).catch(() => {
              this.textContent = '复制失败';
            });
          } catch (err) {
            this.textContent = '复制失败';
          }
        }else {
          // 创建一个临时的textarea元素，并将代码块的内容设置为其值
          var textarea = document.createElement('textarea');
          textarea.value = code;
          // 将textarea元素追加到body中
          document.body.appendChild(textarea);
          // 选中textarea中的文本
          textarea.select();
          // 执行复制操作
          document.execCommand('copy');
          // 移除临时的textarea元素
          document.body.removeChild(textarea);
          this.textContent = '复制成功';
        }
        //一定时间后吧按钮名改回来
        setTimeout(()=> {
          this.textContent="复制代码";
        },1800);
      });
    });
  }

  if (document.getElementById("copy-code-styles")) return; // 避免重复添加样式
  const css =`
  .code-wrapper {
    position: relative;
  }

  .code-block {
    position: relative;
  }

  .copy {
    font-size: 13px;
    transition: color 0.1s;
    color: hsl(165.03deg 10.98% 91.73% / 83%);
    background: #3357bfde;
    padding: 0 3px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    z-index: 1;
  }`;
  const style = document.createElement("style");
  style.id = "copy-code-styles";
  style.textContent = css;
  document.head.appendChild(style);
// };
}());