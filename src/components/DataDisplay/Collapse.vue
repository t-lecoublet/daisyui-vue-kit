<script setup lang="ts">
import { computed, provide } from "vue";

interface CollapseItem {
  title?: string;
  content?: string;
  open?: boolean;
  customClass?: string;
}

const props = withDefaults(
  defineProps<{
    items?: CollapseItem[];
    modifier?:
      | "collapse-arrow"
      | "collapse-plus"
      | "collapse-open"
      | "collapse-close";
    customClass?: string;
  }>(),
  {
    items: undefined,
    modifier: undefined,
    customClass: "",
  },
);

const collapseId = computed(
  () => `collapse-${Math.random().toString(36).substring(2, 9)}`,
);
provide("collapseId", collapseId.value);
</script>

<template>
  <!-- Dynamic items mode -->
  <template v-if="items">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        'collapse',
        'bg-base-100 border border-base-300',
        modifier,
        item.customClass || customClass,
      ]"
    >
      <input type="checkbox" :checked="item.open ? 'checked' : undefined" />
      <div class="collapse-title">
        <slot :name="`title-${index}`" :item="item" :index="index">
          {{ item.title }}
        </slot>
      </div>
      <div class="collapse-content">
        <slot :name="`content-${index}`" :item="item" :index="index">
          {{ item.content }}
        </slot>
      </div>
    </div>
  </template>

  <!-- Manual mode -->
  <template v-else>
    <slot></slot>
  </template>
</template>
