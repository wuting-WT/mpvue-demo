<template>
    <div class="job">
        <div class="job-base">
            <span class="name">{{job.name}}</span>
            <span class="price">￥{{job.price}}/天</span>
        </div>
        <div class="job-place">
            <span>{{job.place}}</span>
            <span><span>{{job.apply_num}}</span>/{{job.expected_num}}</span>
        </div>
        <div class="job-extra">
            <div class="introduction">
                <span>简介：</span>
                {{job.introduction}}
            </div>
            <button class="apply" type="primary">申请</button>
        </div>
    </div>                   
</template>
<script>
export default {
  created () {
    console.log(this.job)
  },
  props: ['job']
}
</script>
<style lang="scss" scoped>
    .job {
        margin: 10px auto;
        padding: 5px 15px;
        color: #757575;
        font-size: 16px;
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
                background-color: rgb(82, 166, 193);
            }
        }
    }
</style>


