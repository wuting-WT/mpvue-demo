<template>
  <div class="container">
     <sliders :data="sliders"/>
     <jobs :jobs="jobs" :applyJobs="applyJobs"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { goTo, wxStorage } from '@/utils'
import { FETCH_JOBS, APPLY_JOBS } from '@/stores/mutation-types'
import sliders from '@/components/sliders'
import navbar from '@/components/navbar'
import jobs from '@/components/jobs'

export default {
  created () {
    this.getJobs()
  },
  mounted () {
    wxStorage({
      key: 'user'
    }, 'get').then(res => {
      console.log(!res.data.openId)
      if (res.errMsg === 'getStorage:ok' && !res.data.openId) {
        goTo({
          url: '/pages/auth/main'
        })
      }
    }).catch(e => goTo({
      url: '/pages/auth/main'
    }))
  },
  data () {
    return {
      sliders: [
        {
          id: 1,
          url: 'wwww.google.com',
          img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJlnJ4TOIAyeVAJqtjV-XTiAAAgzDAE7v40Amq2l708.jpg'
        },
        {
          id: 2,
          url: 'wwww.google.com',
          img: 'http://pic.qiantucdn.com/58pic/17/86/50/76c58PICbVx_1024.jpg!qt324'
        },
        {
          id: 3,
          url: 'wwww.google.com',
          img: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg'
        }
      ]
    }
  },
  computed: {
    ...mapState('jobs', {
      jobs: state => state.jobs
    })
  },
  methods: {
    ...mapActions('jobs', {
      getJobs: FETCH_JOBS,
      applyJobs: APPLY_JOBS
    })
  },
  components: {
    sliders,
    navbar,
    jobs
  },
  async onPullDownRefresh () {
    console.log('hasupdated')
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
    console.log('loadmore')
  }
}
</script>
<style lang="scss" scoped>
  .container {
    color: #757575;
  }
</style>
