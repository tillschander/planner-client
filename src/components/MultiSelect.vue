<template>
  <div class="absolute left-0 top-full z-30">
    <div class="mt-1 rounded bg-white shadow-lg">
      <ul
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-item-3"
        class="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
      >
        <li
          id="listbox-item-0"
          role="option"
          class="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4 hover:text-white hover:bg-indigo-600"
        >
          <span class="font-semibold block truncate">Wade Cooper</span>
          <!-- Highlighted: "text-white" -->
          <span class="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
        <li
          id="listbox-item-1"
          role="option"
          class="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4 hover:text-white hover:bg-indigo-600"
        >
          <span class="font-normal block truncate">Wade Cooper</span>
          <!-- Highlighted: "text-white" -->
          <span v-if="false" class=" absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
        <li
          id="listbox-item-1"
          role="option"
          class="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4 hover:text-white hover:bg-indigo-600"
        >
          <span class="font-normal block truncate">Wade Cooper</span>
          <!-- Highlighted: "text-white" -->
          <span v-if="false" class=" absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>