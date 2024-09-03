<template>
  <!-- 轮播图 -->
  <div class="plus-banner">
    <div class="plus-banner-container">
        <!-- 轮播(Carousel)项目 -->
        <ol class="plus-banner-indicators">
            <li 
                v-for="(item, index) in slideList"
                :key="index"
                class="plus-banner-point no-active"
                :data-slide-to="index"
            ></li>
        </ol>
        <div class="plus-banner-content-inner">
            <div
                v-for="(item, index) in slideList"
                :key="index"
                class="plus-banner-content no-active"
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
        //轮播图容器
        const bannerContainer = document.querySelector('.plus-banner-container');
        //轮播图内部容器
        const bannerImgInner = document.querySelector('.plus-banner-content-inner');
        //所有轮播图
        const bannerImages = document.querySelectorAll('.plus-banner-content');
        //轮播提示，也就是轮播图下面的变换点
        const pointsContainer = document.querySelector('.plus-banner-indicators');
        //所有的轮播指示点
        const bannerPoints = document.querySelectorAll('.plus-banner-point');
        //轮播左滑箭头
        const arrowLeft = document.querySelector('.plus-banner-arrow-left');
        //轮播右滑箭头
        const arrowRight = document.querySelector('.plus-banner-arrow-right');
        //当前轮播图索引序号
        let currentImageIndex = 0;

        // 定义一个标志变量来控制是否继续执行
        let intervalSlideId;
        //是否正在滑动轮播图
        let isSlideRunning = false;

        // 设置初始轮播图
        updateBanner();

        //开始定时轮播
        startIntervalSlide();

        //点击轮播点，切换轮播图
        bannerPoints.forEach((item, index) => {
            item.addEventListener('click', () => {
                // bannerPoints[currentImageIndex].classList.add("no-active");
                // bannerImages[currentImageIndex].classList.add("no-active");
                // currentImageIndex = index;
                toRightSlideBanner(index);
                updateBanner();
            });
        });

        // 处理左右箭头点击事件
        arrowLeft.addEventListener('click', () => {
            // 这里是定期执行的代码
            // bannerPoints[currentImageIndex].classList.add("no-active");
            // bannerImages[currentImageIndex].classList.add("no-active");
            // currentImageIndex = (currentImageIndex - 1 + bannerImages.length) % bannerImages.length;
            toLeftSlideBanner();
            updateBanner();
        });

        arrowRight.addEventListener('click', () => {
            // bannerPoints[currentImageIndex].classList.add("no-active");
            // bannerImages[currentImageIndex].classList.add("no-active");
            // currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
            toRightSlideBanner();
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
                    // bannerPoints[currentImageIndex].classList.add("no-active");
                    // bannerImages[currentImageIndex].classList.add("no-active");
                    // currentImageIndex = (currentImageIndex - 1 + bannerImages.length) % bannerImages.length;
                    toLeftSlideBanner();
                } else {
                    // bannerPoints[currentImageIndex].classList.add("no-active");
                    // bannerImages[currentImageIndex].classList.add("no-active");
                    // currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
                    toRightSlideBanner();
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
                    // bannerPoints[currentImageIndex].classList.add("no-active");
                    // bannerImages[currentImageIndex].classList.add("no-active");
                    // currentImageIndex = (currentImageIndex - 1 + bannerImages.length) % bannerImages.length;
                    toLeftSlideBanner();
                } else {
                    // bannerPoints[currentImageIndex].classList.add("no-active");
                    // bannerImages[currentImageIndex].classList.add("no-active");
                    // currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
                    toRightSlideBanner();
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
                    // bannerPoints[currentImageIndex].classList.add("no-active");
                    // bannerImages[currentImageIndex].classList.add("no-active");
                    // currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
                    toRightSlideBanner();
                    updateBanner();
                }
            }, 5000); // 间隔时间为4000毫秒
        }
        
        // 暂停执行定时轮播
        function stopIntervalSlide() {
            isSlideRunning = false;
            clearInterval(intervalSlideId);
        }

        //向左滑动更新图片和索引
        function toLeftSlideBanner(index = null) {
            // 这里是定期执行的代码
            bannerPoints[currentImageIndex].classList.add("no-active");
            bannerImages[currentImageIndex].classList.add("no-active");
            currentImageIndex = (currentImageIndex - 1 + bannerImages.length) % bannerImages.length;
            if(index != null && typeof index == 'number') {
                currentImageIndex = index;
            }
        }

        //向右滑动更新图片和索引
        function toRightSlideBanner(index = null) {
            // 这里是定期执行的代码
            bannerPoints[currentImageIndex].classList.add("no-active");
            bannerImages[currentImageIndex].classList.add("no-active");
            currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
            if(index != null && typeof index == 'number') {
                currentImageIndex = index;
            }
        }

        // 更新轮播图，添加css类，包括动画等
        function updateBanner() {
            bannerPoints[currentImageIndex].classList.remove("no-active");
            // bannerPoints[currentImageIndex].style.transform = `translateX(-${currentImageIndex * 20}px)`;
            // bannerImages[currentImageIndex].style.left = `${currentImageIndex * 100}%`;
            bannerImages[currentImageIndex].classList.remove("no-active");
            // var transformDis= Math.round(100%bannerImages.length);
            bannerImgInner.style.transform = `translateX(-${bannerImages[currentImageIndex].offsetLeft}px)`;
            // bannerImgInner.style.transform = `translateX(-${currentImageIndex * transformDis}%)`;
            // bannerImgInner.style.transform = `translateX(-${currentImageIndex * 100}%)`;
            // bannerContainer.style.transform = "translate3d(0, 0, 0)";
            // bannerContainer.style.transition = "transform 0.6s ease-in-out";
        }
    }
}
</script>

