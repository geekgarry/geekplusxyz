<template>
  <!-- 轮播图 -->
  <div class="plus-banner">
    <div class="plus-banner-container">
        <!-- 轮播(Carousel)项目 -->
        <div
            v-for="(item, index) in slideList"
            :key="index"
            class="item plus-banner-content no-active"
            :style="{ backgroundImage: 'url('+ item.carouselImg + ')' }"
            >
            <!-- <img :src="item.carouselImg" :alt="item.carouselTitle"> -->
            <a target="_blank" :href="item.carouselLink">
                <div class="plus-banner-caption">
                <h5 class="hidden-sm hidden-xs">
                    {{ item.carouselInfo ? item.carouselInfo : "设计轮播图效果" }}
                </h5>
                <p>{{ item.carouselTitle }}</p>
                </div>
            </a>
        </div>
    </div>
    <span class="plus-banner-arrow plus-banner-arrow-left">
        <i class="fas fa-chevron-left">&lt;</i>
    </span>
    <span class="plus-banner-arrow plus-banner-arrow-right">
        <i class="fas fa-chevron-right">&gt;</i>
    </span>
    </div>
</template>

<script>
export default {
    name: "SlideBanner",
    props: {
        //首页轮播图数据
        slideList: {
            type: [Array, Object],
            default: function () {
                return this.imgList;
            },
        },
    },
    data(){
        return {
            imgList: [
                {
                carouselImg: "/imgs/superSlide/images/11.jpg",
                carouselInfo: "",
                carouselLink: "#",
                carouselTitle: "111",
                },
                {
                carouselImg: "/imgs/superSlide/images/22.jpg",
                carouselInfo: "",
                carouselLink: "#",
                carouselTitle: "222",
                },
                {
                carouselImg: "/imgs/superSlide/images/33.jpg",
                carouselInfo: "",
                carouselLink: "#",
                carouselTitle: "333",
                },
            ],
            baseHost:window.location.host,
            baseApi:process.env.VUE_APP_BASE_API
        };
    },
    created(){

    },
    mounted(){
        const bannerContainer = document.querySelector('.plus-banner-container');
        const bannerImages = document.querySelectorAll('.plus-banner-content');
        const arrowLeft = document.querySelector('.plus-banner-arrow-left');
        const arrowRight = document.querySelector('.plus-banner-arrow-right');
        let currentImageIndex = 0;

        // 定义一个标志变量来控制是否继续执行
        let intervalSlideId;
        let isSlideRunning = false;

        // 设置初始 translateX 值
        updateBanner();

        startIntervalSlide();

        // 处理左右箭头点击事件
        arrowLeft.addEventListener('click', () => {
            bannerImages[currentImageIndex].classList.add("no-active");
            currentImageIndex = (currentImageIndex - 1 + bannerImages.length) % bannerImages.length;
            updateBanner();
        });

        arrowRight.addEventListener('click', () => {
            bannerImages[currentImageIndex].classList.add("no-active");
            currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
            updateBanner();
        });

        // 处理触摸滑动事件
        let mouseStartX = 0;
        bannerContainer.addEventListener('mousedown', (e) => {
            stopIntervalSlide();
            mouseStartX = e.clientX;
        });

        bannerContainer.addEventListener('mouseup', (e) => {
            startIntervalSlide();
            const mouseEndX = e.clientX;
            const deltaX = mouseEndX - mouseStartX;

            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    bannerImages[currentImageIndex].classList.add("no-active");
                    currentImageIndex = (currentImageIndex - 1 + bannerImages.length) % bannerImages.length;
                } else {
                    bannerImages[currentImageIndex].classList.add("no-active");
                    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
                }
                updateBanner();
            }
        });

        // 处理触摸滑动事件
        let touchStartX = 0;
        bannerContainer.addEventListener('touchstart', (e) => {
            stopIntervalSlide();
            touchStartX = e.touches[0].clientX;
        });

        bannerContainer.addEventListener('touchend', (e) => {
            startIntervalSlide();
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;

            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    bannerImages[currentImageIndex].classList.add("no-active");
                    currentImageIndex = (currentImageIndex - 1 + bannerImages.length) % bannerImages.length;
                } else {
                    bannerImages[currentImageIndex].classList.add("no-active");
                    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
                }
                updateBanner();
            }
        });

        // 开始执行
        function startIntervalSlide() {
            isSlideRunning = true;
            intervalSlideId = setInterval(function() {
                if (isSlideRunning) {
                    // 这里是定期执行的代码
                    bannerImages[currentImageIndex].classList.add("no-active");
                    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
                    updateBanner();
                }
            }, 5000); // 间隔时间为4000毫秒
        }
        
        // 暂停执行
        function stopIntervalSlide() {
            isSlideRunning = false;
            clearInterval(intervalSlideId);
        }

        // 更新轮播图
        function updateBanner() {
            // bannerImages[currentImageIndex].style.left = `${currentImageIndex * 100}%`;
            bannerImages[currentImageIndex].classList.remove("no-active");
            // bannerContainer.style.transform = `translateX(-${currentImageIndex * 100}%)`;
            // bannerContainer.style.transform = "translate3d(0, 0, 0)";
            // bannerContainer.style.transition = "transform 0.6s ease-in-out";
        }
    }
}
</script>

<style scoped>
/* 轮播图 */

.plus-banner {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
}

.plus-banner img {
    width: 100%;
    height: 100%;
}

.plus-banner-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.plus-banner-content{
    width: 100%;
    height: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    -o-object-position: center;
    object-position: center;
    -o-object-fit: cover;
    object-fit: cover;
}

.plus-banner-content.no-active {
    display: none;
}

.plus-banner-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
}

.plus-banner-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.25);
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
}

.plus-banner-arrow:hover {
    background-color: rgba(0, 0, 0, 0.7);
}

.plus-banner-arrow-left {
    left: 10px;
}

.plus-banner-arrow-right {
    right: 10px;
}
</style>