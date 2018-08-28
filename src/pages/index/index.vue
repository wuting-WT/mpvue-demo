<template>
  <div class="cotainer">
    <swiper :data="sliders"/>
    <navbar/>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import navbar from '@/components/navbar'

export default {
  data () {
    return {
      sliders: [
        {
          url: 'wwww.google.com',
          img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJlnJ4TOIAyeVAJqtjV-XTiAAAgzDAE7v40Amq2l708.jpg'
        },
        {
          url: 'wwww.google.com',
          img: 'http://pic.qiantucdn.com/58pic/17/86/50/76c58PICbVx_1024.jpg!qt324'
        },
        {
          url: 'wwww.google.com',
          img: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg'
        }
      ]
    }
  },

  components: {
    swiper,
    navbar
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