<style scoped>
/* 轮播图 */
@keyframes slide {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
}

.plus-banner {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
}

.plus-banner img {
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.plus-banner-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    -ms-touch-action: pan-Y;
    touch-action: manipulation;
}

.plus-banner-content-inner {
    user-select: none;
    transition: transform 0.5s ease-in-out;
    overflow: hidden;
}

.plus-banner-indicators{
    background: transparent;
    position: absolute;
    bottom: 10px;
    z-index: 15;
    width: 100%;
    padding-left: 0;
    text-align: center;
    list-style: none;
    margin: 0;
}

.plus-banner-indicators .plus-banner-point {
    list-style: inside;
    width: 20px;
    height: 10px;
    margin: 1px 2px;
    background-color: #fff;
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 10px;
    transition: transform 0.3s ease 0s;
}

.plus-banner-indicators .plus-banner-point.no-active {
    list-style: circle;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1px 2px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #000 \9;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    border-radius: 10px;
    transition: transform 0.3s ease 0s;
}

@media screen and (min-width: 1300px) {
    .plus-banner-content-inner {
        height: 520px;
    }
}
@media screen and (min-width: 768px) {
    .plus-banner-content-inner {
        height: 380px;
    }
}
@media screen and (max-width: 767px)  {
    .plus-banner-content-inner {
        height: 300px;
    }
}
@media screen and (max-width: 520px)  {
    .plus-banner-content-inner {
        height: 170px;
    }
}

.plus-banner-content{
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    /* padding-bottom: 43%;*/ /* 设置padding-bottom为宽度的20%，保持宽高比 */
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    -o-object-position: center;
    object-position: center;
    -o-object-fit: cover;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
}

.plus-banner-content.no-active {
    display: none;
    /* position: absolute;
    opacity: 0;
    transition: opacity 0.5s ease-in-out; */
}

.plus-banner-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
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
    font-size: 13px;
}

.plus-banner-caption p {
    margin: 0;
    padding: 0;
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