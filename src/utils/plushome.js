/**
 * 通用js方法封装处理
 * Copyright (c) 2019 GeekPlus
 */

const baseURL = process.env.VUE_APP_BASE_API

// 日期格式化
export function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        } else if (typeof time === 'string') {
            time = time.replace(new RegExp(/-/gm), '/');
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

// 表单重置
export function resetForm(refName) {
    if (this.$refs[refName]) {
        this.$refs[refName].resetFields();
    }
}

// 添加日期范围
export function addDateRange(params, dateRange) {
    var search = params;
    search.beginTime = "";
    search.endTime = "";
    if (null != dateRange && '' != dateRange) {
        search.beginTime = dateRange[0];
        search.endTime = dateRange[1];
    }
    return search;
}

// 回显数据字典
export function selectDictLabel(datas, value) {
    var actions = [];
    Object.keys(datas).some((key) => {
        if (datas[key].dictValue == ('' + value)) {
            actions.push(datas[key].dictLabel);
            return true;
        }
    })
    return actions.join('');
}

// 回显数据字典（字符串数组）
export function selectDictLabels(datas, value, separator) {
    var actions = [];
    var currentSeparator = undefined === separator ? "," : separator;
    var temp = value.split(currentSeparator);
    Object.keys(value.split(currentSeparator)).some((val) => {
        Object.keys(datas).some((key) => {
            if (datas[key].dictValue == ('' + temp[val])) {
                actions.push(datas[key].dictLabel + currentSeparator);
            }
        })
    })
    return actions.join('').substring(0, actions.join('').length - 1);
}

// 通用下载方法
export function download(fileName) {
    window.location.href = baseURL + "/common/download?fileName=" + encodeURI(fileName) + "&delete=" + true;
}

// 字符串格式化(%s )
export function sprintf(str) {
    var args = arguments, flag = true, i = 1;
    str = str.replace(/%s/g, function () {
        var arg = args[i++];
        if (typeof arg === 'undefined') {
            flag = false;
            return '';
        }
        return arg;
    });
    return flag ? str : '';
}

export function randomRGB() {//rgb颜色随机
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = '(' + r + ',' + g + ',' + b + ')';
    return rgb;
}
export function color16() {//十六进制颜色随机
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}
export {
    getRandomColor1,
    getRandomColor2,
    getRandomColor3,
    getRandomColor4,
    getRandomColor5
}
//颜色对象
function getRandomColor1() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.color = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.8)';
}
function getRandomColor2() {
    return '#' + (function (color) {
        return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
            && (color.length == 6) ? color : arguments.callee(color);
    })('');
}
//方法三
function getRandomColor3() {
    return '#' + Math.floor(Math.random() * 256).toString(10);
}
//方法四
function getRandomColor4() {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}
//方法五
function getRandomColor5() {
    return '#' + Math.random().toString(16).slice(2, 8)
}
//随机选固定颜色
export function someColor() {
    var colors = ['red', 'green', 'blue', "#ed2626", "#ed1f71", "#ed1fce", "#b31fed", "#8617ed", "#e05312",
        "#4917ed", "#331c82", "#1d228f", "#090a2b", "#1c75e3", "#159de6", "#d8e615", "#e3c116", "#e39816", "#e62f17",
        '#15cee6', '#15e6d5', '#15e6b2', '#15e66f', '#50e615', '#a4e615', "#a16b0d", "#e08d12", "#e07212"];

    return colors[Math.floor(Math.random() * colors.length)];
}

function gudingColor() {
    let colorList = ['#1882f8', '#f95757', '#FFBF11', '#11BBEC', '#FB7C26', '#46BE1A'];
    let colorMath = Math.floor(Math.random() * colorList.length + 1) - 1;
    let color;
    let i = 0;
    for (i; colorList.length > i; i++) {
        if (i == colorMath) {
            color = colorList[i]
        }
    }
}

