<template>
  <button class="btn btn-blue">
    <slot>Button</slot>
  </button>
</template>

<style scoped>
.btn {
  @apply font-bold;
  @apply py-2;
  @apply px-4;
  @apply rounded;
}
.btn.btn-blue {
    @apply bg-blue-500;
    @apply text-white;
}
.btn.btn-blue:hover {
      @apply bg-blue-700;
    }
.dark-mode .btn {
  @apply bg-blue-700;
}
</style> 