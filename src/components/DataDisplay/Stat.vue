<script setup lang="ts">
defineProps<{
  figureClass?: string;
  valueClass?: string;
  descClass?: string;
}>();
</script>

<template>
  <div class="stat">
    <div v-if="$slots.figure" class="stat-figure" :class="figureClass">
      <slot name="figure"></slot>
    </div>
    <div v-if="$slots.title" class="stat-title">
      <slot name="title"></slot>
    </div>
    <div v-if="$slots.value" class="stat-value" :class="valueClass">
      <slot name="value"></slot>
    </div>
    <div v-if="$slots.desc" class="stat-desc" :class="descClass">
      <slot name="desc"></slot>
    </div>
    <div v-if="$slots.actions" class="stat-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