export function getYearMonth(date) {
    // 将日期以空格隔开，即['2020-06-13', '17:10:09']
    date = (date + '').split(/[ ]+/);
    let result = [];
    let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    // 用截取出来的年月日进行正则表达式匹配
    reg.exec(date[0]);
    result.push(RegExp.$1);	//获取匹配到的第一个子匹配，即‘2020’
    result.push(RegExp.$2);
    result.push(RegExp.$3);
    return result;
}
export function formatNumber(num) {
    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
}
export function numFormatKWM(num, digits) {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E4, symbol: "W" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

//只截取时间的年月日
export function getOnlyYearMonthDay(val) {
    //let time ='2021-10-15 12:17:49'
    let appointDate = /\d{4}-\d{1,2}-\d{1,2}/g.exec(val)[0];
    //onsole.log(appointDate);   //2021-10-15
    return appointDate;
}
//判断是否为json对象
export function objectIsJson(obj) {
    if (typeof (data) == "object" &&
        Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length) {
        return true;
    }
    return false;
}
//判断json是否存在某个对象
export function checkObjectExists1(json, key) {
    return key in json;
}
export function checkObjectExists2(json, key) {
    return json.hasOwnProperty(key);
}
//这个方法不太严谨，当key存在，且又为undefined
export function checkObjectExists3(json, key) {
    return typeof json[key] !== 'undefined';
}
export function checkObjectExists4(json, key) {
    try {
        return json[key] !== null;
    } catch (error) {
        return false;
    }
}
/**
* 字符串是否含有html标签的检测
* @param htmlStr
*/
export function checkHtml(htmlStr) {
    var reg = /<[^>]+>/g;
    return reg.test(htmlStr);
}

export function getHtmlPlainText(html_str) {
    //提取字符串中的文字
    let re = new RegExp('<[^<>]+>', 'g')
    let text = html_str.replace(re, '')
    //或
    //var text = html_str.replace(/<[^<>]+>/g, "");
    return text
}

export function getHtmlValue(value) {
    //String s = "abc<span>def</span>gh<font>666</font>999";
    var reg = /<([^>]+)>([\d\D]*?)<\/\1>/g;
    //var reg2 = /(?=>)(.|\s)?(?=</?\w+[^<]>)/g;
    //var reg1= /(?<=<p>).*(?=</p>)/g;
    var result = value.replace(reg, '$2').split(/\s+/);    // '$2 ' 这里多加空格适配标签之间无空格情况
    result.pop();   // 去掉最后一个空格
    return result;
    // List<String> words = new ArrayList<>();
    // Matcher matcher = pattern.matcher(s);
    // while (matcher.find()){
    //     words.add(matcher.group(3));
    // }
}
//获取图片的原始尺寸
export function getImageNaturalDimensions(oImgSrc, callback) {
    var oImg = new Image();
    oImg.onload = function () {
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
    oImg.onerror = function () {
        callback(null);
    }
    oImg.src = oImgSrc;
}

//输入一个整数，返回他从1开始的随机数，需要加1，否则就是返回从0开始到length-1
export function someNumberCount(length) {
    return Math.floor(Math.random() * length) + 1;
}

//标准时间转换为时间戳
export function getDateTimeStamp(dateStr) {
    return Date.parse(dateStr.replace(/-/gi, "/"));
}

//dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上
//除以1000，就是十位数的时间戳。13位数的都是时间毫秒。dateTimeStamp
export function dateTimeAgo(dateStr) {
    var dateTimeStamp = Date.parse(dateStr.replace(/-/gi, "/"));
    var result = '';
    var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var halfamonth = day * 15;
    var month = day * 30;
    var year = day * 365;
    var now = new Date().getTime();   //获取当前时间毫秒
    // console.log(now)
    var diffValue = now - dateTimeStamp;//时间差

    if (diffValue < 0) {
        return;
    }
    var minC = diffValue / minute;  //计算时间差的分，时，天，周，月
    var hourC = diffValue / hour;
    var dayC = diffValue / day;
    var weekC = diffValue / week;
    var monthC = diffValue / month;
    var yearC = diffValue / year;

    if (yearC >= 1 && yearC <= 4) {
        result = " " + parseInt(yearC) + "年前"
    } else if (monthC >= 6 && monthC <= 12) {
        result = " " + "半年前"
    } else if (monthC >= 1 && monthC <= 6) {
        result = " " + parseInt(monthC) + "月前"
    } else if (weekC >= 1 && weekC < 5) {
        result = " " + parseInt(weekC) + "周前"
    } else if (dayC >= 1 && dayC <= 7) {
        result = " " + parseInt(dayC) + "天前"
    } else if (hourC >= 1 && hourC <= 24) {
        result = " " + parseInt(hourC) + "小时前"
    } else if (minC >= 1 && minC <= 60) {
        result = " " + parseInt(minC) + "分钟前"
    } else if (diffValue >= 0 && diffValue <= minute) {
        result = "刚刚"
    } else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate
    }
    return result;
}

//js判断一天的时间段
export function getTimeState() {
    // 获取当前时间
    let timeNow = new Date();
    // 获取当前小时
    let hours = timeNow.getHours();
    // 设置默认文字
    let state = ``;
    // 判断当前时间段
    if (hours >= 7 && hours < 11) {
        state = `早上好!`;
    } else if (hours >= 11 && hours < 14) {
        state = `中午好!`;
    } else if (hours >= 14 && hours < 18) {
        state = `下午好!`;
    } else if (hours >= 18 && hours < 24) {
        state = `晚上好!`;
    } else if (hours >= 0 && hours < 7) {
        state = `凌晨好!`;
    }
    return state;
}

//白天或晚上
export function isLightDay() {
    // 获取当前时间
    let timeNow = new Date();
    // 获取当前小时
    let hours = timeNow.getHours();
    // 设置默认文字
    var state = true;
    // 判断当前时间段,白天或黑夜
    if (hours >= 6 && hours < 18) {
        state = true;
    } else if (hours >= 18 && hours < 24) {
        state = false;
    } else if (hours >= 0 && hours < 6) {
        state = false;
    }
    return state;
}

export function backToTop() {
    let top = document.documentElement.scrollTop || document.body.scrollTop
    // 实现滚动效果
    const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 30
        if (top <= 0) {
            clearInterval(timeTop)
        }
    }, 10)
}

