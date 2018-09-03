<template>
    <div class="driverContainer">
      <sliders :data="sliders"/>
      <drivermodal />
    </div>
</template>
<script>
import sliders from '@/components/sliders'
import drivermodal from '@/components/drivermodal'
export default {
  created () {
    console.log('created')
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
  components: {
    sliders,
    drivermodal
  }
}
</script>
<style lang="scss" scoped>
</style>