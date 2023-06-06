<template>
  <nav aria-label="Page navigation" v-if="total != 0">
    <ul class="pagination">
      <li v-if="pageNum != 1" :class="pageNum == 1 ? 'disabled' : ''">
        <a
          href="javascript:void(0);"
          @click="getList(pageNum - 1)"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- Math.ceil(total / pageSize) -->
      <li
        :class="pageNum == pageNumber ? 'active' : ''"
        v-for="(pageNumber, index) in Math.ceil(total / pageSize)"
        :key="index"
      >
        <a
          v-if="pageNum <= 4 && pageNumber <= 9"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="pageNum > 4 && pageNum <= Math.ceil(total / pageSize)-4 && pageNumber == pageNum - 4"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="pageNum > 4 && pageNum <= Math.ceil(total / pageSize)-4 && pageNumber == pageNum - 3"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="pageNum > 4 && pageNum <= Math.ceil(total / pageSize)-4 && pageNumber == pageNum - 2"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="pageNum > 4 && pageNum <= Math.ceil(total / pageSize)-4 && pageNumber == pageNum - 1"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="pageNum > 4 && pageNum <= Math.ceil(total / pageSize)-4 && pageNumber == pageNum"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="pageNum > 4 && pageNum <= Math.ceil(total / pageSize)-4 && pageNumber == pageNum + 1"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="pageNum > 4 && pageNum <= Math.ceil(total / pageSize)-4 && pageNumber == pageNum + 2"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="pageNum > 4 && pageNum <= Math.ceil(total / pageSize)-4 && pageNumber == pageNum + 3"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="pageNum > 4 && pageNum <= Math.ceil(total / pageSize)-4 && pageNumber == pageNum + 4"
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
        <a
          v-if="Math.ceil(total / pageSize) > 9 && pageNum > Math.ceil(total / pageSize)-4 && pageNumber > Math.ceil(total / pageSize)-9 "
          href="javascript:void(0);"
          @click="getList(pageNumber)"
          >{{ pageNumber }}
        </a>
      </li>
      <!-- <li >
            <a v-for="index in Math.ceil(total / pageSize)" :key="index" 
             href="javascript:void(0);" @click="getList(index)">{{index}}
            </a>
          </li> -->
      <!-- <li><a href="javascript:void(0);">2</a></li>
          <li><a href="javascript:void(0);">3</a></li>
          <li><a href="javascript:void(0);">4</a></li>
          <li><a href="javascript:void(0);">5</a></li> -->
      <li
        v-if="pageNum != Math.ceil(total / pageSize)"
        :class="pageNum == Math.ceil(total / pageSize) ? 'disabled' : ''"
      >
        <a
          href="javascript:void(0);"
          @click="getList(pageNum + 1)"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PlusPager",
  props: {
    pluspagerMethod: {
      type: Function,
      default: null,
    },
    total: {
      required: true,
      type: Number,
    },
    pageNum: {
      type: Number,
      default: 1,
    },
    // limit: {
    //   type: Number,
    //   default: 20,
    // },
    pageSize: {
      type: Number,
      default:10,
    //   default() {
    //     return [10, 20, 30, 50];
    //   },
    },
    // layout: {
    //   type: String,
    //   default: "total, sizes, prev, pager, next, jumper",
    // },
    // background: {
    //   type: Boolean,
    //   default: true,
    // },
    // autoScroll: {
    //   type: Boolean,
    //   default: true,
    // },
    // hidden: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {};
  },
  methods: {
    getList(pageNum) {
        if(this.pluspagerMethod) {
            this.pluspagerMethod(pageNum);
        }
    },
  },
};
</script>

<style>
</style>