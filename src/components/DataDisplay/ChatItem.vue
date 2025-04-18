<script setup lang="ts">
import { computed, inject } from "vue";
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";

const props = withDefaults(
  defineProps<{
    message?: string;
    placement?: "start" | "end";
    color?: Variant;
    customClass?: string;
  }>(),
  {
    message: "",
    placement: undefined,
    color: undefined,
    customClass: "",
  },
);

const defaultPlacement = inject("defaultChatPlacement", "start");

const finalPlacement = computed(() => props.placement || defaultPlacement);

const { colorClass } = useVariantMapping(props, "chat-bubble");

const placementClass = computed(() => {
  return finalPlacement.value === "end" ? "chat-end" : "chat-start";
});
</script>

<template>
  <div :class="['chat', placementClass, customClass]">
    <div v-if="$slots.image" class="chat-image avatar">
      <div class="w-10 rounded-full">
        <slot name="image"></slot>
      </div>
    </div>

    <div v-if="$slots.header" class="chat-header">
      <slot name="header"></slot>
    </div>

    <div :class="['chat-bubble', colorClass]">
      <slot name="message">
        {{ message }}
      </slot>
    </div>

    <div v-if="$slots.footer" class="chat-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
