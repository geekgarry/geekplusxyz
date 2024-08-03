; (function () {
  // window.onload = function (){
  "use strict"
  //在这里使用需要判断样式是否不存在，不存在则开始添加到head中，避免了使用return导致函数出现终止执行问题
  if (!document.getElementById("copy-code-styles")) {
    //这里就是添加css样式表到head的主要代码
    const css = `
    .code-wrapper {
    position: relative;
    }

    .code-block {
    position: relative;
    }

    .copy {
    font-size: 13px;
    transition: color 0.1s;
    color: hsl(9.96deg 88.32% 47.38% / 97%);
    background: #dfe8e6;
    padding: 0 3px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    z-index: 1;
    }
    `;
    const style = document.createElement("style");
    style.id = "copy-code-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  // 获取<pre>元素
  const codeBlocks = document.querySelectorAll('pre');
  const codeContainer = document.querySelectorAll(".code-container");
  if (codeBlocks) {
    codeBlocks.forEach(function (codeBlock, cbIndex) {
      //这段注释的代码是给每一行添加行数，便于代码阅读和显示
      //判断当前代码块不存在行数显示标签ol时，才创建新的ol
      // if (!codeBlock.querySelectorAll('ol')) {
      //   // 创建新的ol元素
      //   const ol = document.createElement('ol');
      //   // 获取所有<code>标签中的文本行
      //   const codeLines = codeBlock.textContent.split('\n');
      //   // 移除<pre>中的所有内容
      //   codeBlock.innerHTML = '';
      //   // 为每行代码添加序号并重新添加到<pre>中
      //   codeLines.forEach((line, index) => {
      //     //const lineNumber = index + 1;
      //     const lineElement = document.createElement('li');
      //     lineElement.textContent = `${line}`;//${lineNumber}. 
      //     ol.appendChild(lineElement);
      //   });
      //   codeBlock.appendChild(ol);
      // }

      //判断当前代码块的索引序号是否小于或等于复制按钮容器数，为true表示没有新的代码块显示，返回终止函数
      if (codeContainer && cbIndex+1 <= codeContainer.length) {
        return;
      }

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
        } else {
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
        //一定时间后把按钮名改回来
        setTimeout(() => {
          this.textContent = "复制代码";
        }, 1800);
      });
    });
  }

  // if (document.getElementById("copy-code-styles")) return; // 避免重复添加样式
  //如果要使用这种方法，需要把上面的判断样式不存在中的添加css的代码转移到下面，
  //因为return;会终止当前函数，也就是下面的不会再执行了，所以添加到head的方法移到下面
  // };
}());