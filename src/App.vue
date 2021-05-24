<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
body {
  margin: 0;
}

img {
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
</style>