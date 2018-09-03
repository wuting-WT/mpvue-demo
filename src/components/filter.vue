<template>
    <div class="filterContainer">
        <div @click="timeSort" class="filter">发布时间
            <span :class="{
            'iconfont': true,
            'icon-shang': true,
            'transform0' : timeFilter === 'rise',
            'transform180': timeFilter === 'drop' }">
            </span>
        </div>
        <span class="line"></span>
        <div @click="personSort" class="filter">剩余人数<span :class="{
            'iconfont': true,
            'icon-shang': true,
            'transform0' : personFilter === 'rise',
            'transform180': personFilter === 'drop' }"></span></div>
        <span class="line"></span>
        <div @click="priceeSort" class="filter">预计酬劳<span :class="{
            'iconfont': true,
            'icon-shang': true,
            'transform0' : priceFilter === 'rise',
            'transform180': priceFilter === 'drop' }"></span></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      timeFilter: '',
      personFilter: '',
      priceFilter: ''
    }
  },
  props: {
    filterOption: {
      type: Array,
      default: []
    }
  },
  methods: {
    timeSort: function (e) {
      if (this.timeFilter === '') {
        this.timeFilter = 'rise'
      } else if (this.timeFilter === 'rise') {
        this.timeFilter = 'drop'
      } else if (this.timeFilter === 'drop') {
        this.timeFilter = 'rise'
      }
      this.personFilter = ''
      this.priceFilter = ''
    },
    personSort: function (e) {
      if (this.personFilter === '') {
        this.personFilter = 'rise'
      } else if (this.personFilter === 'rise') {
        this.personFilter = 'drop'
      } else if (this.personFilter === 'drop') {
        this.personFilter = 'rise'
      }
      this.timeFilter = ''
      this.priceFilter = ''
    },
    priceeSort: function (e) {
      if (this.priceFilter === '') {
        this.priceFilter = 'rise'
      } else if (this.priceFilter === 'rise') {
        this.priceFilter = 'drop'
      } else if (this.priceFilter === 'drop') {
        this.priceFilter = 'rise'
      }
      this.timeFilter = ''
      this.personFilter = ''
    }
  }
}
</script>
<style lang="scss" scoped>
    @import '../icons/iconfont.css';
    .filterContainer {
        display: flex;
        margin-top: 5px;
        height: 40px;
        background-color: #fff;
        align-items: center;
        justify-content: space-around;
        .filter {
            font-size: 16px;
            height: 30px;
            line-height: 30px;
            span {
                display: inline-block;
                font-size: 15px;
                transition:  all .5s;
            }
        }
    }
    .line {
        display: inline-block;
        width: 1px;
        height: 20px;
        background-color: #757575;
    }

    .transform180 {
        color: rgb(82, 166, 193);
        transform: rotate(-180deg)
    }

    .transform0 {
        color: rgb(82, 166, 193);
        transform: rotate(0deg)
    }
</style>