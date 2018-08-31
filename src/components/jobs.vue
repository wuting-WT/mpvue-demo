<template>
  <div class="jobsContainer">
    <div v-for="(item, index) in jobs" :key="index" class="job">
        <div class="job-base">
            <span class="name">{{item.name}}</span>
            <span class="price">￥{{item.price}}/天</span>
        </div>
        <div class="job-place">
            <span>{{item.place}}</span>
            <span><span>{{item.apply_num}}</span>/{{item.expected_num}}</span>
        </div>
        <div class="job-extra">
            <div class="introduction">
                <span>简介：</span>
                {{item.introduction}}
            </div>
            <button :disabled="false" type="primary" class="apply">申请</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.jobs)
  },
  props: {
    jobs: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>
  .jobsContainer {
    background-color: #f2f2f2;
    .job {
        margin: 20px auto;
        padding: 5px 15px;
        font-size: 16px;
        color: #757575;
        background-color: #fff;
        box-shadow: 0 5px 25px #eceef0;
        .job-base {
            display: flex;
            justify-content: space-between;
            .name {
                font-size: 25px;
                font-weight: bold;
            }
            .price {
                margin-top: 10px;
            }
        }
        .job-place {
            margin: 10px 0 15px 0;
            display: flex;
            justify-content: space-between;
        }
        .job-extra {
            position: relative;
            width: 100%;
            min-height: 40px;
            .introduction {
                margin-right: 90px;
            }
            .apply {
                position: absolute;
                right: 0;
                top: 0;
                width: 80px;
                height: 30px;
                line-height: 30px;
                font-size: 16px;
                background-color: rgb(82, 166, 193);
            }
        }
    }
  }
</style>