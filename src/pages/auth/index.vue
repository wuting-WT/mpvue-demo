<template>
  <div class="auth">
    <div class="avatar">
      <open-data  type="userAvatarUrl"></open-data>
    </div>
    <div class="username">
      <open-data  type="userNickName"></open-data>
    </div>
    <!-- 需要使用 button 来授权登录 -->
    <button class="getUserInfo" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
    <div class="tips">请升级微信版本</div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { FETCH_USER } from '@/stores/mutation-types'
import { goTo } from '@/utils'
export default {
  created () {
    console.log(this)
  },
  methods: {
    bindGetUserInfo: function (e) {
      if (e.target.errMsg === 'getUserInfo:ok') {
        this.getUser(e.target)
        goTo({
          url: 'page/index/main',
          type: 'navBack'
        })
      }
    },
    ...mapMutations('auth', {
      getUser: FETCH_USER
    })
  }
}
</script>
<style lang="scss" scoped>
  .auth {
    background-color: #fff;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 50px auto 0 auto;
    }

    .username {
      margin: 0 auto;
      text-align: center;
    }

    .getUserInfo {
      margin: 30px auto;
      color: #f2f2f2;
      background-color: #52a6c1;
    }

    .tips {
      text-align: center;
    }
  }
</style>