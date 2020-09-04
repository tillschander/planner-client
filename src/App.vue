<template>
  <div class="min-h-screen bg-secondary">
    <HeaderNavigation />
    <main class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10">
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";

export default {
  name: "App",
  components: {
    HeaderNavigation,
  },
};
</script>
