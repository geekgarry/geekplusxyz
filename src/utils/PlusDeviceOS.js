function isMobile() {
    const userAgent = navigator.userAgent
    return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(userAgent) || typeof window.orientation !== "undefined";
}

// function isMobile() {
//     // 判断是否为移动设备
//     return (
//         typeof window.orientation !== "undefined" || // 判断是否存在window.orientation属性，此属性在移动设备上一般存在
//         navigator.userAgent.indexOf('IEMobile') !== -1 || // 判断是否为Windows Phone
//         navigator.userAgent.indexOf('iPhone') !== -1 || // 判断是否为iPhone
//         navigator.userAgent.indexOf('Android') !== -1 && navigator.userAgent.indexOf('Mobile') !== -1 || // 判断是否为Android手机
//         navigator.userAgent.indexOf('BlackBerry') !== -1 || // 判断是否为BlackBerry
//         navigator.userAgent.indexOf('Opera Mini') !== -1 // 判断是否为Opera Mini浏览器
//     );
// }

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function isIOS() {
    let userAgent = navigator.userAgent
    return /(iPhone|iPad|iPod|iOS)/i.test(userAgent)
}

function isAndroid() {
    let userAgent = navigator.userAgent
    return /Android|adr/gi.test(userAgent)
}

function getDesktopOS() {
    const agent = navigator.userAgent.toLowerCase()
    const isMac = /macintosh|mac os x/i.test(navigator.userAgent)
    if (isMac) {
        //your code
        alert('这是mac系统')
    }
    if (agent.indexOf('win32') >= 0 || agent.indexOf('wow32') >= 0) {
        //your code
        alert('这是windows32位系统')
    }
    if (agent.indexOf('win64') >= 0 || agent.indexOf('wow64') >= 0) {
        //your code
        alert('这是windows64位系统')
    } else if (agent.indexOf('Linux') !== -1) {
        // Linux操作系统
        console.log('Linux');
    } else {
        console.log('Other OS');
    }
}

function browser() {
    const userAgent = navigator.userAgent;
    const appVersion = navigator.appVersion;
    const version = {
        isIos: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios 终端 
        //isMobile: !!userAgent.macth(/(iPhone|iPod|iPad|Android|ios)/i), // 是否移动终端
        isMobile: !!userAgent.match(/AppleWebKit.*Mobile.*/), // 是否移动终端
        isAndroid: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1, // android 终端端或者uc 浏览器
        // isAndroid: !!appVersion.match(/android/gi),
        isIphone: !!userAgent.indexOf('iPhone') > -1, // 是否为iPhone或则QQHD浏览器
        // isIphone:  !!appVersion.match(/iphone/gi);
        iPad: userAgent.indexOf('iPad') > -1, // 是否是iPad
        isWebApp: userAgent.indexOf('Safari') === -1, // 是否为Webapp，没有头部和底部
        isTrident: userAgent.indexOf('Trident') > -1, //IE内核
        isPresto: userAgent.inexOf('Presto') > -1, // opera 内核
        isWebKit: userAgent.indexOf('AppleWebkit') > -1, // 苹果谷歌内核
        isGecko: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') === -1, //火狐内核
        isWechat: !!userAgent.match(/micromessenger/gi),
        isWeiBo: !!userAgent.match(/weibo/gi),
        isQQ: !!userAgent.match(/qq/gi),
    }
    const language = (navigator.browserLanguage || navigator.language).toLowerCase();
    return {
        version, language
    }
}

module.exports = {
    isMobile,
    isIOS,
    isAndroid,
    getDesktopOS,
    browser
}