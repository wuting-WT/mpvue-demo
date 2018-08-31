<template>
  <div class="container">
     <sliders :data="sliders"/>
     <!-- <navbar/> -->
     <jobs :jobs="jobs"/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { FETCH_JOBS } from '@/stores/mutation-types'
import sliders from '@/components/sliders'
import navbar from '@/components/navbar'
import jobs from '@/components/jobs'

export default {
  created () {
    console.log(this)
    this.getJobs()
  },
  computed: {
    ...mapState('jobs', {
      jobs: state => state.jobs
    }),
    ...mapGetters([
      'getIsAuth'
    ])
  },
  mounted () {
    wx.navigateTo({
      url: '/pages/auth/main',
      fail: e => console.log(e)
    })
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
  methods: {
    ...mapActions('jobs', {
      getJobs: FETCH_JOBS
    })
  },
  components: {
    sliders,
    navbar,
    jobs
  }
}
</script>
<style lang="scss" scoped>
</style>
