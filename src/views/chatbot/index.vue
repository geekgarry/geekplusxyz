<template>
    <div class="chat-app-container">
        <div class="chat-box-header" :style="{ top: chatBoxHeaderTop + `px` }">
            <div class="plus-drawer-toggle" data-target="#my-plus-drawer" data-side="left">
                <span class="gplus-icon">
                    <svg t="1723616704150" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        p-id="6277" width="24" height="24" class="icon">
                        <path data-v-00771e96=""
                            d="M844.8 883.2l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C883.2 864 864 883.2 844.8 883.2zM844.8 480l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C883.2 460.8 864 480 844.8 480zM435.2 883.2l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C480 864 460.8 883.2 435.2 883.2zM435.2 480l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C480 460.8 460.8 480 435.2 480z"
                            fill="currentColor" p-id="6278"></path>
                    </svg>
                </span>
            </div>
            <span>AI智能助手</span>
            <div @click="openMsg">
                <span class="gplus-icon">
                    <svg t="1723618948778" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        p-id="28131" width="24" height="24" class="icon">
                        <path data-v-00771e96=""
                            d="M512.001 928.997c230.524 0 418.076-187.552 418.075-418.077 0-230.527-187.552-418.077-418.075-418.077s-418.077 187.55-418.077 418.077c0 230.525 187.552 418.077 418.077 418.077zM512 301.88c28.86 0 52.26 23.399 52.26 52.263 0 28.858-23.399 52.257-52.26 52.257s-52.26-23.399-52.26-52.257c0-28.863 23.399-52.263 52.26-52.263zM459.74 510.922c0-28.86 23.399-52.26 52.26-52.26s52.26 23.399 52.26 52.26l0 156.775c0 28.86-23.399 52.26-52.26 52.26s-52.26-23.399-52.26-52.26l0-156.775z"
                            fill="currentColor" p-id="28132"></path>
                    </svg>
                </span>
            </div>
        </div>
        <div class="chat-main-content" v-if="mobileChatdisplay">
            <div class="big-chat-box" id="big-chat-box" :style="{ height: chatBoxHeight + 'px' }">
                <div v-for="(item, index) in msgList" v-bind:key="index" class="list-chat-msg">
                    <div v-show="item.time" class="chat-date-time">{{ getChatDateTime(item.time) }}</div>
                    <div :class="item && item.align === 'right' ? 'list-chat-item-right' : 'list-chat-item-left'">
                        <span>
                            <img class="chat-user-icon" :src="item.align == 'right' ? '/imgs/mai.png' : '/imgs/logo.png'" :alt="item.align == 'right' ? '麦壳' : '极客普拉斯'" />
                        </span>
                        <span class="list-chat-item-content">
                            <!-- <div class="chat-msg-media-data" v-if="checkObjectExistsJson(item, 'mediaDiv')">
                                <span v-html="item.mediaDiv"></span>
                            </div> -->
                            <div v-if="item.type === 'text'">
                                <!-- <span v-if="item && item.align == 'right'" v-text="item.text"></span> -->
                                <span v-html="item.align === 'right' ? item.text : renderMdHtml(item.text)"></span>
                            </div>
                            <div v-else-if="item.type === 'image'">
                                <span>{{item.text}}</span>
                                <div class="chat-msg-media-data">
                                    <img :src="item.mediaData" :alt="item.mediaFileName" />
                                </div>
                                <div>{{item.mediaFileName}}</div>
                            </div>
                            <div v-else>
                                <span>{{item.text}}</span>
                                <div class="chat-msg-media-data">
                                    <object :data="item.mediaData" style="width: 95%;" height="100%">
                                        <embed :src="item.mediaData" style="width: 100%;" >
                                        <audio controls height="50" width="100%" :data="item.mediaData">
                                        </audio>
                                        <video controls height="50" width="100%" :data="item.mediaData">
                                            <source :src="item.mediaData" type="audio/mpeg">
                                            <source :src="item.mediaData" type="audio/ogg">
                                            <source :src="item.mediaData" type="video/mp4">
                                            <source :src="item.mediaData" type="video/ogg">
                                        </video>
                                        <a :href="item.mediaData" target="_blank">查看</a>
                                    </object>
                                </div>
                                <div>{{item.mediaFileName}}</div>
                            </div>
                            <div v-show="item.link"><a :href="item.link" target="_blank">链接</a></div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="chat-box-footer">
                <!-- <div class="chat-box-footer-btn">
                    <span class="chat_btn_left">
                        <a class="btn btn-default" href="#" role="button" @click="startAndStopRecording">{{recordingTxt}}
                        </a>
                    </span>
                    <textarea placeholder="请输入聊天内容" v-model="inputChatMsg" id="plus-input-content-text" class="form-control onlyoneline" 
                    :disabled="statusDisabled" :autofocus="false" rows="1" @keydown="keyDownEvent" @input="textInputEvent" @paste.capture.passive="pastingData"></textarea>
                    <span class="chat_btn_right">
                        <a class="btn btn-default" href="#" role="button" @click="handleMsg">发送
                        </a>
                    </span>
                </div> -->
                <div class="input-container">
                    <div class="button-container">
                        <button type="button" class="send-button" @click="startAndStopRecording">
                            {{ recordingTxt }}
                        </button>
                    </div>
                    <div class="textarea-container">
                        <textarea placeholder="请输入消息..." class="plus-text-input onlyoneline" id="plus-input-content-text"
                            name="inputChatMsg" autocomplete="off" rows="1" v-model="inputChatMsg" :autofocus="false"
                            @input="textInputEvent" @paste.capture.passive="pastingData"></textarea>
                        <label for="file-upload" class="upload-button">
                            <svg t="1720279770597" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="10853" id="mx_n_1720279770598" width="20"
                                height="20">
                                <path d="M0 0h1024v1024H0z" fill="currentColor" opacity=".01" p-id="10854"></path>
                                <path
                                    d="M533.312 128a21.312 21.312 0 0 1 21.376 21.312v320h320a21.312 21.312 0 0 1 21.312 21.376v42.624a21.312 21.312 0 0 1-21.312 21.376h-320v320a21.312 21.312 0 0 1-21.376 21.312h-42.624a21.312 21.312 0 0 1-21.376-21.312v-320h-320A21.312 21.312 0 0 1 128 533.312v-42.624a21.312 21.312 0 0 1 21.312-21.376h320v-320A21.312 21.312 0 0 1 490.688 128h42.624z"
                                    fill="currentColor" fill-opacity=".7" p-id="10855"></path>
                            </svg>
                            <input type="file" id="file-upload" ref="file-upload-ref" accept="*"
                                @change="uploadDataFileEvent($event)" style="display: none;">
                        </label>
                    </div>
                    <div class="button-container">
                        <button type="button" class="send-button" @click="handleMsg" :disabled="statusDisabled">
                            发送
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <!-- <div class="chat-box-header">
                <div @click="toggleMenu">
                    <span class="gplus-icon">
                        <svg t="1723616704150" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6277" width="24" height="24" class="icon"><path data-v-00771e96="" d="M844.8 883.2l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C883.2 864 864 883.2 844.8 883.2zM844.8 480l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C883.2 460.8 864 480 844.8 480zM435.2 883.2l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C480 864 460.8 883.2 435.2 883.2zM435.2 480l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C480 460.8 460.8 480 435.2 480z" fill="currentColor" p-id="6278"></path></svg>
                    </span>
                </div>
                <span>AI聊天助手</span>
                <div @click="openMsg">
                    <span class="gplus-icon">
                        <svg t="1723618948778" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28131" width="24" height="24" class="icon"><path data-v-00771e96="" d="M512.001 928.997c230.524 0 418.076-187.552 418.075-418.077 0-230.527-187.552-418.077-418.075-418.077s-418.077 187.55-418.077 418.077c0 230.525 187.552 418.077 418.077 418.077zM512 301.88c28.86 0 52.26 23.399 52.26 52.263 0 28.858-23.399 52.257-52.26 52.257s-52.26-23.399-52.26-52.257c0-28.863 23.399-52.263 52.26-52.263zM459.74 510.922c0-28.86 23.399-52.26 52.26-52.26s52.26 23.399 52.26 52.26l0 156.775c0 28.86-23.399 52.26-52.26 52.26s-52.26-23.399-52.26-52.26l0-156.775z" fill="currentColor" p-id="28132"></path></svg>
                    </span>
                </div>
            </div> -->
            <!--事件的native修饰符只能在UI组件或自定义组件上使用，原生的html标签是不能使用的,入div，input等-->
            <div class="container-fluid">
                <div class="row row-no-gutters">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-md-offset-2 col-lg-offset-3">
                        <div class="big-chat-box" id="big-chat-box-desktop" :style="{ height: chatBoxHeight + 'px' }">
                            <!-- :style="{textAlign: item.align}" -->
                            <div v-for="(item, index) in msgList" :key="index" class="list-chat-msg">
                                <div v-show="item.time" class="chat-date-time">{{ getChatDateTime(item.time) }}</div>
                                <div :class="item && item.align === 'right' ? 'list-chat-item-right' : 'list-chat-item-left'">
                                    <span>
                                        <img class="chat-user-icon" :src="item.align == 'right' ? '/imgs/mai.png' : '/imgs/logo.png'" :alt="item.align == 'right' ? '麦壳' : '极客普拉斯'" />
                                    </span>
                                    <span class="pc-chat-item-span">
                                        <!-- <div class="chat-msg-media-data" v-if="checkObjectExistsJson(item, 'mediaDiv')">
                                            <span v-html="item.mediaDiv"></span>
                                        </div> -->
                                        <div v-if="item.type === 'text'">
                                            <!-- <span v-if="item.align == 'right'" v-text="item.text"></span> -->
                                            <span v-html="item.align === 'right' ? item.text : renderMdHtml(item.text)"></span>
                                        </div>
                                        <div v-else-if="item.type === 'image'">
                                            <span>{{item.text}}</span>
                                            <div class="chat-msg-media-data">
                                                <img :src="item.mediaData" :alt="item.mediaFileName" />
                                            </div>
                                            <div>{{item.mediaFileName}}</div>
                                        </div>
                                        <div v-else>
                                            <span>{{item.text}}</span>
                                            <div class="chat-msg-media-data">
                                                <object :data="item.mediaData" style="width: 95%;" height="100%">
                                                    <embed :src="item.mediaData" style="width: 100%;" >
                                                    <audio controls height="50" width="100%" :data="item.mediaData">
                                                    </audio>
                                                    <video controls height="50" width="100%" :data="item.mediaData">
                                                        <source :src="item.mediaData" type="audio/mpeg">
                                                        <source :src="item.mediaData" type="audio/ogg">
                                                        <source :src="item.mediaData" type="video/mp4">
                                                        <source :src="item.mediaData" type="video/ogg">
                                                    </video>
                                                    <a :href="item.mediaData" target="_blank">查看</a>
                                                </object>
                                            </div>
                                            <div>{{item.mediaFileName}}</div>
                                        </div>
                                        <div v-show="item.link"><a :href="item.link" target="_blank">链接</a></div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="chat-box-footer">
                            <!-- <div class="input-group search-input-group">
                                <textarea id="plus-input-content-text" name="inputChatMsg" autocomplete="off" :autofocus="false" v-model="inputChatMsg" :disabled="statusDisabled" class="form-control onlyoneline" 
                                  placeholder="请输入聊天内容" rows="1" v-on:keydown="keyDownEvent" v-on:input="textInputEvent" v-on:paste.capture.passive="pastingData"></textarea>
                                <span class="input-group-addon">
                                    <button type="button" @keydown.enter="handleMsg" @click="handleMsg" :disabled="statusDisabled">
                                        <span class="glyphicon glyphicon-send"></span>
                                    </button>
                                </span>
                            </div> -->
                            <div class="input-container">
                                <div class="textarea-container">
                                    <textarea placeholder="请输入消息..." class="plus-text-input onlyoneline"
                                        id="plus-input-content-text" name="inputChatMsg" autocomplete="off" rows="1"
                                        :autofocus="false" v-model="inputChatMsg" v-on:keydown="keyDownEvent"
                                        v-on:input="textInputEvent" v-on:paste.capture.passive="pastingData"></textarea>
                                    <label for="file-upload" class="upload-button">
                                        <!-- <svg t="1720277146152" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5064" width="20" height="20">
                                            <path d="M899.437541 570.198493 568.89122 570.198493l0 330.508459c0 32.216749-26.103518 58.397015-58.341756 58.397015-32.216749 0-58.283428-26.180266-58.283428-58.397015L452.266036 570.198493 121.718691 570.198493c-32.217772 0-58.359152-26.121937-58.359152-58.340733s26.14138-58.284451 58.359152-58.284451l330.547345 0L452.266036 122.969683c0-32.17991 26.066679-58.340733 58.283428-58.340733 32.238238 0 58.341756 26.160823 58.341756 58.340733L568.89122 453.573309l330.547345 0c32.218796 0 58.359152 26.065655 58.359152 58.284451S931.656337 570.198493 899.437541 570.198493" p-id="5065" fill="#484747"></path>
                                        </svg> -->
                                        <svg t="1720279770597" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="10853" id="mx_n_1720279770598"
                                            width="20" height="20">
                                            <path d="M0 0h1024v1024H0z" fill="currentColor" opacity=".01" p-id="10854">
                                            </path>
                                            <path
                                                d="M533.312 128a21.312 21.312 0 0 1 21.376 21.312v320h320a21.312 21.312 0 0 1 21.312 21.376v42.624a21.312 21.312 0 0 1-21.312 21.376h-320v320a21.312 21.312 0 0 1-21.376 21.312h-42.624a21.312 21.312 0 0 1-21.376-21.312v-320h-320A21.312 21.312 0 0 1 128 533.312v-42.624a21.312 21.312 0 0 1 21.312-21.376h320v-320A21.312 21.312 0 0 1 490.688 128h42.624z"
                                                fill="currentColor" fill-opacity=".7" p-id="10855"></path>
                                        </svg>
                                        <input type="file" id="file-upload" ref="file-upload-ref" accept="*"
                                            @change="uploadDataFileEvent($event)" style="display: none;">
                                    </label>
                                </div>
                                <div class="button-container">
                                    <button type="button" class="send-button" @keydown.enter="handleMsg"
                                        @click="handleMsg" :disabled="statusDisabled">
                                        <span class="glyphicon glyphicon-send"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="my-plus-drawer" class="plus-drawer">
            <div class="menu-drawer-header">
                <div class="menu-btn plus-drawer-toggle" data-target="#my-plus-drawer" data-side="left">
                    <span class="gplus-icon">
                        <svg t="1723619078616" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            p-id="29225" width="24" height="24" class="icon">
                            <path data-v-00771e96=""
                                d="M382.083 103.466c-63.464-1.533-127.026-1.561-190.487 0.056-53.88 1.372-85.947 33.283-87.526 87.481-1.798 61.735-1.627 123.592-0.105 185.34 1.405 57.042 33.666 88.862 89.987 91.055 30.847 1.2 61.778 0.214 92.673 0.214v0.084c29.177 0 58.354 0.006 87.532-0.01 3.43 0 6.875 0.043 10.292-0.216 48.928-3.716 81.464-31.602 83.804-80.677 3.181-66.767 3.15-133.886 0.34-200.68-2.194-52.18-34.273-81.385-86.51-82.647z m0.727 223.135c-1.853 39.629-13.76 53.399-51.558 55.395-30.725 1.622-61.703 1.765-92.399-0.15-32.22-2.01-46.292-15.941-48.33-48.552-2.025-32.392-2.108-65.126 0.084-97.498 2.219-32.758 16.121-45.288 49.214-46.935 29.033-1.446 58.217-1.13 87.29-0.204 42.456 1.353 53.884 13.188 55.727 55.78 0.592 13.67 0.092 27.387 0.092 41.083-0.02 13.695 0.518 27.415-0.12 41.081zM468.883 657.431c-4.914-60.1-41.873-98.957-102.147-102.763-52.991-3.346-106.533-3.413-159.516-0.013-61.945 3.977-100.908 45.842-103.178 107.37-1.834 49.716-1.806 99.605 0 149.324 2.232 61.528 42.13 104.63 102.68 108.128 53.034 3.063 106.506 2.894 159.565 0.06 58.998-3.15 97.39-42.913 102.53-102.565 2.2-25.551 0.367-51.451 0.367-77.191l0.08-0.001c0-27.46 1.85-55.071-0.381-82.349zM382.676 782.81c-2.191 34.758-12.473 47.623-45.629 49.797-34.02 2.23-68.343 1.291-102.466-0.024-25.612-0.987-42.22-15.758-43.434-41.638-1.677-35.784-2.509-71.85 0.088-107.519 2.16-29.666 15.98-40.487 47.82-41.924 30.705-1.386 61.557-1.324 92.274-0.118 37.12 1.456 48.88 13.204 51.308 49.153 1.033 15.313 0.173 30.753 0.173 46.135 0.027 15.382 0.832 30.817-0.134 46.138zM638.575 466.817c66.85 2.183 133.883 2.232 200.728-0.029 48.107-1.626 78.502-34.315 80.95-82.898 1.64-32.522 0.314-65.193 0.314-97.798h0.18c0-29.173 0.002-58.345-0.006-87.518 0-3.433 0.093-6.874-0.12-10.295-3.237-51.777-32.66-83.203-84.46-84.65-65.155-1.824-130.44-1.78-195.6 0.026-49.255 1.363-81.717 31.976-83.38 80.049-2.312 66.843-2.187 133.87-0.181 200.732 1.448 48.3 33.485 80.811 81.575 82.38zM741.2 188.405c93.184 0.015 94.452 1.293 94.464 95.22 0.013 96.831-1.987 98.873-96.789 98.868-94.393-0.003-95.62-3.049-97.83-98.688-2.4-103.803 20.564-97.124 100.155-95.4zM920.572 648.267c-1.48-60.79-30.968-91.401-92.039-94.662-29.17-1.558-58.49-0.269-87.743-0.269v0.082c-30.974 0-61.945-0.023-92.918 0.034-3.43 0.005-6.883 0.302-10.287 0.754-49.282 6.534-79.299 35.872-80.674 84.647a3477.609 3477.609 0 0 0 0.02 196.134c1.362 48.254 32.605 80.758 80.595 84.46 35.921 2.77 72.291 2.164 108.32 0.313 28.821-1.48 47.916-22.114 46.583-45.146-1.247-21.556-18.569-37.536-46.166-40.082-18.794-1.733-37.942 0.3-56.714-1.548-33.033-3.254-45.768-15.985-47.505-49.427a897.595 897.595 0 0 1 0.012-92.884c1.76-33.962 14.537-47.378 47.042-49.022 32.61-1.65 65.425-1.604 98.043-0.06 33.31 1.575 45.544 14.444 48.07 47.957 1.42 18.832-0.68 37.952 1.06 56.734 2.577 27.82 18.189 42.528 42.153 42.564 24.261 0.037 40.096-14.295 41.679-42.527 1.828-32.595 1.266-65.38 0.47-98.052z"
                                p-id="29226" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div class="menu-btn">
                    <a href="javascript:;">
                        <span class="gplus-icon">
                            <svg t="1723621240837" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="82245" width="24" height="24" class="icon">
                                <path data-v-00771e96=""
                                    d="M512 0C229.248 0 0 229.248 0 512c0 282.816 229.248 512 512 512s512-229.184 512-512C1024 229.248 794.752 0 512 0zM512 960c-247.36 0-448-200.512-448-448 0-247.424 200.64-448 448-448s448 200.576 448 448C960 759.488 759.36 960 512 960z"
                                    p-id="82246" fill="currentColor"></path>
                                <path data-v-00771e96=""
                                    d="M645.632 544.96c60.224-41.792 99.904-111.232 99.904-189.824 0-127.424-103.68-231.04-231.104-231.04s-231.104 103.616-231.104 231.04c0 78.656 39.616 148.032 99.904 189.824-126.656 51.968-216.192 176.384-216.192 321.408 0 18.624 15.04 33.6 33.6 33.6 18.496 0 33.536-14.976 33.536-33.6 0-154.432 125.696-280.128 280.256-280.128s280.256 125.696 280.256 280.128c0 18.624 15.04 33.6 33.536 33.6 18.56 0 33.536-14.976 33.536-33.6C861.76 721.344 772.224 596.864 645.632 544.96zM350.528 355.072c0-90.368 73.472-163.968 163.904-163.968s163.968 73.536 163.968 163.968c0 90.432-73.536 163.904-163.968 163.904S350.528 445.504 350.528 355.072z"
                                    p-id="82247" fill="currentColor"></path>
                            </svg>
                        </span>
                    </a>
                </div>
                <div class="menu-btn">
                    <a href="/" target="_blank">
                        <span class="gplus-icon">
                            <svg t="1723621020266" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="76353" width="24" height="24" class="icon">
                                <path data-v-00771e96=""
                                    d="M824 405.4L530.7 192.7c-1-0.7-2.1-0.9-3.2-1.4l-0.4-0.2c-3-1.7-6.3-2.8-9.7-3.4-1.7-0.3-3.4-0.2-5.2-0.2-1.7 0-3.4-0.1-5.2 0.2-3.4 0.6-6.8 1.8-9.8 3.5l-0.2 0.1c-1.1 0.6-2.2 0.8-3.2 1.5L200.6 405.4c-13.8 9.4-17.3 28-7.7 41.5 9.5 13.6 28.5 16.9 42.3 7.6l1.2-0.9 12.5-9.1v229.7c0 38.4 31.9 69.6 70.9 69.6h152v-13.3h0.3c0-0.6-0.3-1-0.3-1.6V609.6c0-22 18.1-39.8 40.5-39.8s40.5 17.8 40.5 39.8v119.3c0 0.6-0.3 1-0.3 1.6h0.3v13.3h152c39.1 0 70.9-31.2 70.9-69.6V444.6l12.4 9c13.6 9.7 32.6 6.8 42.5-6.5s7-32-6.6-41.7zM715 674.2c0 5.5-4.5 9.9-10.1 9.9h-91.2v-74.6c0-54.9-45.4-99.4-101.3-99.4S411 554.7 411 609.6v74.6h-91.2c-5.6 0-10.1-4.5-10.1-9.9V400.5l202.7-146.9 202.7 147-0.1 273.6z"
                                    fill="currentColor" p-id="76354"></path>
                                <path data-v-00771e96=""
                                    d="M511 1022C228.8 1022 0 793.2 0 511S228.8 0 511 0s511 228.8 511 511-228.8 511-511 511z m0-92.9c230.9 0 418.1-187.2 418.1-418.1S741.9 92.9 511 92.9 92.9 280.1 92.9 511 280.1 929.1 511 929.1z"
                                    fill="currentColor" p-id="76355"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
            <div class="menu-drawer-container">
                <!-- <ul><li><a href="/" target="_blank">首页</a></li><li>未知</li></ul> -->
                <div class="history-msg-list">
                    <div class="history-msg-list-header">
                        历史消息：
                        <a href="javascript:;" @click="getAllHistoryChatMsg(chatDataPrompt.username)">
                            <span class="gplus-icon">
                                <svg t="1723963058338" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="4576" width="20" height="20">
                                    <path
                                        d="M710.4 249.6l76.8-76.8c2.133333-2.133333 4.266667-4.266667 6.4-2.133333 2.133333 0 2.133333 4.266667 2.133333 6.4v204.8c0 4.266667-2.133333 8.533333-4.266666 10.666666s-6.4 4.266667-10.666667 4.266667h-204.8c-4.266667 0-6.4 0-6.4-2.133333s0-4.266667 2.133333-6.4l76.8-76.8c-42.666667-27.733333-87.466667-42.666667-136.533333-42.666667-44.8 0-85.333333 10.666667-121.6 32s-66.133333 51.2-87.466667 87.466667-32 78.933333-32 121.6h-85.333333c0-44.8 8.533333-87.466667 25.6-128 17.066667-40.533333 40.533333-74.666667 70.4-104.533334s64-53.333333 104.533333-70.4c40.533333-17.066667 83.2-25.6 128-25.6 70.4 2.133333 136.533333 25.6 196.266667 68.266667z m44.8 262.4h85.333333c0 44.8-8.533333 87.466667-25.6 128-17.066667 40.533333-40.533333 74.666667-70.4 104.533333-29.866667 29.866667-64 53.333333-104.533333 70.4-40.533333 17.066667-83.2 25.6-128 25.6-72.533333 0-138.666667-21.333333-198.4-66.133333l-76.8 76.8c-2.133333 2.133333-4.266667 4.266667-6.4 2.133333-2.133333 0-2.133333-4.266667-2.133333-6.4V642.133333c0-4.266667 2.133333-8.533333 4.266666-10.666666 2.133333-2.133333 6.4-4.266667 10.666667-4.266667h204.8c4.266667 0 6.4 0 6.4 2.133333s0 4.266667-2.133333 6.4l-74.666667 74.666667c42.666667 29.866667 87.466667 42.666667 136.533333 42.666667 44.8 0 85.333333-10.666667 121.6-32 38.4-21.333333 66.133333-51.2 87.466667-87.466667s32-76.8 32-121.6z"
                                        p-id="4577" fill="currentColor"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div class="history-msg-list-container">
                        <div class="history-msg-list-item" v-for="(item, index) in historyChatMsgList" :key="index">
                            <span class="text-ellipsis" @click="getOneHistoryChatMsg(item.historyMsgKey)">
                                {{ JSON.parse(item.historyMsg).text.substring(0,45) }}
                            </span>
                            <span class="history-msg-list-item-close"
                                @click="deleteOneHistoryChatMsg(item.historyMsgKey)">
                                <svg t="1723863901472" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5956" width="20" height="20">
                                    <path
                                        d="M572.16 512l183.466667-183.04a42.666667 42.666667 0 1 0-60.586667-60.586667L512 451.84l-183.04-183.466667a42.666667 42.666667 0 0 0-60.586667 60.586667l183.466667 183.04-183.466667 183.04a42.666667 42.666667 0 0 0 0 60.586667 42.666667 42.666667 0 0 0 60.586667 0l183.04-183.466667 183.04 183.466667a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586667z"
                                        fill="currentColor" p-id="5957"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="menu-tool">
                    聊天模式：
                    <label class="switch">
                        <input type="checkbox" :checked="isHistory" @change="setHistoryChat" />
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="menu-tool">
                    语音模式：
                    <label class="switch">
                        <input type="checkbox" :checked="isTextVoice" @change="setTextVoice" />
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="menu-tool">
                    主题模式：
                    <label class="switch">
                        <input type="checkbox" :checked="lightTheme" @change="setTheme" />
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
        </div>
        <!-- 另一种抽屉滑动菜单，使用toggleMenu方法滑出显示menu-drawer，outSideCloseMenu方法点击菜单以外任意地方隐藏menu-drawer -->
        <!-- <div class="menu-drawer" :class="{ open: menuOpen }"></div> -->
        <div class="plus-dialog-overlay">
            <div class="plus-dialog-main-body">
                <div class="file-preview-send-main">
                    <div class="file-preview-send-container">
                        <div class="chat-extra-data" id="fileData">
                        </div>
                    </div>
                    <textarea name="inputChatMsgDialog" v-model="chatDataPrompt.chatMsg" v-focus="dialogInputIsFocus"
                        class="plus-form-textarea" placeholder="请输入消息..." rows="1"></textarea>
                    <div class="file-preview-send-footer">
                        <div class="pdf-left-btn">
                            <span class="cancel-btn" data-cancel="plus-dialog" aria-label="Close">
                                取消
                            </span>
                        </div>
                        <span class="split-line"></span>
                        <div class="pdf-right-btn">
                            <span class="confirm-btn" v-on:click="sendWithFile">发送</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="modal fade" id="chatDataModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div role="document" class="plus-dialog"></div>
        </div> -->
        <div class="plus-draggable-component">
            <gp-player></gp-player>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Recorder from 'js-audio-recorder'