// 返回顶部动画效果
export function goToTop() {
    var u = navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    // 实现滚动效果
    let speed = scrollTop / 10 // 每次滚动多少 （步长值）
    const timeTop = setInterval(() => {
        if (isIOS) {
            if (document.documentElement.scrollTop !== 0) {
                document.documentElement.scrollTop -= speed // 不在顶部 每次滚动到的位置
            } else {
                clearInterval(timeTop) // 回到顶部清除定时器
            }
        }
        if (isAndroid) {
            if (document.body.scrollTop != 0) {
                document.body.scrollTop -= speed
            } else {
                clearInterval(timeTop)
            }
        }
    }, 20)
}
// 转换字符串，undefined,null等转化为""
export function praseStrEmpty(str) {
    if (!str || str == "undefined" || str == "null") {
        return "";
    }
    return str;
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 * @param {*} rootId 根Id 默认 0
 */
export function handleTree(data, id, parentId, children, rootId) {
    id = id || 'id'
    parentId = parentId || 'parentId'
    children = children || 'children'
    rootId = rootId || Math.min.apply(Math, data.map(item => { return item[parentId] })) || 0
    //对源数据深度克隆
    const cloneData = JSON.parse(JSON.stringify(data))
    //循环所有项
    const treeData = cloneData.filter(father => {
        let branchArr = cloneData.filter(child => {
            //返回每一项的子级数组
            return father[id] === child[parentId]
        });
        branchArr.length > 0 ? father.children = branchArr : '';
        //返回第一层
        return father[parentId] === rootId;
    });
    return treeData != '' ? treeData : data;
}

export function getNowDate() {
    var date = new Date();
    var sign2 = ":";
    var year = date.getFullYear() // 年
    var month = date.getMonth() + 1; // 月
    var day = date.getDate(); // 日
    var hour = date.getHours(); // 时
    var minutes = date.getMinutes(); // 分
    var seconds = date.getSeconds() //秒
    //var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
    //var week = weekArr[date.getDay()];
    // 给一位数的数据前面加 “0”
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (day >= 0 && day <= 9) {
        day = "0" + day;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    return year + "-" + month + "-" + day + " " + hour + sign2 + minutes + sign2 + seconds;
}

/*字符串转dom对象*/
export function loadXMLString(xmlStr) {
    var xmlDoc = null;
    try //Internet Explorer
    {
        // xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        // xmlDoc.async = "false";
        // xmlDoc.loadXML(xmlStr);
        // //alert('IE');
        // return xmlDoc;
        const range = document.createRange();
        xmlDoc = range.createContextualFragment(xmlStr);
    }
    catch (e) {
        try //Firefox, Mozilla, Opera, etc.
        {
            const parser = new DOMParser();
            xmlDoc = parser.parseFromString(xmlStr, "text/html");
            //alert('FMO');
            return xmlDoc;
        }
        catch (e) {
            // xmlDoc =e.message;
            const template = document.createElement('template');
            template.innerHTML = xmlStr;
            xmlDoc = template.content;
        }
    }
    return xmlDoc;
}

//添加复制代码按钮
export function copyCode() {
    //在这里使用需要判断样式是否不存在，不存在则开始添加到head中，避免了使用return导致函数出现终止执行问题
    if (!document.getElementById("copy-code-styles")) {
        //这里就是添加css样式表到head的主要代码
        const css = `
        .pre-all-wrapper {
        position: relative;
        }

        .pre-tool-container {
        position: absolute;
        /* 设置复制按钮所在tool容器样式，使其绝对定位于父容器元素的右上角 */
        top: 3px;
        right: 4px;
        }

        .pre-tool-container.ptc-hidden {
        display: none;
        }

        .copy-btn {
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
        /* 定义一个pre标签的hover鼠标悬停效果
        pre:hover .pre-tool-container {
        display: inline-block;
        background: red;
        color: blue;
        } */
        `;
        const style = document.createElement("style");
        style.id = "copy-code-styles";
        style.textContent = css;
        document.head.appendChild(style);
    }

    const codeBlocks = document.querySelectorAll('pre');
    //const codeContainer = document.querySelectorAll(".code-container");
    if (codeBlocks) {
        codeBlocks.forEach(function (codeBlock) {
            //这段注释的代码是给代码添加行数，便于结构化代码显示
            //判断当前代码块不存在行数显示标签ol时，才创建新的ol
            // if (!codeBlock.querySelectorAll('ol')) {
            //     // 创建新的ol元素
            //     const ol = document.createElement('ol');
            //     // 获取所有<code>标签中的文本行
            //     const codeLines = codeBlock.textContent.split('\n');
            //     // 移除<pre>中的所有内容
            //     codeBlock.innerHTML = '';
            //     // 为每行代码添加序号并重新添加到<pre>中
            //     codeLines.forEach((line, index) => {
            //         // const lineNumber = index + 1;
            //         const lineElement = document.createElement('li');
            //         lineElement.textContent = `${line}`;//${lineNumber}. 
            //         ol.appendChild(lineElement);
            //         // codeBlock.innerHTML = `<ol><li>${codeBlock.innerHTML.replace(/\n/g,`</li><li class="line">`)}</li></ol>`;
            //     });
            //     codeBlock.appendChild(ol);
            // }

            //var codeToolWrapper = codeBlock.querySelector('.code-tool-wrapper');

            var preAllWrapper = codeBlock.parentNode || codeBlock.parentElement;
            //判断代码块中是否已经有codeToolWrapper，有就return中断执行
            if (preAllWrapper.classList.contains("pre-all-wrapper")) {
                return;
            }

            // 创建包裹pre的容器
            const preAllWrapperNew = document.createElement('div');
            preAllWrapperNew.className = 'pre-all-wrapper';

            // 创建包裹一键复制按钮的容器元素
            var toolContainer = document.createElement('div');
            toolContainer.className = "pre-tool-container ptc-hidden";

            //创建一个复制按钮
            var copyButton = document.createElement('span');
            copyButton.className = "copy-btn";
            copyButton.textContent = '复制';
            // 将按钮添加到容器元素内
            toolContainer.appendChild(copyButton);

            // 将容器元素插入到代码块之前
            // codeBlock.parentNode.insertBefore(toolContainer, codeBlock);
            // 设置容器元素样式，使其定位为相对定位（position: relative）
            // container.style.position = 'relative';
            // codeBlock.appendChild(codeToolWrapper);
            // while (codeBlock.firstChild) {
            //     preAllWrapper.appendChild(container.firstChild);
            // }
            preAllWrapper.insertBefore(preAllWrapperNew, codeBlock);
            preAllWrapperNew.appendChild(toolContainer);
            preAllWrapperNew.insertBefore(codeBlock,toolContainer);

            copyButton.addEventListener('click', function (e) {
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
                    this.textContent = "复制";
                }, 1800);
            });

            //实现代码块pre悬停显示复制按钮等，包括桌面和移动端
            // 监听mouseenter和mouseleave事件
            preAllWrapperNew.addEventListener('mouseenter', function() {
                // 鼠标进入元素时的效果
                toolContainer.classList.remove('ptc-hidden'); // 'hover-class'是CSS中定义的类，包含hover样式
            });

            preAllWrapperNew.addEventListener('mouseleave', function() {
                // 鼠标离开元素时的效果
                toolContainer.classList.add('ptc-hidden');
            });

            // 为了适配触摸设备，可以监听触摸事件
            preAllWrapperNew.addEventListener('touchstart', function(e) {
                // 阻止默认的触摸行为，例如缩放
                //e.preventDefault();
                // 触摸开始时的效果
                toolContainer.classList.remove('ptc-hidden');
            });
            
            // 为了适配触摸设备，可以监听页面，当任意地方按下活触摸时
            document.addEventListener("touchstart", (e) => {
                //任意点击不是当前pre的位置
                if(!preAllWrapperNew.contains(e.target)){
                    toolContainer.classList.add('ptc-hidden');
                }
            });
        });
    }

    // if (document.getElementById("copy-code-styles")) return; // 避免重复添加样式
    //如果要使用这种方法，需要把上面的判断样式不存在中的添加css的代码转移到下面，
    //因为return;会终止当前函数，也就是下面的不会再执行了，所以添加到head的方法移到下面
};
/***********************------全局复制携带网站信息-------************************* */
export function addLink() {
    var body_element = document.body;
    var selection;
    var copytext;
    var pagelink;
    let range = new Array();
    selection = window.getSelection();
    for (let i = 0; i < selection.rangCount; i++) {
        range[i] = selection.getRangeAt(i)
    }
    if (window.clipboardData) { // Internet Explorer
        pagelink = "\r\n\r\n\r\n 本文为[梦极客园]的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明 原文链接: \r\n" + document.location.href + "";
        copytext = selection + pagelink;
        window.clipboardData.setData("Text", copytext);
        return false;
    } else {
        pagelink = "\r\n\r\n\r\n 本文为[梦极客园]的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明 原文链接: \r\n" + document.location.href + "";
        copytext = selection + pagelink;
        var newdiv = document.createElement('div');
        newdiv.style.position = 'absolute';
        newdiv.style.left = '-99999px';
        body_element.appendChild(newdiv);
        newdiv.innerText = copytext;
        selection.selectAllChildren(newdiv);
        window.setTimeout(function () {
            body_element.removeChild(newdiv);
        }, 0);
    }
}

