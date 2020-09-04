<template>
    <PageHeader :title="'Customers'">
      <button
        class="ml-2 relative inline-flex items-center px-3 py-2 border-2 border-gray-700 text-sm leading-5 font-bold rounded-md text-gray-800"
      >Add Customer</button>
    </PageHeader>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";

export default {
  name: "Customers",
  components: {
    PageHeader
  },
};
</script>