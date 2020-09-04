<template>
  <div>
    <PageHeader :title="'Invoice'">
      <button
        class="ml-2 relative inline-flex items-center px-3 py-2 border-2 border-gray-700 text-sm leading-5 font-bold rounded-md text-gray-800"
      >Edit</button>
    </PageHeader>

    <div class="bg-gray-100 rounded flex space-x-4 p-3 mt-20">
      <div class="bg-white shadow w-3/4 h-screen -mt-16 p-8">
        Your Name
        <br />Somestreet 42
        <br />12345 City
        <br />TaxNr. 567890
        <br />
        <br />Customer Company
        <br />Customer Name
        <br />Otherstreet 43
        <br />12345 City
        <br />
        <br />
        <br />
        <br />
        <div class="flex justify-between">
          <span class="font-bold">Invoice Nr. 12345</span>
          <span>City, 01.09.2020</span>
        </div>
        <br />
        <br />Dear Customer,
        <br />
        <br />this is an introduction lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic blanditiis quibusdam labore alias, exercitationem aliq.
        <br />
        <br />Thanks
        <br />
        <br />Your Name
      </div>
      <div class="w-1/4 p-4">Metadata</div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";

export default {
  name: "Invoice",
  components: {
    PageHeader,
  },
};
</script>