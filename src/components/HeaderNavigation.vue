<template>
  <div>
    <nav class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="space-x-8 flex">
              <router-link
                to="/tasks"
                :class="$route.path.includes('/tasks') ? 'text-white border-white' : 'text-gray-300 border-transparent'"
                class="inline-flex items-center px-1 pt-1 border-b-2  text-sm font-medium leading-5 hover:text-white"
              >Tasks</router-link>
              <router-link
                to="/timetracker"
                :class="$route.path.includes('/timetracker') ? 'text-white border-white' : 'text-gray-300 border-transparent'"
                class="inline-flex items-center px-1 pt-1 border-b-2  text-sm font-medium leading-5 hover:text-white"
              >Timetracker</router-link>
              <router-link
                to="/invoices"
                :class="$route.path.includes('/invoice') ? 'text-white border-white' : 'text-gray-300 border-transparent'"
                class="inline-flex items-center px-1 pt-1 border-b-2  text-sm font-medium leading-5 hover:text-white"
              >Invoices</router-link>
              <router-link
                to="/customers"
                :class="$route.path.includes('/customers') ? 'text-white border-white' : 'text-gray-300 border-transparent'"
                class="inline-flex items-center px-1 pt-1 border-b-2  text-sm font-medium leading-5 hover:text-white"
              >Customers</router-link>
              <router-link
                to="/reports"
                :class="$route.path.includes('/reports') ? 'text-white border-white' : 'text-gray-300 border-transparent'"
                class="inline-flex items-center px-1 pt-1 border-b-2  text-sm font-medium leading-5 hover:text-white"
              >Reports</router-link>
            </div>
          </div>
          <div class="flex items-center relative">
            <button
              @click="showPanel = !showPanel"
              type="button"
              class="shadow-sm relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" class="clock w-6 h-6"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            </button>
            <TimetrackingPanel v-if="showPanel" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import TimetrackingPanel from "./TimetrackingPanel.vue";

export default {
  name: "HeaderNavigation",
  components: {
    TimetrackingPanel,
  },
  data() {
    return {
      showPanel: false,
    };
  },
};
</script>