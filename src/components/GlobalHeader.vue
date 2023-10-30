<template>
  <a-row id="globalHeader" class="grid-demo" align="center" :wrap="false">
    <a-col flex="auto">
      <div>
        <div class="menu-demo">
          <a-menu
            mode="horizontal"
            :selected-keys="selectedKeys"
            @menu-item-click="doMenuClick"
          >
            <a-menu-item
              key="0"
              :style="{ padding: 0, marginRight: '38px' }"
              disabled
            >
              <div class="title-bar">
                <img class="logo" src="../assets/1.png" />
                <div class="title">QUAN OJ</div>
              </div>
            </a-menu-item>
            <a-menu-item v-for="item in visibleRoutes" :key="item.path">
              {{ item.name }}
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? " 未登录 " }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import AccessEnum from "@/access/accessEnum";

const router = useRouter();
const route = useRoute();
const store = useStore();
const selectedKeys = ref(["/"]);

const loginUser = store.state.user.loginUser;

const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (!checkAccess(loginUser, item?.meta?.access as string)) {
      return false;
    }
    return true;
  });
});
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "管理员",
    userRole: AccessEnum.ADMIN,
  });
}, 3000);

router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.menu-demo {
}

.logo {
  height: 40px;
}

.title {
  margin-top: 10px;
  color: #444444;
  margin-left: 20px;
}

.title-bar {
  display: flex;
  align-content: center;
}
</style>
