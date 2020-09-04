<template>
    <div class="flex items-center justify-between mt-6">
      <div class="flex-1 min-w-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
        >{{ title }}</h2>
        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap font-bold">
          <div class="group mt-2 flex items-center text-sm leading-5 text-gray-700 sm:mr-6 relative">
            <CustomersIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" />
            <div>All Customers</div>
            <MultiSelect class="hidden group-hover:block" />
          </div>
          <div class="mt-2 flex items-center text-sm leading-5 text-gray-700 sm:mr-6">
            <ProjectsIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" />All Projects
          </div>
          <div class="mt-2 flex items-center text-sm leading-5 text-gray-700">
            <DateIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" />Sept. 09 - 30, 2020
          </div>
        </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<script>
import CustomersIcon from "../assets/CustomersIcon.vue"
import ProjectsIcon from "../assets/CustomersIcon.vue"
import DateIcon from "../assets/CustomersIcon.vue"
import MultiSelect from "./MultiSelect.vue"

export default {
    name: 'PageHeader',
    props: {
        title: String
    },
    components: {
        CustomersIcon,
        ProjectsIcon,
        DateIcon,
        MultiSelect
    }
}
</script>