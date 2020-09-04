<template>
  <div>
    <PageHeader :title="'Tasks'">
      <button
        class="ml-2 relative inline-flex items-center px-3 py-2 border-2 border-gray-700 text-sm leading-5 font-bold rounded-md text-gray-800"
      >Add Task</button>
    </PageHeader>

    <div class="flex justify-center mt-6">
      <div class="flex space-x-3">
        <div v-for="column in columns" :key="column.title" class="bg-gray-100 p-3 w-1/4 rounded">
          <div class="flex justify-between text-gray-700 font-semibold tracking-wide text-sm">
            <div>{{ column.title }}</div>
            <div class="cursor-pointer">⋮</div>
          </div>
          <VueDraggableNext
            :list="column.tasks"
            :animation="200"
            ghost-class="ghost-card"
            group="tasks"
          >
            <task-card
              v-for="(task) in column.tasks"
              :key="task.id"
              :task="task"
              class="mt-3 cursor-move"
            ></task-card>
          </VueDraggableNext>
        </div>
      </div>
    </div>

    <div class="relative bg-gray-100 rounded p-3 pt-4 mt-6">
      <span class="absolute text-gray-700 font-semibold tracking-wide text-sm -mt-1">Workload</span>
      <LineChart :chartdata="[]" :options="{}" />
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import TaskCard from "../components/TaskCard.vue";
import PageHeader from "../components/PageHeader.vue";
import LineChart from "../charts/LineChart.vue";

export default {
  name: "Tasks",
  components: {
    PageHeader,
    TaskCard,
    VueDraggableNext,
    LineChart,
  },
  data() {
    return {
      columns: [
        {
          title: "Backlog",
          tasks: [
            {
              id: 1,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              customer: "Customer B",
              project: "Project A",
            },
            {
              id: 2,
              title: "Provide documentation on integrations",
              date: "Sep 12",
            },
            {
              id: 3,
              title: "Customer A shopping cart dropdown",
              date: "Sep 9",
              customer: "Customer A",
            },
            {
              id: 4,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              customer: "Customer B",
              project: "Project A",
            },
            {
              id: 5,
              title: "Test checkout flow",
              date: "Sep 15",
            },
          ],
        },
        {
          title: "In Progress",
          tasks: [
            {
              id: 6,
              title: "Customer A shopping cart dropdown",
              date: "Sep 9",
              customer: "Customer A",
            },
            {
              id: 7,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              customer: "Customer B",
            },
            {
              id: 8,
              title: "Provide documentation on integrations",
              date: "Sep 12",
            },
          ],
        },
        {
          title: "Review",
          tasks: [
            {
              id: 9,
              title: "Provide documentation on integrations",
              date: "Sep 12",
            },
            {
              id: 10,
              title: "Customer A shopping cart dropdown",
              date: "Sep 9",
              customer: "Customer A",
            },
            {
              id: 11,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              customer: "Customer B",
              project: "Project A",
            },
            {
              id: 12,
              title: "Customer A shopping cart dropdown",
              date: "Sep 9",
              customer: "Customer A",
            },
            {
              id: 13,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              customer: "Customer B",
            },
          ],
        },
        {
          title: "Done",
          tasks: [
            {
              id: 14,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              customer: "Customer B",
            },
            {
              id: 15,
              title: "Customer A shopping cart dropdown",
              date: "Sep 9",
              customer: "Customer A",
            },
            {
              id: 16,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              customer: "Customer B",
              project: "Project A",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}
.ghost-card {
  @apply border opacity-50 border-primary bg-gray-200;
}
.tasks {
  margin-left: -50vw;
  left: 50%;
}
</style>