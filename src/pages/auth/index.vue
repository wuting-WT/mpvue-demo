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
    <div class="merchant">
      <a :href="'/pages/merchant/main'">
        <div>商家入口</div>
        <span class="iconfont icon-you"></span>
      </a> 
    </div>
  </div>
</template>
<script>
import { goTo, login, wxStorage, post, basehost } from '@/utils'
export default {
  created () {

  },
  methods: {
    bindGetUserInfo: function (e) {
      login({
        timeout: 1000
      }).then(data => {
        if (data.errMsg === 'login:ok' && e.target.errMsg === 'getUserInfo:ok') {
          const params = {
            code: data.code,
            encryptedData: e.target.encryptedData,
            iv: e.target.iv
          }
          post(`${basehost}/api/user`, {...params}).then(data => wxStorage({
            key: 'user',
            data: {
              openId: data.openId,
              nickName: data.nickName,
              avatar: data.avatarUrl
            }
          }, 'set'))
          goTo({
            url: 'page/index/main',
            type: 'navBack'
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../icons/iconfont.css';
  .auth {
    background-color: #fff;

    .avatar {
      width: 50px;
      height: 50px;
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
    .merchant {
      display: flex;
      margin-top: 10px;
      justify-content: center;
      align-items: center;
      color: #757575;
      font-size: 16px;
      div {
        display: inline-block;
      }
      span {
        font-size: 14px;
      }
    }
  }
</style>