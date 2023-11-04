<template>
  <div id="layout-demo">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">QUAN OJ BY WYQ</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import GlobalHeader from "@/components/GlobalHeader.vue";

export default {
  name: "BasicLayout",
  components: { GlobalHeader },
};
</script>

<style scoped>
#layout-demo {
}

#layout-demo .content {
  background: linear-gradient(to right, #eee, #fff);
  margin-bottom: 16px;
}

#layout-demo .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 2px 5px;
}

#layout-demo .footer {
  background-color: #42b983;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
