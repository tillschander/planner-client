<template>
  <label class="bg-white px-2 pb-1 block rounded-md element">
    <span class="text-xs font-bold leading-tight text-gray-500">{{ label }}</span>
    <input class="block w-full text-sm leading-tight rounded-md bg-transparent outline-none" />
  </label>

</template>

<script>
export default {
    name: 'InputElement',
    props: {
        label: String
    }
};
</script>

<style>
.element:focus-within {
  @apply shadow-outline-orange;
}
</style>