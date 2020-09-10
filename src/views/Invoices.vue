<template>
  <PageHeader :title="'Invoices'">
    <button
      class="ml-2 relative inline-flex items-center px-3 py-2 border-2 border-gray-700 text-sm leading-5 font-bold rounded-md text-gray-800"
    >Add Invoice</button>
  </PageHeader>

  <div class="bg-gray-100 p-3 overflow-y-auto mt-6 rounded">
    <h3 class="text-gray-700 font-semibold tracking-wide text-sm">Customer A</h3>
    <ul class="mt-3 flex space-x-3">
      <li v-for="i of [1,2,3,4]" :key="i" class="rounded shadow bg-white p-3">
        <router-link to="/invoice" class="leading-6 font-medium space-y-1 text-sm">
          <h4>Invoice Sept. Customer</h4>
          <p>3000€</p>
          <div class="flex justify-between">
            <p class="text-gray-600">Sep 14</p>
            <p class="bg-green-100 px-2 py-px rounded-full">paid</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import PageHeader from "../components/PageHeader.vue";

export default {
  name: "Invoices",
  components: {
    PageHeader,
  },
};
</script>