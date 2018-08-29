<template>
  <div class="jobsContainer">
    <job v-for="item in jobs" :key="item.id" :job="item"/>
  </div>
</template>
<script>
import job from '@/components/job'
export default {
  created () {
    console.log(this.jobs)
  },
  props: {
    jobs: {
      type: Array,
      default: []
    }
  },
  components: {
    job
  }
}
</script>
<style lang="scss" scoped>
  .jobsContainer {
    margin-bottom: 60px;
  }
</style>