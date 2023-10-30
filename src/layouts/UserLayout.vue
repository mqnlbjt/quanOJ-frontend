<template>
  <div id="userLayout">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/1.png" class="logo" />
          <div>QUAN OJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">QUAN OJ BY WYQ</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
};
</script>

<style scoped>
#userLayout {
  text-align: center;
}

#userLayout .logo {
  width: 64px;
  height: 64px;
}

#userLayout .content {
  background: linear-gradient(to right, #eee, #fff);
  margin-bottom: 16px;
}

#userLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 2px 5px;
}

#userLayout .footer {
  background-color: #42b983;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