/***********************------全局鼠标点击七彩效果-------************************* */
function clickEffect() {
    let balls = [];
    let longPressed = false;
    let longPress;
    let multiplier = 0;
    let width, height;
    let origin;
    let normal;
    let ctx;
    const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
    const pointer = document.createElement("span");
    pointer.classList.add("pointer");
    document.body.appendChild(pointer);

    if (canvas.getContext && window.addEventListener) {
        ctx = canvas.getContext("2d");
        updateSize();
        window.addEventListener('resize', updateSize, false);
        loop();
        window.addEventListener("mousedown", function (e) {
            pushBalls(randBetween(10, 20), e.clientX, e.clientY);
            document.body.classList.add("is-pressed");
            longPress = setTimeout(function () {
                document.body.classList.add("is-longpress");
                longPressed = true;
            }, 500);
        }, false);
        window.addEventListener("mouseup", function (e) {
            clearInterval(longPress);
            if (longPressed == true) {
                document.body.classList.remove("is-longpress");
                pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
                longPressed = false;
            }
            document.body.classList.remove("is-pressed");
        }, false);
        window.addEventListener("mousemove", function (e) {
            let x = e.clientX;
            let y = e.clientY;
            pointer.style.top = y + "px";
            pointer.style.left = x + "px";
        }, false);
    } else {
        console.log("canvas or addEventListener is unsupported!");
    }


    function updateSize() {
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.scale(2, 2);
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
        origin = {
            x: width / 2,
            y: height / 2
        };
        normal = {
            x: width / 2,
            y: height / 2
        };
    }
    class Ball {
        constructor(x = origin.x, y = origin.y) {
            this.x = x;
            this.y = y;
            this.angle = Math.PI * 2 * Math.random();
            if (longPressed == true) {
                this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
            } else {
                this.multiplier = randBetween(6, 12);
            }
            this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
            this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
            this.r = randBetween(8, 12) + 3 * Math.random();
            this.color = colours[Math.floor(Math.random() * colours.length)];
        }
        update() {
            this.x += this.vx - normal.x;
            this.y += this.vy - normal.y;
            normal.x = -2 / window.innerWidth * Math.sin(this.angle);
            normal.y = -2 / window.innerHeight * Math.cos(this.angle);
            this.r -= 0.3;
            this.vx *= 0.9;
            this.vy *= 0.9;
        }
    }

    function pushBalls(count = 1, x = origin.x, y = origin.y) {
        for (let i = 0; i < count; i++) {
            balls.push(new Ball(x, y));
        }
    }

    function randBetween(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    function loop() {
        ctx.fillStyle = "rgba(255, 255, 255, 0)";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.r < 0) continue;
            ctx.fillStyle = b.color;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
            ctx.fill();
            b.update();
        }
        if (longPressed == true) {
            multiplier += 0.2;
        } else if (!longPressed && multiplier >= 0) {
            multiplier -= 0.4;
        }
        removeBall();
        requestAnimationFrame(loop);
    }

    function removeBall() {
        for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
                balls.splice(i, 1);
            }
        }
    }
}
clickEffect();//调用点击器材绽放效果

