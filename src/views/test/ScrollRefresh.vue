<template>
    <div class="index" style="background:#045654;">
        <my-scroll  ref="myScroll" :page="page" :on-refresh="onRefresh" :on-pull="onPull"  :get-scroll-top="getTop">
        <div slot="scrollList">
            <ul>
                <li v-for="(x,index) in list" :key="index">列表{{ index }}</li>
            </ul>
        </div>
        </my-scroll>
    </div>
</template>
<script>
    import myScroll from '@/components/refresh/ScrollRefresh.vue'
    export default {
        data(){
            return{
                list:[],
                page:{
                    counter:1,  
                    pageStart:1,  
                    pageEnd:1,  
                    total:10
                },
            }
        },
        methods:{
            onRefresh(mun){ //刷新回调
                    setTimeout(()=>{
                        this.$refs.myScroll.setState(3);
                    },500)
            },
            onPull(mun){ //加载回调
                if(this.page.counter<=this.page.total){
                    setTimeout(()=>{
                        this.page.counter++
                        this.$refs.myScroll.setState(5)
                        for(let i=0;i<10;i++){
                            this.list.push({})
                        }
                    },500)
                }else{
                    this.$refs.myScroll.setState(7)
                }
            },
            getTop(y) {//滚动条位置

            },

        },
        components:{
            myScroll
        },
        created(){

        },
        mounted(){
            for(let i=0;i<1*20;i++){
                this.list.push({})
            }

        },

    }
</script>
<style lang="scss" scoped>
    .index{

    }
</style>
