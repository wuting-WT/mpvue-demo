<template>
  <div class="navContainer">
    <a :href="'/pages/index/main'" hover-class="navigator-hover">
    <i class="icon jobs"></i>
    </a>
    <a :href="'/pages/driver/main'" hover-class="navigator-hover">
    <i class="icon drivers"></i>
    </a>
    <a :href="'/pages/lost/main'" hover-class="navigator-hover">
    <i class="icon thing"></i>
    </a>
    <a :href="'/pages/user/main'" hover-class="navigator-hover">
    <i class="icon me"></i>
    </a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .navContainer {
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    bottom: 0;
    align-items: center;
    justify-content: space-around;
    background-color:rgba(248, 248, 255, .5);
  }

  .icon {
    display: inline-block;
    width: 35px;
    height: 35px;
  }
  
  .jobs {
    background: url('../../resource/icons/job.png') no-repeat;
    background-size: 100% 100%;
  }

  .drivers {
    background: url('../../resource/icons/drivers.png') no-repeat;
    background-size: 100% 100%;
  }

  .thing {
    background: url('../../resource/icons/things.png') no-repeat;
    background-size: 100% 100%;
  }

  .me {
    background: url('../../resource/icons/me.png') no-repeat;
    background-size: 100% 100%;
  }
</style>
