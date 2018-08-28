<template>
  <div class="jobsContainer">
    <job v-for="item in jobs" :key="item.id" />
  </div>
</template>
<script>
import job from '@/components/job'
export default {
  props: {
    jobs: {
      type: Array,
      default: []
    }
  },
  components: [
    job
  ]
}
</script>
<style lang="scss" scoped>
</style>