/****************************-----鼠标特效-----*******************************/
var a_idx = 0;
// document.ready = function(callback) {
//     if (document.addEventListener) {
//         document.addEventListener('DOMContentLoaded', function() {
//             //document.removeEventListener('DOMContentLoaded', arguments.callee, false);
//             callback();
//             document.body.addEventListener("click", function (e) {
//                 var a = new Array("三民主义", "民族", "民权", "民生");
//                 var ii = document.createElement("span").text(a[a_idx]);
//                 a_idx = (a_idx + 1) % a.length;
//                 var x = e.pageX,
//                     y = e.pageY;
//                 ii.css({
//                     "z-index": 9999999,
//                     "top": y - 20,
//                     "left": x,
//                     "position": "absolute",
//                     "font-weight": "bold",
//                     "color": "#ff6651"
//                 });
//                 document.body.innerHTML += ii;
//                 ii.animate({
//                     "top": y - 180,
//                     "opacity": 0
//                 },
//                     1500,
//                     function () {
//                         ii.remove();
//                     });
//             });
//         }, false);
//     }else if (document.attachEvent) {// 兼容ie
//         document.attachEvent('onreadytstatechange', function() {
//             if (document.readyState == "complete") {
//                 //document.detachEvent("onreadystatechange", arguments.callee);
//                 callback();
//                 document.body.addEventListener("click", function (e) {
//                     var a = new Array("三民主义", "民族", "民权", "民生");
//                     var ii = document.createElement("span").text(a[a_idx]);
//                     a_idx = (a_idx + 1) % a.length;
//                     var x = e.pageX,
//                         y = e.pageY;
//                     ii.css({
//                         "z-index": 9999999,
//                         "top": y - 20,
//                         "left": x,
//                         "position": "absolute",
//                         "font-weight": "bold",
//                         "color": "#ff6651"
//                     });
//                     document.body.innerHTML += ii;
//                     ii.animate({
//                         "top": y - 180,
//                         "opacity": 0
//                     },
//                         1500,
//                         function () {
//                             ii.remove();
//                         });
//                 });
//             }
//         });
//     }
// }
// if (window.attachEvent) {
//     window.attachEvent("onload", clickTextEffect);//IE
// }
//function clickTextEffect(){
// window.onload = function () {
//     window.addEventListener("click", function (e) {
//         var a = new Array("三民主义", "民族", "民权", "民生");
//         var ii = document.createElement("span");
//         //console.log(ii)
//         ii.innerHTML=a[a_idx];
//         a_idx = (a_idx + 1) % a.length;
//         var x = e.clientX;
//         var y = e.clientY;
//         // ii.style.zIndex=9999999;
//         //ii.style.top=y-20+'px';
//         // ii.style.left=x;
//         // ii.style.position="absolute";
//         // ii.style.fontWeight="bold";
//         // ii.style.color="#ff6651";
//         ii.setAttribute("style","top:"+y-20+"px;left:"+x+"px;"+
//         "position:fixed;pointer-events:none;font-weight:bold;color:#ff6651;z-index:999999;");
//         console.log(ii)
//         // {
//         //     "z-index": 9999999,
//         //     "top": y - 20,
//         //     "left": x,
//         //     "position": "absolute",
//         //     "font-weight": "bold",
//         //     "color": "#ff6651"
//         // }
//         document.body.appendChild(ii);
//         ii.animate({
//             "top": y - 180,
//             "opacity": 0
//         },
//         1500,
//         function () {
//             ii.remove();
//         });
//     });
// }
// }
// clickTextEffect();

/***********************------全局复制携带网站信息-------************************* */
// document.body.oncopy = function(e) {
//     // 全局监听
// };
// $('.articl-content').oncopy = function(e) {
//     // 部分监听
// };
// window.addEventListener('copy', e => {
//     // 全局监听
// })
// window.addEventListener('copy',() => {
//swal("复制成功！", "若要转载请务必保留原文链接，申明来源，谢谢合作！By:梦极客园","success");
// addLink();
/* setTimeout( function () {
    //window.event.returnValue = false;
    var text = window.clipboardData.getData("text");
    if (text) {
    text = text + "\r\n本篇文章来源于google( www.google.com) 原文链接："+location.href;
    clipboardData.setData("text", text);
    }
    },100); */
// });
// export default plushome;