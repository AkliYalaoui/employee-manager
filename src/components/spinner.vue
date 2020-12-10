<template>
  <div class="container">
      <p>Please Wait ...</p>
      <div class="spinner-container">
        <div class="first"></div>
        <div class="second"></div>
        <div class="third"></div>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .container{
    margin: 100px auto 0;
    width: 120px;
    height: 100px;
  }
  p{
    margin-bottom: 20px;
  }
  .spinner-container{
    position: relative;
    margin: 10px auto;
  }
  .first,
  .second,
  .third{
    position: absolute;
    border-radius: 50%;
    animation: load 1s linear infinite;
    transition: transform .5s;
  }
  .first{
    top: 10px;
    left: 10px;
    height: 50px;
    width: 50px;
    border-top: 1px solid var(--main-color);
  }
  .second{
    top: 0;
    left: 0;
    height: 70px;
    width: 70px;
    border-right: 1px solid var(--main-color);
  }
  .third{
    top: -10px;
    left: -10px;
    height: 90px;
    width: 90px;
    border-bottom: 1px solid var(--main-color);
  }
  @keyframes load{
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>