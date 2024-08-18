<template>
  <div class="mainPage" ref="MainRef">
    <!-- <aplayer
        :autoplay="autoplay"
        :music="songInfo"
        :showLrc="showLrc"
        :mutex="mutex"
        :theme="theme"
        :shuffle="shuffle"
        :repeat="repeat"
        :listFolded="listFolded"
        :listMaxHeight="listMaxHeight"
        :list="list"
        :controls="controls"
        :muted="muted"
        :volume="volume"
        :preload="preload"
      ></aplayer> -->
    <div id="aplayer"></div>
  </div>
</template>
   
  <script>
import APlayer from "aplayer"; // 引入音乐插件
import "aplayer/dist/APlayer.min.css"; // 引入音乐插件的样式
import { getOnlineMusic } from "@/api/geekplus/geekplus"
export default {
  name: 'GpPlayer',
  // comments:{
  //   Aplayer
  // },
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    /**
     *  音频配置
     * */
    songInfo: {
      type: Object,
      default: () => {
        return {
          // title: '', //歌曲名称
          // artist: ' ', //演唱者
          // lrc: '', //LRC 歌词或者歌词文件的 URL
          // pic: '', //封面图片 URL
          // src: '' //音频文件的 URL
          name: '东西（Cover：林俊呈）',
          artist: '纳豆',
          url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
          lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
        }
      }
    },
    /**
     *  播放列表。如果 list 不是空数组，播放列表就会显示出来，即使 list 中只有一首歌并且它和 music 一样
     * */
    songList: {
      type: [Array, Object],
      default: () => {
        return [
          {
            name: 'Nightingale',
            artist: 'Tribute-Yanni',
            url: '/prod-api/profile/music/Nightingale.mp3',
            cover: 'http://p1.music.126.net/zTkgNapG5qrxo3AtFBmpWg==/109951163613302296.jpg', // prettier-ignore
            lrc: '',
            theme: "#baf",
          },
          {
            name: 'Go West',
            artist: 'Go West',
            url: '/prod-api/profile/music/go-west.mp3',
            cover: 'https://p2.music.126.net/60ZI2bn3TKEKpfWZFBxcAQ==/2108863302102320.jpg?param=70y70', // prettier-ignore
            lrc: '',
            theme: "#bcd",
          },
          {
            name: 'Ymca',
            artist: 'Y.M.C.A',
            url: '/prod-api/profile/music/ymca.mp3',
            cover: 'https://i.biliimg.com/bfs/im/511e21cfa1377dbbfd966e65cfd92c62b31754ad.jpg@70w_70h_1c.webp', // prettier-ignore
            lrc: '',
            theme: "#abe",
          },
          {
            name: 'With an Orchid',
            artist: 'If I Could Tell You-Yanni',
            url: '/prod-api/profile/music/With%20An%20Orchid.mp3',
            cover: 'http://p1.music.126.net/7fgnozyzD3e-flaQO-W2zQ==/109951164936091373.jpg', // prettier-ignore
            lrc: '',
            theme: "#baf",
          },
          // {
          //   name: '相思引',
          //   artist: '返璞归贞-董贞',
          //   url: 'https://dl.stream.qqmusic.qq.com/C400003C7mG40PGPfB.m4a?guid=8276523190&vkey=4B03A2CC2653FA62169DC7394C0D39C4E3E47F6592F8B1A4A183965B19E9C7D8078C277B39D798CFF3EF7844F6AA100B07FD9BBC58419E25&uin=1789615426&fromtag=120032',
          //   cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000Ij1Fo253u0q_1.jpg', // prettier-ignore
          //   lrc: '',
          //   theme: "#baf",
          // },
          {
            name: '别怕我伤心',
            artist: '张信哲精选-张信哲',
            url: 'https://tyst.migu.cn/public/product5th/product30/2019/03/21/2018%E5%B9%B411%E6%9C%8801%E6%97%A511%E7%82%B925%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AESONY14%E9%A6%96-9/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6005970YSRZ.mp3',
            cover: 'http://p2.music.126.net/D0e4NZrx_0ArL5FhIXpJww==/109951163511560406.jpg', // prettier-ignore
            lrc: '',
            theme: "#baf",
          },
          // {
          //   name: '别用下辈子安慰我',
          //   artist: '别用下辈子安慰我-陈瑞',
          //   url: 'https://dl.stream.qqmusic.qq.com/C400000LGbmS09xk5z.m4a?guid=3748726351&vkey=D36D26EE8AFC8EEEE956BA057D3E808152C9B56B196A462F2442DBFF2DEC53B298F63C966DBEA774AE977A4819892936DBC3C2833AEC7DB4&uin=1789615426&fromtag=120032',
          //   cover: 'http://p2.music.126.net/2iRqMm9UphyKWXWekupPtw==/2321069046299896.jpg', // prettier-ignore
          //   lrc: '',
          //   theme: "#baf",
          // },
          {
            name: '一路上小心',
            artist: '一路上小心-吴宗宪',
            url: '/prod-api/profile/music/ylsxx-wzx.mp3',
            cover: 'http://p2.music.126.net/3AvFch348Yr1SoWU61pNeg==/109951165958529596.jpg', // prettier-ignore
            lrc: '',
            theme: "#baf",
          },
          {
            name: '爱情转移(国)',
            artist: 'The 1st Eleven Years 然后呢？-陈奕迅',
            url: 'https://tyst.migu.cn/public/product9th/product44/2021/07/1114/2019%E5%B9%B401%E6%9C%8829%E6%97%A512%E7%82%B930%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E6%AD%A3%E4%B8%9C100%E9%A6%96-6/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6005661HTJA141752.mp3',
            cover: 'http://p1.music.126.net/3Nk9mwa0kMd4tVk4z6jZHQ==/109951167471314777.jpg?param=130y130', // prettier-ignore
            lrc: '',
            theme: "#baf",
          },
          // {
          //   name: '无期',
          //   artist: '无期-光头华夏',
          //   url: 'https://dl.stream.qqmusic.qq.com/C400003BegnA1PQo1s.m4a?guid=5707791120&vkey=7C2DEE16FA3655EFC176DD9F3B688667004A9B8DC0126389667BE5A233ABBF54B657380488D4547CAEDBF2892FFD40534AD0C6F1879B77DE&uin=1789615426&fromtag=120032',
          //   cover: 'http://p1.music.126.net/kFFj2ZXHP_cI_RV8Et7feA==/109951164630675384.jpg', // prettier-ignore
          //   lrc: '',
          //   theme: "#baf",
          // },
          // {
          //   name: '缘尽世间',
          //   artist: '手游《魔天记》主题曲-SNH48',
          //   url: 'https://dl.stream.qqmusic.qq.com/C4000001PaG22XBn3k.m4a?guid=455085974&vkey=4F8F55A927EF9319B00F17B0964B6DC302E5702CD53AD18D1AB74D239E98C37D74EEE3F21CED6B931A22F6E3CACCAF8AB909412A5720FFEB&uin=1789615426&fromtag=120032',
          //   cover: 'http://p1.music.126.net/prj3x9uhtVIFKiBalneWIg==/2532175281754030.jpg', // prettier-ignore
          //   lrc: '',
          //   theme: "#baf",
          // },
          // {
          //   name: '好春光',
          //   artist: '好春光-吴彤',
          //   url: 'https://m10.music.126.net/20230422161125/0a84183da19ded04b68607c063f39f0d/ymusic/1bfc/d672/4d4b/3a67ebdb2dd8aa816f8a19aba910d059.mp3',
          //   cover: 'http://p2.music.126.net/f72rHrToCES-nccfJqGtYA==/5737251673804479.jpg', // prettier-ignore
          //   lrc: '',
          //   theme: "#baf",
          // },
          {
            name: '潮流串烧',
            artist: '六哲原创合集-六哲',
            url: '/prod-api/profile/music/chaoliuchuanshao.mp3',
            cover: 'https://p2.music.126.net/wYBYHLPCLht7pPn261gfjw==/4403544069256437.jpg', // prettier-ignore
            lrc: '',
            theme: "#baf",
          },
          // {
          //   name: '愚爱',
          //   artist: '愚爱-欢子',
          //   url: 'https://dl.stream.qqmusic.qq.com/RS02063nY2B41cf7VF.mp3?guid=5478721657&vkey=7702E481AE86A96E86C4F08B3AA13932A642693EB9BBA53CA141398CD248BF8970C46363D13BC92F25AD6DD0B20232E465E1373C4A5727A5&uin=1789615426&fromtag=120052',
          //   cover: 'http://p2.music.126.net/ANd0gJfHMniMJtgV9ozWiw==/875211255710034.jpg', // prettier-ignore
          //   lrc: '',
          //   theme: "#baf",
          // },
          // {
          //   name: '潇湘子',
          //   artist: '武侠音乐系列之后悔莫及-川井憲次',
          //   url: 'https://dl.stream.qqmusic.qq.com/RS020612grNR2Athdn.mp3?guid=7517951640&vkey=A3057C108FECC7EB9BB69D47A32805A6101ACC35CD4340A48EECED7FE6AFBBCC44052F0731E90C485133AAEBF237A13DD85C1290A457494F&uin=1789615426&fromtag=120052',
          //   cover: 'http://p2.music.126.net/roBz1yE4T86vDBwtZX7bpA==/7790039882793311.jpg', // prettier-ignore
          //   lrc: '',
          //   theme: "#baf",
          // },
        ]
      }
    },
    /**
     *  是否展示歌词
     * */
    showLrc: {
      type: Boolean,
      default: false
    },
    /**
     *  自动播放。如果多个 mutex 播放器设置了 autoplay，只有第一个会自动播放
     * */
    autoplay: {
      type: Boolean,
      default: false
    },
    /**
     *  显示原生 audio 元素（在播放器面板和播放列表面板之间）
     * */
    controls: {
      type: Boolean,
      default: false
    },
    /**
     *  静音
     * */
    muted: {
      type: Boolean,
      default: false
    },
    /**
     *  是否在该播放器播放时暂停其他播放器
     * */
    mutex: {
      type: Boolean,
      default: true
    },
    /**
     *  随机播放
     * */
    shuffle: {
      type: Boolean,
      default: false
    },
    /**
    *  默认收起播放列表
    * */
    listFolded: {
      type: Boolean,
      default: false
    },
    /**
     *  主题色。如果当前歌曲也设置了 theme 则以歌曲的为准
     * */
    theme: {
      type: String,
      default: '#41b883'
    },
    /**
     *  轮播模式。值可以是 'repeat-one'（单曲循环）'repeat-all'（列表循环）或者 'no-repeat'（不循环）。
     *  为了好记，还可以使用对应的 'music' 'list' 'none'
     * */
    repeat: {
      type: String,
      default: 'no-repeat'
    },
    /**
     * 播放列表面板最大高度
     * */
    listMaxHeight: {
      type: String,
      default: ''
    },
    /**
     * 加载音乐的方式可以是“none”“metadata”或“auto”
     * */
    preload: {
      type: String,
      default: 'none'
    },
    /**
     * 播放音量
     * */
    volume: {
      type: Number,
      default: 0.8
    },

  },
  watch: {},
  data() {
    return {
      audio: [ // 歌曲列表
        // {
        //   name: "画心",
        //   artist: "张靓颖-画心",
        //   url:
        //     "https://dl.stream.qqmusic.qq.com/C400001KKpDp1OL8UX.m4a?guid=9869214230&vkey=2CC6FECD27B91E1E516DE80ADAFD0BC2E1C9ACF5ADFDE54A4070D91117B9F6E49106C93DA7FECABC65BA10DAA4FE495EA24D534D9CFB326C&uin=1789615426&fromtag=120032",
        //   cover: "http://p1.music.126.net/9YeRLbaJmAc3FiHRxJXxzw==/109951165641456869.jpg",
        //   lrc: "",
        //   theme: "#345566",
        // },
      ],
      info: {
        // fixed: true, // 不开启吸底模式
        mini: false,//mini迷你模式
        listFolded: true, // 折叠歌曲列表
        autoplay: false, // 开启自动播放
        preload: "auto", // 自动预加载歌曲
        loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
        order: "list", //  播放模式，list列表播放, random随机播放
        productionTip: false,
      },
    }
  },
  created() {
    //this.getRemoteMusic();
  },
  async mounted() {
    let _this=this;
    await this.getRemoteMusic();
    //await this.initAPlayer();
  },
  methods: {
    getAudioList(res){
      this.audio=res.data;
      this.initAPlayer();
    },
    //创建一个播放器
    async initAPlayer() {
      let _this=this;
      const ap = new APlayer({
        container: document.getElementById("aplayer"),
        audio: _this.audio, // 音乐信息
        ..._this.info, // 其他配置信息
      });
    },
    async getRemoteMusic() {
      // setTimeout(
      //   function() {
      //     //console.log( "Timeout executed", Date.now() );
      //   },
      //   5000
      // );
      let _this=this;
      await getOnlineMusic()
      .then(_this.getAudioList)
    }
  },
  beforeDestroy() {
  }

}
  </script>
   
  <style lang="scss" scoped>
/*.mainPage{
      //@include wh(100%,84px);
      background: #FCFCFC;
      border: 1px solid #E0E0E0;
      border-radius: 4px;
   
    }*/

.mainPage {
  width: 100%;
  height: fit-content;
  #aplayer {
    width: 300px; // 定个宽度
  }
}
</style>