import PlusCropper from "@/utils/PlusCropper.js"
import PlusDialog from '@/utils/PlusDialog.js'
import PlusDrawer from '@/utils/plus-drawer.js'
//import { marked } from 'marked';//9.1.6
const marked = require('marked'); //9.1.6
import { testProcess, getchatgpt, chatgpttest, geminiAI, geminiAIChat, getHistoryMessage, getAllHistoryMessage, getOneHistoryMessage, deleteOneHistoryMessage, getTTSChinese } from "@/api/chatbot/chatbot"

import GpPlayer from '@/components/music/GpPlayer.vue'
import DraggableComponent from "@/utils/DraggableComponent.js"

export default {
    name: "ChatBot",
    components: {
        GpPlayer,
    },
    data() {
        return {
            //visible: false,//聊天对话框是否显示
            dialogInputIsFocus: false,
            inputChatMsg: "",//消息发送框中的消息内容，发送时赋值给chatDataPrompt.chatMsg
            preChatData: "", //历史聊天数据，拼接json字符串，和下面数组形式，属于不同的数据形式发送
            msgList: [], //聊天消息的list
            historyChatData: [], //历史聊天记录，临时存储所有消息聊天历史记录，当需要使用，赋值给chatDataPrompt.historyChatData
            //loading: false,//是否加载中，目前未被使用
            //chatBtnPcDisplay: true,//聊天对话框显示按钮，目前没有被使用
            mobileChatdisplay: true,//表示移动端显示，否则为桌面端，通过js检测是否是移动端
            //reduceH: 40,//页面固定减去的一个高度，为顶部的header部分的高
            chatBoxHeight: 440,//中间聊天内容盒子区域的高度，窗体高度减去底部输入部分
            chatBoxHeaderTop: 0, //适用于移动端iOS键盘抬起，页面内容被往上推，为了定位顶部header，保持top为0
            windowWidth: 0,//实时窗体宽度
            windowHeight: 0,//实时窗体高度
            audioData: [], // 存储录音数据块，recorderData//音频的二进制数据
            recorder: new Recorder({
                sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
                sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
                numChannels: 1, // 声道，支持 1 或 2， 默认是1
                // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
            }),
            recording: 0,//表示录音状态，0为开始，1为结束
            recordingTxt: "语音",//文字表示录音的状态
            textAudio: null,//录音音频数据
            isTextVoice: false, //是否语音朗读
            isHistory: true, //是否采用有历史记忆的聊天
            tempFileUrl: "", //临时二进制数据Blob文件地址
            // openAiKey: '',//未使用，用户自己使用自己的apikey
            //封装一个聊天消息，里面自己添加具体的内容，可以携带媒体数据mediaData
            chatDataPrompt: {
                userId: null,//用户ID
                username: "guest",//用户名
                chatMsg: "",//聊天消息内容
                historyChatData: null,//历史聊天记录
                mediaData: null,
                mediaMimeType: null,//文件数据类型
                mediaFileName: null,//文件名称
            },
            historyChatMsgList: [],//历史消息记录，从redis中查询，包含redisKey和每一个聊天记录的最后一条消息
            webProtocol: window.location.protocol,
            baseHost: window.location.host,//当前的网址url
            baseApi: process.env.VUE_APP_BASE_API,//获取系统的api初始头URL
            textAreaInput: null,//获取底部输入框input，textarea
            textInputHeight: 0,//获取输入框的初始的高度
            textInputHeightAdd: 0,//输入框换行时增加的高度，也就是实际的line-height，我这里的是24px
            statusDisabled: false,//发送按钮的不可用状态
            tempFileData: null,//上传大型文件
            menuOpen: false,//左边滑动抽屉菜单
            lightTheme: true,//主题模式，默认为明亮主题
        };
    },
    created() {
        var localUsername = localStorage.getItem("username")
        if (localUsername) {
            this.chatDataPrompt.username = localUsername;
        }
        this.getHistoryMag(this.chatDataPrompt.username);
        this.getAllHistoryChatMsg(this.chatDataPrompt.username);
        localStorage.setItem("username", this.chatDataPrompt.username);
        let themeMode = this.getLocalStore("theme-mode");//||"light"
        if (themeMode) {
            this.lightTheme = themeMode == 'light';
        } else {
            if (this.isLightDay()) {
                this.lightTheme = true;
            } else {
                this.lightTheme = false;
            }
        }
        this.beforeLoadedDocument();
    },
    mounted() {
        // 创建一个新的可拖动组件
        const myComponent = new DraggableComponent({
            initialPosition: "right", // 初始位置为右边
            buoyContent: '<svg t="1722832996386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12854" width="25" height="25"><path d="M682.666667 384 682.666667 298.666667 512 298.666667 512 533.333333C494.08 520.106667 472.32 512 448 512 389.12 512 341.333333 559.786667 341.333333 618.666667 341.333333 677.546667 389.12 725.333333 448 725.333333 506.88 725.333333 554.666667 677.546667 554.666667 618.666667L554.666667 384 682.666667 384M512 85.333333C747.52 85.333333 938.666667 276.48 938.666667 512 938.666667 747.52 747.52 938.666667 512 938.666667 276.48 938.666667 85.333333 747.52 85.333333 512 85.333333 276.48 276.48 85.333333 512 85.333333Z" p-id="12855" fill="#fcfcfc"></path></svg>', // 设置箭头内容为 Font Awesome 图标
            //content: "<h1>Hello, world!</h1>", // 设置组件内容
            //buoyShape: "round"
        });
        //调用滑出抽屉菜单，closeButton: false不使用默认的关闭按钮
        PlusDrawer.init({ closeButton: false });
        const that = this;
        that.textAreaInput = document.querySelector("#plus-input-content-text");
        that.textInputHeight = this.textAreaInput.offsetHeight;
        that.adjustLayout();
        // this.$nextTick(() => {this.$refs.serachBox.focus();});
        // <!--把window.onresize事件挂在到mounted函数上-->
        // window.onresize = (e) => {return (() => {})();};
        window.addEventListener('resize', (e) => {
            //e.target.innerHeight 和 window.innerHeight会随着我拖拽窗口而变化，这里计算文档与窗口的交集，而不是真的世纪文档的高度
            window.fullHeight = document.documentElement.clientHeight || document.body.clientHeight;// 高
            window.fullWidth = document.documentElement.clientWidth || document.body.clientWidth;// 宽
            that.windowHeight = window.fullHeight;
            that.windowWidth = window.fullWidth;
            // if (e.target.innerWidth < 992) {
            //     //that.chatBtnPcDisplay = false;
            //     this.mobileChatdisplay = true;
            //     this.scrollEleSmoothTop();
            // } else {
            //     //that.chatBtnPcDisplay = true;
            //     this.mobileChatdisplay = false;
            //     this.scrollEleSmoothTop();
            // }
            // 监听orientationchange事件
            // if (('onorientationchange' in window)) {
            // if (window.orientation === 90 || window.orientation === -90) {
            //     // 横屏模式
            //     console.log("横评模式")
            // } else if (window.orientation === 0 || window.orientation === 180) {
            //     // 竖屏模式
            //     console.log("书评模式")
            // }
            // }
            // if ((screen.availHeight > screen.availWidth)) {
            //     console.log("竖屏了1");
            // }else{
            //     console.log("横屏了2");
            // }
            that.adjustLayout();
        });
        window.onscroll = () => {
            //在IOS下document.body.scrollTop 一直为0，要用document.documentElement.scrollTop
            if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
                var scrollTopDis = document.documentElement.scrollTop || document.body.scrollTop;
                this.chatBoxHeaderTop = scrollTopDis;
                window.setTimeout(function () {
                    if ('scrollIntoView' in document.activeElement) {
                        document.activeElement.scrollIntoView(true);
                    } else {
                        document.activeElement.scrollIntoViewIfNeeded();
                    }
                }, 300);
            } else {
                setTimeout(async () => {
                    that.chatBoxHeaderTop = 0;
                }, 0);
                // this.smoothScrollToTop()
            }
        }
        // 设置显示回调函数
        PlusCropper.onShow(() => {
            // console.log("Plus裁剪框已显示");
        });
        // 设置隐藏回调函数
        PlusCropper.onHide(() => {
            // console.log("Plus裁剪框已隐藏");
            var tempImg = '<img src="' + this.tempFileUrl + '" />';
            document.getElementById("fileData").innerHTML = tempImg;
            //$('#chatDataModal').modal();
            PlusDialog.show({onlyCloseBtn: true});
        });
        // textarea.addEventListener("keydown", (e) => {});
        //shown是在显示之后，show是在显示的同时
        // $('#chatDataModal').on('show.bs.modal', function (e) {
        PlusDialog.onShow(() =>  {
            that.dialogInputIsFocus = true;
        });
        //hidden是在隐藏之后，hide是在隐藏的同时
        // $('#chatDataModal').on('hidden.bs.modal', function (e) {
        PlusDialog.onHide(() =>  {
            //URL.revokeObjectURL(that.tempFileUrl); // 释放url
            that.dialogInputIsFocus = false;
            stopAllMedia();
        });
        // 停止所有音频和视频
        function stopAllMedia() {
            var allMedia = document.querySelectorAll('video, audio');
            allMedia.forEach(function (media) {
                media.pause(); // 暂停播放
                media.load();  // 重新加载媒体元素
            });
        }
    },
    watch: {
        windowHeight(val) {
            // console.log("实时屏幕高度：", val, this.windowHeight);
        },
        windowWidth(val) {
            // console.log("实时屏幕宽度：", val, this.windowWidth);
        },
        msgList(mList) {
            if (mList.length - this.msgList.length === 2) {
                // console.log("消息更新");
            }
        },
        inputChatMsg(val) {
            this.chatDataPrompt.chatMsg = val;
        }
    },
    methods: {
        beforeLoadedDocument() {
            //this.startTTS("你好！请问现在是什么时间！");
            this.windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;;
            this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;;
            // 页面宽度小于768px时，显示移动端,<992px,显示移动和平板
            // if (this.windowWidth < 992) {
            //     //this.chatBtnPcDisplay = false;
            //     this.mobileChatdisplay = true;
            // } else {
            //     //this.chatBtnPcDisplay = true;
            //     this.mobileChatdisplay = false;
            // }
            if (!this.isMobile()) {
                this.mobileChatdisplay = false;
            }
            // testProcess().then(res=>{console.log(res);})
        },
        //处理发送消息
        async handleMsg() {
            // if (this.inputChatMsg === "关闭语音") {
            //     this.isTextVoice = false;
            //     this.$PlusToast.show("关闭语音回复功能", { type: "dark" });
            //     /*
            //      * 模拟信息返回
            //      */
            //     // setTimeout(async () => {
            //     //     let listMsg = {
            //     //         align: "left",
            //     //         text: "已关闭语音功能",
            //     //         link: "",
            //     //         type: '0'
            //     //     };
            //     //     await this.msgList.push(listMsg);
            //     //     await this.scrollEleSmoothTop();
            //     //     //this.loading = false;
            //     // }, 1000);
            // } else if (this.inputChatMsg === "开启语音") {
            //     this.isTextVoice = true;
            //     this.$PlusToast.success("开启语音回复功能", { type: "dark", duration: 4000 });
            // } else 
            if (this.inputChatMsg === "停止语音" || this.inputChatMsg === "停止播放" || this.inputChatMsg === "暂停播放" || this.inputChatMsg === "暂停回复语音" || this.inputChatMsg === "pause") {
                this.pauseTextAudio();
                //this.loading = false;
                this.$PlusToast.info("停止回复语音");
            } else if (this.inputChatMsg === "继续语音" || this.inputChatMsg === "继续播放" || this.inputChatMsg === "继续回复语音" || this.inputChatMsg === "play") {
                this.playTextAudio();
                //this.loading = false;
                this.$PlusToast.info("播放回复语音");
            } else if ((this.inputChatMsg && this.inputChatMsg.trim().length > 0)) { //!this.isOnlyNewlines(this.inputChatMsg)
                //this.loading = true;
                //在发送普通文本消息前把文件相关数据清空
                this.resetPromptFileData();
                //msgListToChatPromptList方法是在调用发送消息到后端前把之前所有的消息构造一个json作为历史消息记录
                this.msgListToChatPromptList(this.msgList);
                await this.showChatMsgList(this.msgList, { align: "right", text: this.inputChatMsg, type: "text", time: Date.now() });
                await this.scrollEleSmoothTop(true);
                this.getReplyMsg();
            }
            this.inputChatMsg = "";
            this.textAreaInput.style.height = "auto";
            this.textInputHeightAdd = 0;
            this.adjustLayout();
        },
        //发送消息后获取消息回复
        getReplyMsg() {
            // axios处理自己的接口请求 返回需要的数据
            // axios.post("/getchatgpt",{ username:"You", data: this.inputChatMsg })
            //   .then(async (response) => {
            //   console.log(response);
            //   if (response.status == 200) {
            //   }
            //   }).catch(function (error) {
            // });
            //发送消息后显示消息加载中...
            this.beforeGetReplyRes();
            if (this.isHistory === false) {
                // const formData = new FormData();
                // for(const key in dataParams) {
                //     formData.append(`${[key]}`, dataParams[key]);
                // }
                this.chatDataPrompt.historyChatData = null;
                this.sendMessage(this.chatDataPrompt)
            } else {
                this.chatDataPrompt.historyChatData = this.historyChatData;
                this.sendMessageChat(this.chatDataPrompt)
            }
        },
        //获取用户的历史聊天记录，默认是单username为guest时，查询并显示在聊天框中
        getHistoryMag(username) {
            getHistoryMessage({ username: username })
                .then(async (response) => {
                    let msglist = response.data;
                    //显示所有历史消息到消息列表
                    await this.historyListToMsgList(msglist);
                    this.delayFunction(() => {
                        this.scrollEleSmoothTop();
                    }, 300);
                }).catch(function (error) {
                    // console.log(error);
                    this.$PlusToast.error(error);
                });
        },
        //获取所有聊天记录列表
        getAllHistoryChatMsg(name) {
            getAllHistoryMessage({ username: name })
                .then(res => {
                    this.historyChatMsgList = res.data;
                }).catch(error => {
                    this.$PlusToast.error(error);
                });
        },
        //根据keyValue获取其中一条聊天消息
        getOneHistoryChatMsg(keyValue) {
            getOneHistoryMessage({ historyMsgKey: keyValue })
                .then(res => {
                    this.msgList = [];
                    this.historyListToMsgList(res.data);
                }).catch(error => {
                    this.$PlusToast.error(error);
                })
        },
        // 根据keyValue删除一条聊天记录
        deleteOneHistoryChatMsg(keyValue) {
            const that = this;
            this.$PlusToast.confirm("确定要删除吗？", {
                onConfirm: () => {
                    // 用户点击确认后的操作
                    deleteOneHistoryMessage({ historyMsgKey: keyValue })
                    .then(res => {
                        this.$PlusToast.success(res.msg);
                        this.historyChatMsgList = this.removeArrayOneByKey(this.historyChatMsgList, "historyMsgKey", keyValue);
                        if (Array.isArray(this.historyChatMsgList) && this.historyChatMsgList.length === 0) {
                            this.msgList = [];
                        }
                    }).catch(error => {
                        this.$PlusToast.error(error);
                    });
                },
                onCancel: () => {
                    // 用户点击取消后的操作
                }
            });
        },
        //发送消息和文件
        async sendWithFile() {
            var chatMsgObj = null;
            var mediaEle = "";
            if (this.chatDataPrompt.mediaMimeType.indexOf("image") !== -1) {
                //mediaEle = "<img src='" + this.tempFileUrl + "' >";
                chatMsgObj = { align: "right", text: this.chatDataPrompt.chatMsg, type: "image", mediaData: this.tempFileUrl, mediaFileName: this.chatDataPrompt.mediaFileName, mediaMimeType: this.chatDataPrompt.mediaMimeType, time: Date.now() };
            } else if (this.chatDataPrompt.mediaMimeType.indexOf("video") !== -1) {
                // mediaEle = `<video controls height="50" width="100%" :data="${this.tempFileUrl}">
                //     <source :src="${this.tempFileUrl}" type="audio/mpeg">
                //     <source :src="${this.tempFileUrl}" type="audio/ogg">
                //     <source :src="${this.tempFileUrl}" type="video/mp4">
                //     <source :src="${this.tempFileUrl}" type="video/ogg">
                // </video>`;
                chatMsgObj = { align: "right", text: this.chatDataPrompt.chatMsg, type: "video", mediaData: this.tempFileUrl, mediaFileName: this.chatDataPrompt.mediaFileName, mediaMimeType: this.chatDataPrompt.mediaMimeType, time: Date.now() };
            } else if(this.chatDataPrompt.mediaMimeType.indexOf("audio") !== -1) {
                chatMsgObj = { align: "right", text: this.chatDataPrompt.chatMsg, type: "audio", mediaData: this.tempFileUrl, mediaFileName: this.chatDataPrompt.mediaFileName, mediaMimeType: this.chatDataPrompt.mediaMimeType, time: Date.now() };
            }else {
                //mediaEle = "<a target='_blank' href='" + this.tempFileUrl + "'>" + this.chatDataPrompt.mediaFileName + "</a>"
                chatMsgObj = { align: "right", text: this.chatDataPrompt.chatMsg, type: "file", mediaData: this.tempFileUrl, mediaFileName: this.chatDataPrompt.mediaFileName, mediaMimeType: this.chatDataPrompt.mediaMimeType, time: Date.now() };
            }
            //let imgDiv=document.createElement("div").appendChild(this.convertBase64ToImage("base64Str")); this.chatDataPrompt.mediaData
            //msgListToChatPromptList方法是在调用发送消息到后端前把之前所有的消息构造一个json作为历史消息记录
            this.msgListToChatPromptList(this.msgList);
            await this.showChatMsgList(this.msgList, chatMsgObj);
            await this.scrollEleSmoothTop(true);
            this.getReplyMsg();
            // const formData =new FormData();
            // if(this.tempFileData!==null){
            //     formData.append('file', this.tempFileData);
            // }
            // // 对象（遍历添加）
            // for(const key in this.chatDataPrompt) {
            //     formData.append(`${[key]}`, this.chatDataPrompt[key]);
            // }
            // $('#chatDataModal').modal('hide');
            PlusDialog.hide();
            //重置临时文件数据
            //this.tempFileData = null;
            this.chatDataPrompt.chatMsg = "";
        },
        sendMessage(dataParams) {
            const that = this;
            that.statusDisabled = true;
            //链式编程
            // new Promise((resolve, reject) => {
            //     //第一次网络请求
            //     setTimeout(() => {
            //     //resolve将拿到的参数传递给then处理
            //     resolve('hello');
            //     //reject('err err err');
            //     },1000);
            // }).then((data) => {
            //     //第一次网络请求后的处理
            //     console.log(data);
            // }).catch(err => {
            //     console.log(err);
            // });
            geminiAI(dataParams)
                .then(async (response) => {
                    //console.log(response);
                    //if (response.code == 200) {
                    await that.handleResultTask(response);
                    //}
                })
                .catch(function (error) {
                    //reject(error);
                    //console.log(error);
                    that.$PlusToast.error(error);
                });
        },
        sendMessageChat(dataParams) {
            const that = this;
            that.statusDisabled = true;
            geminiAIChat(dataParams)
                .then(async (response) => {
                    //console.log(response);
                    //if (response.code == 200) {
                    await that.handleResultTask(response);
                    //}
                })
                .catch(function (error) {
                    //reject(error);
                    that.$PlusToast.error(error);
                });
            // return new Promise((resolve, reject) => {
            //     // 执行耗时操作
            //     // setTimeout(() => {
            //     // resolve('Task completed');
            //     // }, 5000); // 模拟耗时操作，延迟5秒
            // });
            // Choose a model that's appropriate for your use case.
            // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            // const prompt = "Write a story about a magic backpack.";

            // const result = await model.generateContentStream([prompt]);
            // // print text as it comes in
            // for await (const chunk of result.stream) {
            // const chunkText = chunk.text();
            // console.log(chunkText);
            // }
        },
        //在获取消息回复之前的临时等待或加载中，类似于进度条或加载转动圈
        beforeGetReplyRes() {
            //在获取请求响应前，设置一个临时加载显示的消息
            let listMsgTemp = { align: "left", text: "回复中，请稍后...", link: "", type: 'text', time: Date.now() };
            //推送到消息列表中
            this.showChatMsgList(this.msgList, listMsgTemp);
            //延迟一秒等内容已经包含在div消息列表框中，然后在进行滑动到底部
            this.delayFunction(() => {
                this.scrollEleSmoothTop();
            }, 300);
        },
        //处理回复响应的异步任务函数
        async handleResultTask(response) {
            let msg = "消息";
            let msgtype = "0"
            // if (response.status && response.status == 500) {
            //     msg = "返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
            //     msgtype = "0";
            // }
            if (response.code == 500) {
                msg = "返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
                msgtype = "0";
            } else if (response.code == 200) {
                // 自行处理需要的数据
                msg = response.data.msg_data.trim();
                msgtype = response.data.msg_type;
                this.statusDisabled = false;
            }
            let listMsg = {
                align: "left",
                text: msg,
                link: "",
                type: msgtype,
                time: response.data.msg_date_time
            };
            //if (msg.flag == 1) {
            // const splitMsg = msg.answer.split("：");
            // listMsg.text = splitMsg[0];
            // listMsg.link = splitMsg[1];
            // }
            if (this.isTextVoice === true) {
                this.startTTS(msg);
            }
            await this.refreshChatReply(this.msgList, listMsg);
            await this.scrollEleSmoothTop(true);
        },
        textInputEvent(e) {
            let that = this;
            let textArea = e.target;
            var inputHeight = that.textInputHeight;
            var textAreaAddHeight = 0; //输入框增加的高度
            // 将高度重置为自动，以便根据内容计算高度
            textArea.style.height = 'auto';
            // 获取行数,表示是否有换行符，为1表示没有，换行符为0，后面就根据换行符来计算增加高度
            let currentLines = textArea.value.split("\n").length;
            textAreaAddHeight = (currentLines - 1) * 24;
            textArea.style.height = inputHeight + textAreaAddHeight + `px`;
            // 如果行数超过最大行数，则设置最大高度
            if (currentLines > 8) {
                textAreaAddHeight = 8 * 24;
                textArea.style.height = inputHeight + textAreaAddHeight + `px`;
                //textarea.style.height = `${textarea.scrollHeight}px`;
            } else if (currentLines == 1) {
                textArea.style.height = inputHeight + "px";
            }
            that.textInputHeightAdd = textAreaAddHeight;
            that.adjustLayout();
        },
        //键盘输入enter键事件
        keyDownEvent(e) {
            let keyC = window.event.keyCode || e.keyCode; //这里是键盘的ASCLL码值，13为回车值
            //let key = window.event.key || event.key;//新的key时表示为键盘的具体值
            //只有在移动和平板设备上(<992px)才无法使用enter直接发送
            //而在桌面(this.windowWidth >= 992)，使用非shift键和enter键在能发送，否则就是换行
            if (!this.isMobile()) {
                if (keyC == 13 && !e.shiftKey) {
                    //只有enter没有shift，或进行你的其他逻辑
                    e.preventDefault(); // 阻止默认行为，即不换行
                    // 13是enter键的键盘码 如果等于13 就调用click的登录方法
                    this.handleMsg();
                }
            }
            // else if(keyC == 13 && e.shiftKey){
            //     // 这里实现换行
            //     console.log(this.inputChatMsg.length);
            //     if(this.inputChatMsg!='' && this.inputChatMsg.length > 0){
            //         this.inputChatMsg+="\n";
            //     }
            // }
        },
        //重置文件数据为空，防止发送普通文本消息时携带
        resetPromptFileData() {
            this.chatDataPrompt.mediaData = null;
            this.chatDataPrompt.mediaMimeType = null;
            this.chatDataPrompt.mediaFileName = null;
        },
        //上传文件事件
        async uploadDataFileEvent(e) {
            const URL = window.URL || window.webkitURL;
            var file = null;
            //this.formData.append("file", file.file);
            const items = e.target.files;
            if (items && items.length) {
                // for (let i = 0; i < items.length; i++) {}
                file = items[0];
                // 计算文件大小
                // let fileSize = file.size / 1024 / 1024; // 将文件大小从字节转换为MB
                // fileSize = Math.round(fileSize * 100) / 100; // 保留两位小数
                // if(fileSize > 100){
                //     this.$PlusToast.error("文件超过100MB！");
                //     return;
                // }
                this.chatDataPrompt.mediaMimeType = file.type;
                this.chatDataPrompt.mediaFileName = file.name;
                // // 通过 file 生成目标 url。URL.createObjectURL(file);
                const tempURL = URL.createObjectURL(file);
                this.tempFileUrl = tempURL;
                // 在这里处理base64数据
                // 创建FileReader读取文件
                // const reader = new FileReader();
                // reader.onload = (e) => {
                //     const base64 = e.target.result;
                //     this.chatDataPrompt.mediaData = base64;
                //     console.log(base64)
                //     // 在这里处理base64数据
                //     //let baseArr=base64.split(",");
                //     // 拿到文件对象后，先上传或先展示都行，这里以图片进行举例
                //     // 如果是直接上传服务器，那可以拿到图片地址直接使用
                //     // 如果不进行上传，先展示，等点击确定在上传，那就自己创建一个链接进行使用
                //     // const windowURL = window.URL || window.webkitURL
                //     tempURL = URL.createObjectURL(file);
                // };
                // reader.readAsDataURL(file);
                // if ((file.type.indexOf('application/vnd') !== -1 || file.type.indexOf('application/ms') !== -1)) {
                //     this.tempFileUrl = tempURL;
                //     let domObject = '<embed src="' + tempURL + '" type="application/*" width="100%" height="100%">该浏览器不支持office.请点击查看:<a href="' + tempURL + '">Download Office File</a>.</p></embed>';
                //     //let domObject='<embed src="'+base64+'" width="100%" height="100%" type="application/pdf"></embed>'
                //     document.getElementById("fileData").innerHTML = domObject;
                //     $('#chatDataModal').modal();
                // }
                if (file.type.indexOf('image') !== -1 && file.type.indexOf('adobe') === -1) {
                    this.chatDataPrompt.mediaData = await this.fileToBase64(file);
                    // this.tempFileUrl = tempURL;
                    // 显示裁剪框，传入配置选项
                    PlusCropper.show({
                        imageSrc: tempURL
                        // ... 其他选项
                    });
                    // 设置裁剪回调函数
                    PlusCropper.onCrop((croppedImageDataURL) => {
                        //console.log("Plus裁剪后的图片数据：", croppedImageDataURL);
                        // 可以在这里将裁剪后的图片数据上传到服务器或者进行其他操作
                        this.chatDataPrompt.mediaData = croppedImageDataURL;
                        URL.revokeObjectURL(this.tempFileUrl);
                        this.tempFileUrl = URL.createObjectURL(this.base64ToBlob(croppedImageDataURL));
                    });
                } else if ((file.type.indexOf('json') !== -1 || file.type.indexOf('xml') !== -1 || file.type.indexOf('text') !== -1)) {
                    this.chatDataPrompt.mediaData = await this.fileToBase64(file);
                    // this.tempFileUrl = tempURL;
                    const domObject = '<object controls height="100%" width="100%" data="' + tempURL + '">' +
                        '<source src="' + tempURL + '" type="audio/mpeg">' +
                        '<source src="' + tempURL + '" type="audio/ogg">' +
                        '<embed height="50" width="100" src="' + tempURL + '">' +
                        //'<object height="50" width="100" data="'+tempURL+'"></object>'+
                        '</object>';
                    //let domObject = '<object data="' + tempURL + '" type="application/pdf" width="100%" height="100%">该浏览器不支持PDF.请点击查看:<a href="' + tempURL + '">Download PDF</a>.</p></object>';
                    //let domObject='<embed src="'+base64+'" width="100%" height="100%" type="application/pdf"></embed>'
                    document.getElementById("fileData").innerHTML = domObject;
                    // $('#chatDataModal').modal();
                    PlusDialog.show({onlyCloseBtn: true});
                } else if ((file.type.indexOf('audio') !== -1 || file.type.indexOf('video') !== -1)) {
                    this.chatDataPrompt.mediaData = await this.fileToBase64(file);
                    // this.tempFileUrl = tempURL;
                    const tempFile = '<video controls height="50" width="100%" data="' + tempURL + '">' +
                        '<source src="' + tempURL + '" type="audio/mpeg">' +
                        '<source src="' + tempURL + '" type="audio/ogg">' +
                        '<source src="' + tempURL + '" type="video/mpeg">' +
                        '<source src="' + tempURL + '" type="video/ogg">' +
                        '<embed height="50" width="100" src="' + tempURL + '">' +
                        '</video>';
                    document.getElementById("fileData").innerHTML = tempFile;
                    // $('#chatDataModal').modal();
                    PlusDialog.show({onlyCloseBtn: true});
                } else {
                    this.$PlusToast.show("不支持的文件类型！仅支持支持图片，视频，音频，文本等", {
                        type: "dark",
                    });
                }
            }
            //const imageUrl = 上传七牛云后返回来的一串在线链接
            // if (e.target.files.length == 1) {
            //     let file = e.target.files[0];
            //     //var file=document.querySelector("#uploadFile")[0].value;
            //     let formData = new FormData();
            //     formData.append("file", file);
            // } else {
            //     let fileList = e.target.files;
            //     for (var i = 0; i < fileList.length; i++) {
            //         let formData = new FormData();
            //         var elFile = fileList[i];
            //         formData.append("file", elFile);
            //         //formData.append("file", new Blob(file)); //this.fileList[0].raw);//拿到存在fileList的文件存放到formData中
            //         //下面数据是我自己设置的数据,可自行添加数据到formData(使用键值对方式存储)
            //         // 解析上传的文件
            //         //let file = this.fileList[0]
            //     }
            // }
            e.target.value = '';
        },
        //输入框粘贴事件处理函数
        pastingData(event) {
            const URL = window.URL || window.webkitURL
            // 输入框粘贴
            //let excelArr = ['text/plain', "text/html", "text/rtf", "image/png"];//excel格式
            var file = null;
            // 获取剪切板图片、视频、文件、文件夹
            const items = (event.clipboardData || window.clipboardData).items;
            if (items && items.length) {
                // const item = items[0];
                // if (item.kind === 'file' && item.type.startsWith('image/'))
                for (let i = 0; i < items.length; i++) {
                    // console.log(items[i]);
                    file = items[i].getAsFile();
                    // let fileSize = file.size / 1024 / 1024; // 将文件大小从字节转换为MB
                    // fileSize = Math.round(fileSize * 100) / 100; // 保留两位小数
                    // if(fileSize > 100){ this.$PlusToast.error("文件超过100MB！"); return; }
                    // 拿到文件对象后，先上传或先展示都行，这里以图片进行举例
                    // 如果是直接上传服务器，那可以拿到图片地址直接使用
                    // 如果不进行上传，先展示，等点击确定在上传，那就自己创建一个链接进行使用
                    const tempUrl = URL.createObjectURL(file);
                    this.tempFileUrl = tempUrl;
                    this.chatDataPrompt.mediaMimeType = items[i].type;
                    this.chatDataPrompt.mediaFileName = items[i].name;
                    if (items[i].kind === 'file' && (items[i].type.indexOf('image') !== -1 && items[i].type.indexOf('adobe') === -1)) {
                        // 创建FileReader读取图片
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            // 在这里处理base64数据
                            const base64 = e.target.result;
                            this.chatDataPrompt.mediaData = base64;
                            // const fileData = this.base64ToBlob(base64);
                            // let clip = new CropImg({width: 300, height:220}) // 设置裁剪的比例
                            // clip.init(fileData, res => { // 需要将裁剪的图片文件传入，既可以触发裁剪
                            //     // 裁剪按钮 点击后会触发此函数，传入的res是裁剪后的文件,可以上传，也可以自己手动转成url显示
                            //     var tempUrl = URL.createObjectURL(res)
                            // })
                            // 重新绘制图片，自定义长宽
                            // this.resizeImage(tempUrl, 300, 200, function(resizedImgSrc) {
                            //     // 在这里处理新尺寸的图片数据
                            //     const img = document.createElement('img');
                            //     img.src = resizedImgSrc;
                            //     document.getElementById("fileData").appendChild(img);
                            // });
                            // 显示裁剪框，传入配置选项
                            PlusCropper.show({
                                imageSrc: this.tempFileUrl
                                // ... 其他选项
                            });
                            // 设置裁剪回调函数
                            PlusCropper.onCrop((croppedImageDataURL) => {
                                //console.log("Plus裁剪后的图片数据：", croppedImageDataURL);
                                // 可以在这里将裁剪后的图片数据上传到服务器或者进行其他操作
                                this.chatDataPrompt.mediaData = croppedImageDataURL;
                                URL.revokeObjectURL(this.tempFileUrl);
                                this.tempFileUrl = URL.createObjectURL(this.base64ToBlob(croppedImageDataURL));
                            });
                        };
                        reader.readAsDataURL(file);
                        break;
                    } else if (items[i].kind === 'file' && (items[i].type.indexOf('json') !== -1 || items[i].type.indexOf('xml') !== -1 || items[i].type.indexOf('text') !== -1)) {
                        // 创建FileReader读取图片
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = (e) => {
                            // 在这里处理base64数据
                            const base64 = e.target.result;
                            this.chatDataPrompt.mediaData = base64;
                            const domObject = '<object controls height="100%" width="100%" data="' + tempUrl + '">' +
                                '<source src="' + tempUrl + '" type="audio/mpeg">' +
                                '<source src="' + tempUrl + '" type="audio/ogg">' +
                                '<embed height="50" width="100" src="' + tempUrl + '">' +
                                '</object>';
                            //let domObject = '<object data="' + tempUrl + '" type="application/pdf" width="100%" height="100%">该浏览器不支持PDF.请点击查看:<a href="' + tempUrl + '">Download PDF</a>.</p></object>';
                            //let domObject='<embed src="'+base64+'" width="100%" height="100%" type="application/pdf"></embed>'
                            document.getElementById("fileData").innerHTML = domObject;
                            // $('#chatDataModal').modal();
                            PlusDialog.show({onlyCloseBtn: true});
                        };
                        break;
                    } else if (items[i].kind === 'file' && (items[i].type.indexOf('audio') !== -1 || items[i].type.indexOf('video') !== -1)) {
                        // 创建FileReader读取图片
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            // 在这里处理base64数据
                            const base64 = e.target.result;
                            this.chatDataPrompt.mediaData = base64;
                            const tempFile = '<video controls height="50" width="100%" data="' + tempUrl + '">' +
                                '<source src="' + tempUrl + '" type="audio/mpeg">' +
                                '<source src="' + tempUrl + '" type="audio/ogg">' +
                                '<source src="' + tempUrl + '" type="video/mpeg">' +
                                '<source src="' + tempUrl + '" type="video/ogg">' +
                                '<embed height="50" width="100" src="' + tempUrl + '">' +
                                //'<object height="50" width="100" data="'+tempUrl+'"></object>'+
                                '</video>';
                            document.getElementById("fileData").innerHTML = tempFile;
                            // $('#chatDataModal').modal();
                            PlusDialog.show({onlyCloseBtn: true});
                        };
                        reader.readAsDataURL(file);
                        break;
                    } else {
                        const txt = event.clipboardData.getData('Text');
                        if (typeof (txt) === 'string') {
                            if (txt.length > 9048570) {
                                return false;
                            }
                        }
                        break;
                    }
                }
            }
        },
        getRoundedCanvas(sourceCanvas) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var width = sourceCanvas.width;
            var height = sourceCanvas.height;

            canvas.width = width;
            canvas.height = height;

            context.imageSmoothingEnabled = true;
            context.drawImage(sourceCanvas, 0, 0, width, height);
            context.globalCompositeOperation = 'destination-in';
            context.beginPath();
            context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
            context.fill();

            return canvas;
        },
        /**
         * @param blob      BLOB对象
         * @param base64    base64字符串
         */
        cutChange({ blob, base64 }) {
            //console.log(blob);
            this.tempFileUrl = window.URL.createObjectURL(blob);
            this.chatDataPrompt.mediaData = base64;
        },
        //blob 和 base64 类型转换
        base64ToBlob(base64) {
            let arr = base64.split(',')
            let type = arr[0].match(/:(.*?);/)[1]
            let bstr = atob(arr[1])
            let n = bstr.length
            const u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new Blob([u8arr], { type: type })
        },
        //blob 和 base64 类型转换
        blobToBase64(blob) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.readAsDataURL(blob)
                reader.onload = (e) => {
                    resolve(e.target.result)
                }
            })
        },
        //File 和 base64 类型转换
        base64ToFile(base64, filename) {
            const arr = base64.split(',')
            const type = arr[0].match(/:(.*?);/)[1]
            const bstr = atob(arr[1])
            let n = bstr.length
            const u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new File([u8arr], filename, { type: type })
        },
        //File 和 base64 类型转换
        fileToBase64(data) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader()
                fileReader.onload = (e) => {
                    resolve(e.target.result)
                }
                fileReader.readAsDataURL(data)
                fileReader.onerror = () => {
                    reject(new Error('文件流异常'))
                }
            })
        },
        //blob 和 File 类型转换
        blobToFile(blob, fileName) {
            const file = new File([blob], fileName, { type: blob.type });
            return file;
        },
        //File 转 blob
        fileToBlob(data) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader()
                fileReader.onload = (e) => {
                    const blob = new Blob([e.target.result], { type: data.type })
                    resolve(blob)
                }
                fileReader.readAsDataURL(data)
                fileReader.onerror = () => {
                    reject(new Error('文件流异常'))
                }
            })
        },
        //获取input上传的File 转 Byte
        fileToByte(data) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader()
                fileReader.onload = (e) => {
                    const binaryData = e.target.result;
                    // 在这里返回binaryData
                    resolve(binaryData)
                }
                fileReader.readAsArrayBuffer(data);
                fileReader.onerror = () => {
                    reject(new Error('文件流异常'))
                }
            })
        },
        toggleMenu() {
            // const menuDrawer = document.getElementById("menuDrawer");
            // menuDrawer.classList.toggle("open");
            this.menuOpen = !this.menuOpen;
        },
        outSideCloseMenu(e) {
            // 判断点击区域是否在 menu-drawer 之外
            if (this.menuOpen && (!this.$el.querySelector('.menu-drawer').contains(e.target) && !this.$el.querySelector('.chat-box-header').contains(e.target))) {
                this.menuOpen = false;
            }
        },
        setHistoryChat() {
            if (this.isHistory) {
                this.isHistory = false;
            } else {
                this.isHistory = true;
            }
        },
        setTextVoice() {
            if (this.isTextVoice) {
                this.isTextVoice = false;
            } else {
                this.isTextVoice = true;
            }
        },
        setTheme() {
            if (this.lightTheme) {
                this.lightTheme = false;
                document.body.setAttribute("theme-mode", "dark");
                this.setLocalStore("theme-mode", "", "dark");
                // this.setCookieStorage("theme-mode","dark",{ expires: 17 });
            } else {
                this.lightTheme = true;
                document.body.setAttribute("theme-mode", "light");
                this.setLocalStore("theme-mode", "", "light");
                // this.setCookieStorage("theme-mode","light",{ expires: 17 });
            }
        },
        startAndStopRecording() {
            let that = this;
            //recording为0表示开始录音
            if (that.recording == 0) {
                that.startRecordAudio();
                that.recording = 1;
                that.recordingTxt = "结束"
            }
            //recording为1表示结束录音
            else if (that.recording == 1) {
                that.stopRecordAudio();
                that.recording = 0;
                that.recordingTxt = "语音"
            }
        },
        /**
         * 获取麦克风权限
         * */
        getPermission() {
            Recorder.getPermission().then(() => {
                this.$PlusToast.success('获取权限成功')
            }, (error) => {
                console.log(`${error.name} : ${error.message}`);
            });
        },
        //开始录音 startRecordAudio
        startRecordAudio() {
            Recorder.getPermission().then(
                () => {
                    //console.log("开始录音");
                    this.recorder.start(); // 开始录音
                },
                (error) => {
                    // this.$PlusToast.info("请先允许该网页使用麦克风");
                    console.log(`${error.name} : ${error.message}`);
                    this.$PlusToast.info("请先允许该网页使用麦克风", {
                        type: "dark",
                    });
                }
            );
        },
        //停止录音
        stopRecordAudio() {
            // console.log("停止录音");
            this.recorder.stop();
            /**setTimeout(async () => {
              await this.playRecordAudio();
            }, 2000);*/
            //this.getPCMRecordAudioData();
            this.getRecorderToText()
        },
        // 继续录音
        resumeRecordAudio() {
            this.recorder.resume()
        },
        // 暂停录音
        pauseRecordAudio() {
            this.recorder.pause();
        },
        //播放录音
        playRecordAudio() {
            // console.log("播放录音");
            this.recorder.play();
        },
        // 暂停录音播放
        pausePlayRecordAudio() {
            this.recorder.pausePlay()
        },
        // 恢复录音播放
        resumePlayRecordAudio() {
            this.recorder.resumePlay()
        },
        // 停止录音播放
        stopPlayRecordAudio() {
            this.recorder.stopPlay();
        },
        // 销毁录音Recorder
        destroyRecordAudio() {
            this.recorder.destroy().then(function () {
                this.recorder = null;
            });
        },
        //获取PCM录音数据
        getPCMRecordAudioData() {
            let that = this;
            let toltime = this.recorder.duration; //录音总时长
            let fileSize = this.recorder.fileSize; //录音总大小
            var pcmBlob = this.recorder.getPCMBlob();
            let channel = this.recorder.getChannelData(); //获取左声道和右声道音频数据
            //console.log(pcmBlob);
        },
        //获取WAV录音数据
        getWAVRecordAudioData() {
            var wavBlob = this.recorder.getWAVBlob();
            //console.log(wavBlob);
        },
        //下载PCM录音文件
        downloadPCBRecordAudioData() {
            this.recorder.downloadPCM("maike");
        },
        //下载WAV录音文件
        downloadWAVRecordAudioData() {
            this.recorder.downloadWAV("maike");
        },
        //发送消息立刻推送一个临时消息加载中提示到消息显示列表，作为缓冲过渡
        async showChatMsgList(chatMsgList, chatMsgObj) {
            chatMsgList.push(chatMsgObj);
        },
        //接受回复消息显示在消息列表
        async refreshChatReply(chatMsgList, chatMsgObj) {
            if (chatMsgObj.text && chatMsgObj.text.trim().length > 0) {
                chatMsgList.pop();
                chatMsgList.push(chatMsgObj);
            }
        },
        // 延时函数
        delayFunction(fn, delay) {
            setTimeout(fn, delay);
        },
        //重新调整布局，在页面变化时
        adjustLayout() {
            const inputAddHeight = this.textInputHeightAdd;
            // const headerHeight = document.querySelector('header').offsetHeight;
            // const footerHeight = document.querySelector('footer').offsetHeight;
            // document.querySelector('.content').style.height = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;
            //this.windowHeight代表窗体高度，inputAddHeight是输入框增加的高度
            //(this.textInputHeight+14)是footer输入部分的高度，this.reduceH是固定的header高度(由于设置了顶部headerposition:fixed固定，所以不需要再减了)
            this.chatBoxHeight = this.windowHeight - inputAddHeight - (this.textInputHeight + 14);
        },
        domObserverEvent(targetNode) {
            // 选择目标节点
            //const targetNode = document.getElementById('id_target');

            // 创建一个观察者对象
            const observer = new MutationObserver(function (mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(node => {
                            // console.log('新创建的节点: ', node);
                        });
                        mutation.removedNodes.forEach(node => {
                            // console.log('被删除的节点: ', node);
                        });
                    }
                }
            });

            // 观察者的配置（观察目标节点的子节点的变化）
            const config = { attributes: false, childList: true, subtree: false };

            // 传入目标节点和观察选项并开始观察
            observer.observe(targetNode, config);
        },
        //内容顺滑滚动到顶部
        smoothScrollToTop(element, duration, topPosition = null) {
            // 获取当前的top值
            const startPosition = element.scrollTop;
            if (!topPosition) {
                //不存在具体滚动的位置，默认滚动到元素顶部
                topPosition = -startPosition;
            }
            const startTime = performance.now();

            const easeInOutQuad = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            const animateScroll = () => {
                const currentTime = performance.now();
                const time = Math.min(currentTime - startTime, duration);
                const newTop = easeInOutQuad(time, startPosition, topPosition, duration);

                element.scrollTop = newTop;

                if (time < duration) {
                    window.requestAnimationFrame(animateScroll);
                }
            };

            window.requestAnimationFrame(animateScroll);
        },
        //内容顺滑滚动到底部,或接近底部任意一处
        smoothScrollToBottom(element, duration, endPosition = null) {
            // 获取当前的top值
            const startPosition = element.scrollTop;
            if (!endPosition) {
                //不存在滚动到什么位置，默认就往下滚动到元素最底部，也就元素的scrollHeight
                endPosition = element.scrollHeight;
            }
            const startTime = performance.now();

            const easeInOutQuad = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            const animateScroll = () => {
                const currentTime = performance.now();
                const time = Math.min(currentTime - startTime, duration);
                const newScrollHeight = easeInOutQuad(time, startPosition, endPosition, duration);

                element.scrollTop = newScrollHeight;

                if (time < duration) {
                    window.requestAnimationFrame(animateScroll);
                }
            };

            window.requestAnimationFrame(animateScroll);
        },
        // 处理滚动条一直保持最上方,也就让内容处于最底部contentAtBottom
        async scrollEleSmoothTop(isSmooth = false) {
            var div = document.getElementById("big-chat-box");
            if (!div) {
                div = document.getElementById("big-chat-box-desktop");
            }
            if (isSmooth) {
                this.smoothScrollToBottom(div, 1000);
            } else {
                div.scrollTop = div.scrollHeight;
            }
            // let distanceY = window.scrollY;
            // let i = 0
            // this.interval = setInterval(() => {
            //     let next = Math.floor(this.easeInOutQuad(2 * i, distanceY, -distanceY, 100))
            //     if (next <= 40) {
            //         //window.scrollTo(0, this.backPosition);
            //         div.scrollTop = div.scrollHeight;
            //         clearInterval(this.interval);
            //     } else {
            //         // window.scrollTo(0, next);
            //         div.scrollTop = div.scrollHeight;
            //     }
            //     i++
            // }, 5)
        },
        easeInOutQuad(t, b, c, d) {
            // 判断当前时间是否总在总时间的一半以内，是的话执行缓入函数，否则的话执行缓出函数
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t + b
            } else {
                // 将总长度设置为一半，并且时间从当前开始递减，对图像进行垂直向上平移
                return -c / 2 * (--t * (t - 2) - 1) + b
            }
        },
        clearBlank(value) {
            if (value) {
                value = value.replace(/\s/g, "")
            }
            return value
        },
        timeout(ms) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('error')
                }, ms); //reject模拟出错，返回error
            });
        },
        //消除字符串中的空格换行等特殊字符
        tansf(e) {
            let a = (e + '').replace(/[]/g, "") // 去空格
            a = (a + '').replace(/[\r\n]/g, "") //去回车
            return a
        },
        //去除换行符
        keepTextStyle(val) {
            //console.log(val)
            //console.log(typeof val)
            //console.log((typeof val) != 'undefined')
            return (val + '').replace(/\n/g, "<br/>")
        },
        //开始文字转语音
        startTTS(text) {
            var that = this;
            const baseUrl = process.env.VUE_APP_BASE_API
            // 调用语音合成接口
            // 参数含义请参考 https://ai.baidu.com/docs#/TTS-API
            /*axios
            .post("https://tsn.baidu.com/text2audio?tex="+text+"&lan=zh&cuid=maike&ctp=1&tok=35435436")
            .then(async (response) => {
              console.log(response)
              let audioBuffer=null;
              var audioContext=new (window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext)();
              var source = audioContext.createBufferSource();
              await audioContext.decodeAudioData(
                  new ArrayBuffer(response.data),
                  buffer => {
                    audioBuffer = buffer;
                  },
                  error => console.log("===ERROR===", error)
              )
              source.buffer = audioBuffer;
              source.loop = true; //循环播放
              source.connect(audioContext.destination);
              source.start(0); //立即播放
              //this.textAudio = new Audio(response.data);
              //mp3.play(); //播放 mp3这个音频对象
              //this.playTextAudio()
            }).catch(function (error) {
              console.log(error);
            });*/
            that.textAudio = new Audio();
            that.textAudio.onloadeddata = function () {
                that.textAudio.play();
            };
            // that.textAudio.src = res; // put your url here
            // that.textAudio.play();
            //var url = "https://tsn.baidu.com/text2audio?tex=" + text + "&lan=zh&cuid=c211ccc3407c45038492e623bb358524&ctp=1&tok=24.e3cd3b426636b471a2f288cebadca276.2592000.1719346650.282335-30837213";
            //var url = baseUrl + "/translate/ttsZH_CN?ttsText="+text;
            var url = baseUrl + "/translate/ttsZH_CN";
            axios({
                method: 'post',
                url: url,
                data: { ttsText: text },
                // params:queryParams,
                responseType: 'blob',
                //headers: { 'Plus-Token': getToken() }//'Bearer ' + 
            }).then(async (res) => {
                // console.log(res)
                // 从响应中获取文件数据
                const fileData = res.data;
                // 创建一个Blob对象
                //const blob = new Blob([fileData], { type: "audio/mpeg" });
                // 生成文件URL
                const downloadUrl = URL.createObjectURL(fileData);
                //console.log(downloadUrl)
                // var audioContext = new AudioContext();
                // audioContext.decodeAudioData(res.data, function(buffer) {
                // var source = audioContext.createBufferSource();
                // source.buffer = buffer;
                // source.connect(audioContext.destination);
                // source.start(0);
                // });
                that.textAudio.src = downloadUrl; // put your url here
            })
            that.textAudio.play();
        },
        getRecorderToText() {
            let that = this;
            // 创建一个formData对象
            var formData = new FormData()
            let voiceData;
            var pcmBlob = this.recorder.getPCMBlob();
            //console.log(pcmBlob);
            /** var reader = new FileReader() //生成FileReader实例
            reader.readAsArrayBuffer(pcmBlob) //取出blob或者File文件的二进制原始数据
            reader.onload = function (da) { //有一个异步回调
              let yy = new Uint8Array(da.target.result) //后端需要的二进制格式
              let endd = [...yy] //后端需要的格式，我们改造成数组
              console.log(endd);
              voiceData = yy; //保存到变量中，保存的就是我们需要的二进制数据
            } */
            // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
            const newbolb = new Blob([pcmBlob], { type: 'audio/pcm' })
            //获取当时时间戳作为文件名
            const fileOfBlob = new File([newbolb], new Date().getTime() + '.pcm')
            formData.append('file', fileOfBlob)
            //console.log(formData);
            //上传wav录音数据

            uploadVoiceBlob(formData)
                .then(async (response) => {
                    //console.log(response.data.data)
                    //let text=response.data.data.result[0]
                    that.inputChatMsg = response.data.data.result[0];
                    that.handleMsg()
                }).catch(function (error) {
                    // console.log(error);
                    this.$PlusToast.error(error);
                });
        },
        // 播放文字转语音的按钮
        playTextAudio() {
            var that = this;
            if (that.textAudio === null) {
                alert('请先点击合成')
            } else {
                that.textAudio.play();
            }
        },
        // 暂停播放文字转语音按钮
        pauseTextAudio() {
            var that = this;
            if (that.textAudio === null) {
                //console.log('请先合成音频')
            } else {
                that.textAudio.pause();
            }
        },
        // 暂停播放文字转语音按钮
        stopTextAudio() {
            var that = this;
            if (that.textAudio === null) {
                //console.log('没有语音，请先合成')
            } else {
                that.textAudio.stop();
            }
        },
        startAudio(txt) {
            var msg = new SpeechSynthesisUtterance();
            var voicePack = speechSynthesis.getVoices();
            speechSynthesis.cancel();
            msg.text = txt
            msg.volume = 1 //音量
            msg.rate = 1 //语速
            //msg.voice = 
            msg.lang = 'zh-cn'
            speechSynthesis.speak(msg);
        },
        openMsg() {
            //const h = this.$createElement;
            //var message = h('i', { style: 'color: teal' }, '这里是提示消息');
            //三种主题:toasted-primary,bubble,outline
            let msgContent = "<div style='color: #eaebec;'>" +
                "<div style='text-align: center;'>AI助手小提示：</div>" +
                "<div>新增图片，视频，音频，文本等文件粘贴发送：复制一个图片或音视频等文件，粘贴到发送消息框中，即可对文件进行分析！</div>" +
                "<div>增加语音回复与语音输入：(默认关闭语音回复)启用请发送”开启语音“，关闭发送“关闭语音”，发送“暂停播放”、“暂停”、“stop”实现停止播放语音，发送“继续播放”、“继续”、“play”可继续播放语音。左下角语音输入功能已更新！点击语音，然后结束！就可以发送语音文字！</div></div>";
            this.$PlusToast.show(msgContent);
            // 显示确认取消消息框使用方法
            // this.$PlusToast.confirm("确定要删除吗？", {
            //     icon: "success",//主要有success，error，warning，info四个
            //     type: "success",//消息显示样式类型，success，error，warning，info，dark，light
            //     onConfirm: () => {
            //         // 用户点击确认后的操作
            //         console.log("用户点击了确认");
            //     },
            //     onCancel: () => {
            //         // 用户点击取消后的操作
            //         console.log("用户点击了取消");
            //     },
            //     cancelText: "不", // 自定义取消按钮文本
            //     confirmText: "是的", // 自定义确认按钮文本
            // });
        },
        // setOpenAiKey() {
        //     this.$prompt('请输入openAiKey', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         inputPattern: /^sk-[\w]+$/,
        //         inputErrorMessage: 'openAiKey格式不正确'
        //     }).then(({ value }) => {
        //         this.$PlusToast.success('你的openAiKey是: ' + value, {
        //             duration: 3000,
        //             type: "dark",
        //         });
        //         this.openAiKey = value;
        //     }).catch(() => {
        //         this.$PlusToast.info("取消输入", {
        //             duration: 3000,
        //             type: "dark",
        //         });
        //     });
        // },
        convertBase64ToImage: (data) => {
            // 创建一个新的图片元素
            //var img = document.createElement('img');
            const img = new Image();
            img.src = data;
            var imgWidth = img.width;
            var imgHeight = img.height;
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var scale = Math.min(windowWidth / imgWidth, windowHeight / imgHeight);
            // 设置图片的宽度和高度
            img.style.width = '95%'; // 或者使用CSS像素值
            img.id = "tempElement";
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = imgWidth * scale + "px";
                canvas.height = imgHeight * scale + "px";
                context.drawImage(img, 0, 0);
                const imageURL = canvas.toDataURL('image/png');
            };
            return img;
        },
        //重新调整图片尺寸
        resizeImage(src, newWidth, newHeight, callback) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                const ctx = canvas.getContext('2d');
                // 重绘图片
                ctx.drawImage(img, 0, 0, newWidth, newHeight);
                const resizedImgSrc = canvas.toDataURL('image/png'); // 或者其他格式
                callback(resizedImgSrc);
            };
            img.src = src;
        },
        resizeImg(img) {
            // 获取窗口宽度和高度
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;

            // 获取图片原始宽度和高度
            var imgWidth = img.naturalWidth;
            var imgHeight = img.naturalHeight;
            // 计算缩放比例
            var scale = Math.min(windowWidth / imgWidth, windowHeight / imgHeight);

            // 设置图片宽度和高度
            img.style.width = imgWidth * scale + "px";
            img.style.height = imgHeight * scale + "px";
        },
        convertImageToBase64(imgUrl) {
            const image = new Image()
            image.crossOrigin = 'anonymous'
            let dataUrl = ''
            return new Promise((resolve, reject) => {
                image.onload = () => {
                    const canvas = document.createElement('canvas')
                    const ctx = canvas.getContext('2d')
                    canvas.height = image.naturalHeight
                    canvas.width = image.naturalWidth
                    ctx.drawImage(image, 0, 0)
                    dataUrl = canvas.toDataURL()
                    //通过resolve将返回值返回
                    resolve(dataUrl)
                }
                image.src = imgUrl
            })
        },
        // 假设这个函数会在某个事件监听器中调用，比如点击按钮时
        checkStringAndAllowEvent(str, callbackY, callbackN) {
            // 使用trim去除字符串首尾空白，然后检查长度
            if (str && str.trim().length > 0) {
                // 字符串不为空，允许执行事件
                //console.log('字符串不为空，允许执行事件');
                // 调用第一个回调函数
                // if (typeof callbackY === 'function') {
                //     callbackY();
                // }
                callbackY();
                // 这里执行允许的事件代码
            } else {
                // 字符串为空，阻止执行事件
                //console.log('字符串为空，阻止执行事件');
                // if (typeof callbackN === 'function') {
                //     callbackN();
                // }
                callbackN();
                // 阻止事件的代码，比如event.preventDefault()或return false
            }
        },
        //根据key值判断是否有重复的值然后移除
        removeDuplicatesByKey(array, key) {
            const seen = new Set();
            return array.filter((item) => {
                const keyValue = item[key];
                return seen.has(keyValue) ? false : seen.add(keyValue);
            });
        },
        //根据key和值移除一个数组项
        removeArrayOneByKey(array, key, keyValue) {
            return array.filter(item => item[key] !== keyValue);
        },
        //遍历数组，把里面的每一条消息记录添加显示在消息页面中的msgList
        historyListToMsgList(msgArr) {
            const _this = this;
            const len = msgArr.length;
            for (var i = 0; i < len; i++) {
                var oneMsg = JSON.parse(msgArr[i]);
                // if (oneMsg.mediaData || _this.checkObjectExistsJson(oneMsg, "mediaData")) {
                //     const mediaFileUrl = _this.webProtocol + _this.baseHost + oneMsg.mediaData;
                //     oneMsg.mediaData = mediaFileUrl;
                //     if (oneMsg.mediaMimeType.indexOf("image") !== -1) {
                //         oneMsg.mediaDiv = "<img src='" + mediaFileUrl + "' >";
                //     } else if (oneMsg.mediaMimeType.indexOf("audio") !== -1 || oneMsg.mediaMimeType.indexOf("video") !== -1) {
                //         oneMsg.mediaDiv = `<video controls height="50" width="100%" data="${mediaFileUrl}">
                //             <source src="${mediaFileUrl}" type="audio/mpeg">
                //             <source src="${mediaFileUrl}" type="audio/ogg">
                //             <source src="${mediaFileUrl}" type="video/mp4">
                //             <source src="${mediaFileUrl}" type="video/ogg">
                //         </video>`
                //     } else {
                //         oneMsg.mediaDiv = "<a href='" + mediaFileUrl + "'>查看文件</a>"
                //     }
                // }
                this.msgList.push(oneMsg);
            }
        },
        //遍历聊天记录数组，把里面的每一条json字符串构造为ChatPrompt中聊天历史记录List
        //在发送消息前把之前所有的消息构造一个json作为历史消息记录
        msgListToChatPromptList(msgArr) {
            var historyMessage = [];
            const len = msgArr.length;
            if (len > 0) {
                // msgArr.forEach(element => {});
                for (var i = 0; i < len; i++) {
                    if (msgArr[i].align == "right") {
                        historyMessage.push({ role: "user", parts: [{ text: msgArr[i].text }] });
                        //historyMessage += "{\"role\": \"user\",\"parts\": [{\"text\": \"" + msgArr[i].text + "\"}]},";
                        // historyMessage += JSON.stringify({ role: "user", parts: [{ text: msgArr[i].text }] }) + ",";
                    } else if (msgArr[i].align == "left") {
                        historyMessage.push({ role: "model", parts: [{ text: msgArr[i].text }] });
                        //historyMessage += "{\"role\": \"model\",\"parts\": [{\"text\": \"" + msgArr[i].text + "\"}]},";
                        // historyMessage += JSON.stringify({ role: "model", parts: [{ text: msgArr[i].text }] }) + ",";
                    }
                }
            }
            this.historyChatData = historyMessage;
            // this.historyMessage = JSON.stringify(tempMessage);
        },
        getImageWH(imgSrc) {
            getImageNaturalDimensions(imgSrc, (oImg, imgWH) => {
                return imgWH;
            });
        },
        codeDataToString(code) {
            // const codeAsString = code.replace(/\\/g, '\\\\').replace(/\\\\/g, '\\&');//新的
            const codeAsString = code.replace(/\\n/g, "\\\\n").replace(/"/g, '\\"');
            return codeAsString;
        },
        // 定义一个函数，将Markdown转换为HTML，并去除多余的空行
        renderMdHtml(markdown) {
            //let html = converter.makeHtml(markdown); // 将Markdown转换为HTML
            //breaks会把单个换行符变为<br>
            let html = marked.parse(markdown, { breaks: true }); // 将Markdown转换为HTML
            // 使用正则表达式替换掉一个或多个换行符，后面跟着一个或多个空行，只保留单个换行符
            //html = html.replace(/(?:\n[\s\uFEFF\xA0]*){3,}/g, '\n'); //{3,}表示超过3替换
            // if (/[a-zA-Z]/.test(html) && /[\u4e00-\u9fa5]/.test(html)) {
            //     html = html.replace(/[ | ]*\n/g, ''); //去除行尾空白
            // } else if (/[\u4e00-\u9fa5]/.test(html)) {
            //     html = html.replace(/[ | ]*\n/g, ''); //去除行尾空白
            // }
            //html = html.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
            //html = html.replace(/[ | ]*\n/g, ''); //去除行尾空白
            //html = html.replace(/\n[\s| | ]*\r/g,''); //去除多余空行
            //html = html.replace(/&nbsp;/ig, ''); //去掉&nbsp;
            //html = html.replace(/&nbsp/ig, '');
            this.$nextTick(() => {
                this.copyCode();
            });
            return html;
        },
        getChatDateTime(timeNum) {
            let dateTimeNow = new Date(timeNum);
            if (timeNum == 0 || timeNum == null) {
                dateTimeNow = new Date();
            }
            let now = dateTimeNow,
                y = now.getFullYear(),
                m = now.getMonth() + 1,
                d = now.getDate();
            let dateTimeStr = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substring(0, 8);
            return this.dateTimeAgo(dateTimeStr);
        },
        isSymbol(str) { //是否仅包含各类符号
            return /^[\u2000-\u27ff]+$/.test(str); // 检查Unicode范围内的符号
        },
        isOnlyNewlines(str) { //是否仅包含换行符
            return /^\n*$/.test(str);
        },
        //判断是否是移动端
        isMobile() {
            const userAgent = navigator.userAgent
            return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(userAgent) || typeof window.orientation !== "undefined";
        },
    },
    // 在Vue组件中
    directives: {
        Focus: {
            // 当绑定元素插入到DOM中时
            // inserted: function (el) {
            //     el.focus(); // 聚焦元素
            // }
            // 当绑定更新时
            update: function (el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
/** @media screen and (max-width:600px){
      .con{
        background:red;
      }
    }
    @media screen and (min-width:600px) and (max-width:800px){
      .con{
        background:blue;
      }
    }
    @media screen and (min-width:800px){
      .con{
        background:green;
      }
    } */

body {
    background-color: rgba(239, 239, 239, 0.98);
    margin: 0 auto;
    padding: 0;
}

.chat-app-container {
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    background: var(--color-container-bg);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

/* fade-transform */

.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all .3s;
}

.fade-transform-enter {
    opacity: 0;
    transform: translateX(-90vw);
}

.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(90vw);
}

.chat-main-content {
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: column;
    flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    -moz-flex-wrap: nowrap;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    height: 100%;
    /*align-content: stretch;
    -webkit-align-content: stretch;
    height: -webkit-fill-available;
    min-height: 100%;*/
}

.chat-box-header {
    position: fixed;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    width: 100%;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
    text-align: center;
    background-color: var(--color-primary, rgb(118, 164, 219));
    color: #ffffff;
    font-weight: bolder;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    z-index: 3;
    /*color: var(--color-article-container-text-1, #696969)
    border-bottom: var(--color-border-4, #c5c5c5) 1px solid;*/
}

.gplus-icon {
    display: block;
    line-height: 1;
    display: grid;
    place-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
}

.chat-box-header div {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    /* 上面上个组合起来等于 flex: 0 0 auto;*/
    align-self: center;
    padding-left: 8px;
    padding-right: 8px;
}

.big-chat-box {
    overflow-y: scroll;
    padding: 40px 2px 0;
    flex: 1 1 auto;
}

/* .big-chat-box::-webkit-scrollbar {
    display: none;
} */

.list-chat-msg {
    font-size: 1.1em;
    margin: 10px auto;
}

.list-chat-msg .chat-date-time {
    width: auto;
    text-align: center;
    font-size: 0.7em;
    margin: 2px auto;
    color: var(--color-link-text, #000);
}

.chat-msg-media-data {
    width: 100%;
    overflow: hidden; /* 超出容器的图片部分将被裁剪 */
}

.chat-msg-media-data > * {
    width: 100%; /* 图片宽度自适应容器宽度 */
    height: 100%; /* 图片高度自适应容器高度 */
    object-fit: contain; /* 或者使用cover或scale-down */
}

.list-chat-item-left {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 2px;
    margin-bottom: 2px;
}

.list-chat-item-right {
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
    margin-top: 2px;
    margin-bottom: 2px;
}

.list-chat-item-left .list-chat-item-content {
    margin-right: 49px;
    border-width: 1px;
    border-color: #66cdaa;
    background-color: #66CEAA;
    color: black;
    border-radius: 5px;
    padding: 5px;
    /* word-break: normal;
    white-space: pre-wrap;*/
    word-wrap: break-word;
    overflow-x: scroll;
}

.list-chat-item-left .list-chat-item-content::-webkit-scrollbar {
    display: none;
}

.list-chat-item-right .list-chat-item-content {
    margin-left: 49px;
    border-width: 1px;
    border-color: #355CBF;
    background-color: #4c65b8;
    color: #f0efef;
    border-radius: 5px;
    padding: 5px;
    white-space: pre-wrap;
    overflow-x: scroll;
}

/*.list-chat-item-right .list-chat-item-content::before{
    position: relative;
    left:12px; 
    top:10px; 
    content:'';
    width:0; 
    height: 0; 
    border:7px solid transparent;
    border-left-color: #4c65b8;
}*/

//对话框指向箭头,小箭头左右
.message-right-arrow {
    width: 0;
    height: 0;
    border-left: 7px solid #4c65b8;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    margin: 10px 0 0 -0.5px;
}

.message-left-arrow {
    width: 0;
    height: 0;
    border-right: 7px solid #66CEAA;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    margin: 10px -0.5px 0 0;
}

.list-chat-item-left .pc-chat-item-span {
    /*color:#252020;
    background-color: var(--color-content-bg, #353434);
    color: var(--color-article-container-content-text, #d3d1d1);*/
    background-color: #66CEAA;
    color: #131212;
    border-radius: 5px;
    padding: 5px;
    /* word-break: normal;
    white-space: pre-wrap;*/
    word-wrap: break-word;
    overflow-x: scroll;
}

.list-chat-item-left .pc-chat-item-span::-webkit-scrollbar {
    display: none;
}

.list-chat-item-right .pc-chat-item-span {
    /*background-color: #8ab3ca;
    color: #252020;*/
    background-color: #4c65b8;
    color: #f0efef;
    border-radius: 5px;
    padding: 5px;
    white-space: pre-wrap;
    overflow-X: scroll;
}

.chat-user-icon {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    margin-right: 7px;
    margin-left: 7px;
}

.chat-box-footer {
    /*position: relative;
    bottom: 0px;
    left: 0px;*/
    width: 100%;
    margin: 0 auto;
}

.menu-drawer {
    position: fixed;
    top: 0;
    left: -235px;
    width: 235px;
    height: 100%;
    background-color: var(--color-container, #F2F4F6);
    transition: left 0.3s ease-in-out;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    z-index: 9;
    /* 确保抽屉在内容上方 */
}

.menu-drawer.open {
    top: 0;
    left: 0;
}

.menu-drawer-header {
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

.menu-drawer-container {
    flex: 1 1 auto;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    overflow-y: auto;
}

.menu-btn {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    display: grid;
    align-content: center;
}

.history-msg-list {
    width: 100%;
    padding: 0;
    margin: 0;
    flex: 1 1 auto;
    font-size: 16px;
}

.history-msg-list-header {
    padding: 4px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
}

.history-msg-list-container {
    padding: 8px 4px;
    display: grid;
    place-items: center;
}

.history-msg-list-item {
    display: inherit;
    cursor: pointer;
    position: relative;
}

.text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.history-msg-list-item:hover .history-msg-list-item-close {
    display: block;
}

.history-msg-list-item-close {
    position: absolute;
    top: 1px;
    right: 1px;
    display: none;
    width: 20px;
    height: 20px;
    line-height: 1;
    text-align: center;
    background: hsl(0deg 4% 82% / 90%);
    color: #141414;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1 1 auto;
}

li {
    padding: 10px 20px;
    border-bottom: 1px solid var(--color-border-2, #c0c9cbb3);
    color: #131312;
}

.menu-tool {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
}

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 3px auto;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #139F95;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 99px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 99px;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

/******************（没有用到的样式）********************/
.chat-box-footer-btn {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
    /* background-color: #83a097; */
    background: var(--color-background, #ffffff00);
    font-family: auto;
}

.chat-box-footer-btn .chat_btn_left a {
    border: 1px solid var(--color-border-2, #c0c9cbb3);
    border-right: 0 !important;
    border-radius: 0;
    background: transparent;
    color: var(--color-main-container-text, #2f3030) !important;
    box-shadow: none !important;
}

.chat-box-footer-btn .chat_btn_right a {
    border: 1px solid var(--color-border-2, #c0c9cbb3);
    border-left: 0 !important;
    border-radius: 0;
    /* border-radius: 0 5px 5px 0; */
    background: transparent;
    color: var(--color-main-container-text, #2f3030) !important;
    box-shadow: none !important;
}

.chat-box-footer-btn span {
    flex-grow: 0;
    flex-shrink: 0;
    /**margin:auto;
        align-items:center;*/
    align-self: flex-end;
}

.chat-box-footer-btn>input,
.chat-box-footer-btn>textarea {
    -webkit-transition: width 0.2s ease-in-out;
    -moz-transition: width 0.2s ease-in-out;
    -o-transition: width 0.2s ease-in-out;
    transition: width 0.2s ease-in-out;
    border-radius: 0 !important;
    border: 1px solid var(--color-border-2, #c0c9cbb3) !important;
    /* -moz-border-radius: 4px;
    -o-border-radius: 4px;
    -ms-border-radius: 4px;
    -webkit-border-radius: 4px; */
}

.chat-box-footer-btn>input:focus,
.chat-box-footer-btn>textarea:focus,
textarea:focus,
input:focus {
    outline: 0;
    box-shadow: none !important;
}

.input-with-chatgpt {
    vertical-align: middle;
    line-height: inherit;
    margin: auto;
    align-self: center;
}
</style>