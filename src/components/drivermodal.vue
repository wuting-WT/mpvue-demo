<template>
    <div class="container">
        <div class="driverModal">
            <form action="">
                <div class="usernameContainer">姓名:
                    <div class="username"><input type="text" placeholder="请填写您的姓名"></div>
                </div>
                <div class="adressContainer">地址:
                    <div class="adress"><input type="text" placeholder="请填写您的位置"></div>
                </div>
                <div class="adressContainer">联系方式:
                    <div class="adress"><input type="text" placeholder="请填写您的联系方式"></div>
                </div>
                <div>地址:<input type="text" placeholder="请填写您的位置"></div>
                <div>联系方式:<input type="text" placeholder="请填写您的联系方式"></div>
                <div class="form-btn">
                    <button class="singUp" type="primary">报名</button>
                    <button class="reset" type="primary">重置</button>
                </div> 
            </form>
        </div>
    </div>
</template>
<script>
export default {
  created () {
    console.log('modal created')
  },
  data () {
  }
}
</script>
<style lang="scss" scoped>
    .container {
        position: fixed;
        display: flex;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, .3);
        .driverModal {
            width: 80%;
            background-color: #fff;
            
        }
    }
</style>