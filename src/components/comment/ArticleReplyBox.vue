<template>
    <div class="user_mesg">
        <form action="javascript:void(0);" id="msgform" class="fl">
            <div class="quick_liuyan_con">
                <div class="item">
                    <span><b class="star">*</b>姓名</span>
                    <div class="item-right">
                        <input type="text" class="v-ipt" value="" name="xingming" placeholder="姓名">
                    </div>
                    <div style="clear: both"></div>
                </div>
                <div class="item">
                    <span><b class="star">*</b>电话</span>
                    <div class="item-right">
                        <input type="text" value="" name="dianhua" maxlength="11" placeholder="请输入手机号">
                    </div>
                    <div style="clear: both"></div>
                </div>
                <div class="item">
                    <span>QQ/Email</span>
                    <div class="item-right">
                        <input type="text" value="" name="email" id="email">
                    </div>
                    <div style="clear: both"></div>
                </div>
                <div class="item">
                    <span>留言</span>
                    <div class="item-right">
                        <textarea name="neirong" id="Message" class="Message" cols="30" rows="10"></textarea>
                    </div>
                    <div style="clear: both"></div>
                </div>
                <div class="item">
                    <input name="url" value="" id='burl' type="hidden">
                    <input type="submit" class="btn-mesSubmit" id="imgBtnUp1"  value="提交留言">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
// 引入插件
import $ from 'jquery';
export default {

}
</script>

<style scoped>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
    margin:0;
    padding:0;
}
body, button, input, select, textarea {
    font-family:Microsoft YaHei, SimSun, Arial, Helvetica, sans-serif;
}
h1, h2, h3, h4, h5, h6 {
    font-size:100%;
}
address, cite, dfn, em, var {
    font-style:normal;
}
code, kbd, pre, samp {
    font-family:courier new, courier, monospace;
}
small {
    font-size:12px;
}
ul, ol {
    list-style:none;
}
a {
    text-decoration:none;
}
a:hover {
    text-decoration:underline;
}
sup {
    vertical-align:text-top;
}
sub {
    vertical-align:text-bottom;
}
legend {
    color:#000;
}
fieldset, img {
    border:0;
}
button, input, select, textarea {
    font-size:100%;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}
.col-main {
    float:left;
    width:100%;
    min-height:1px;
}
.col-sub, .col-extra {
    float:left;
}
.layout:after, .main-wrap:after, .col-sub:after, .col-extra:after {
    content:'\20';
    display:block;
    height:0;
    clear:both;
}
.layout, .main-wrap, .col-sub, .col-extra {
    zoom:1;
}
.hidden {
    display:none;
}
.invisible {
    visibility:hidden;
}
img {
    vertical-align:text-bottom;
}
.clear {
    display:block;
    height:0;
    overflow:hidden;
    clear:both;
}
.clearfix:after {
    content:'\20';
    display:block;
    height:0;
    clear:both;
}
.clearfix {
    *zoom:1;
}
.fl {
    float:left;
    display:inline;
}
.fr {
    float:right;
    display:inline;
}
html {
    overflow-y:scroll;
}
.user_mesg {
    width:980px;
    margin:40px auto;
}
.user_mesg input, .user_mesg select, .user_mesg textarea {
    border:1px solid #ccc;
    color:#666;
}
.user_mesg .star {
    color:#dd2218;
    display:inline-block;
    padding:0 5px;
    vertical-align:middle;
}
.user_mesg .star1 {
    color:#FFF;
    display:inline-block;
    padding:0 5px;
    vertical-align:middle;
}
.user_mesg .quick_liuyan_con {
    overflow:hidden;
}
.user_mesg .quick_liuyan_con p {
    margin-bottom:10px;
}
.user_mesg .item-right input {
    padding:5px 2px;
}
.user_mesg .btn-mesSubmit {
    float:left;
    line-height:36px;
}
.user_mesg textarea {
    font:14px"Microsoft Yahei";
    padding:5px;
    color:#666;
    resize:none;
    height:148px;
    width:365px;
    border-radius:5px;
    background-color:#faf8f9;
}
.user_mesg .item {
    margin-bottom:16px;
    _height:31px;
    text-align:left
}
.user_mesg .item span {
    display:block;
    float:left;
    width:128px;
    margin-right:10px;
    text-align:right;
    line-height:30px;
    font-size:16px;
    color:#333333;
}
.user_mesg .item:after {
    visibility:hidden;
    display:block;
    font-size:0;
    content:" ";
    clear:both;
    height:0;
}
.user_mesg .item input[type="text"] {
    padding:5px;
    width:202px;
    font-size:14px;
    border-radius:5px;
    background-color:#faf8f9;
}
.user_mesg .item input[type="text"]:focus {
    outline:1px solid #fa6104;
    border-color:#fa6104;
}
.user_mesg .item textarea:focus {
    outline:1px solid #fa6104;
    border-color:#fa6104;
}
.user_mesg .item input:disabled, .user_mesg .item textarea:disabled, .user_mesg .item select:disabled {
    background:#eee;
}
.user_mesg .item-right {
    float:left;
}
.user_mesg .item .btn-mesSubmit {
    display:block;
    width:180px;
    height:40px;
    border:1px solid #fa6104;
    background:#fa6104;
    color:#fff;
    border-radius:5px;
    line-height:30px;
    float:left;
    font-size:18px;
    margin-left:139px;
    _margin-left:37px;
    margin-right:30px;
    font-family:Microsoft Yahei;
    cursor:pointer
}
.user_mesg .item .btn-mesSubmit:hover {
    background:#fff;
    color:#fa6104;
}
.user_mesg .item .btn-mesSubmit:disabled {
    background:#ccc;
}
</style>