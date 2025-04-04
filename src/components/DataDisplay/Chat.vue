<script setup lang="ts">
import { computed, provide } from "vue";
import { type Variant } from "@/composables/useVariantProps";

interface ChatItem {
  message?: string;
  image?: string;
  header?: string;
  footer?: string;
  placement?: "start" | "end";
  color?: Variant;
  customClass?: string;
}

const props = withDefaults(
  defineProps<{
    items?: ChatItem[];
    placement?: "start" | "end";
    customClass?: string;
  }>(),
  {
    items: undefined,
    placement: "start",
    customClass: "",
  },
);

provide("defaultChatPlacement", props.placement);

const getPlacementClass = (itemPlacement: string | undefined) => {
  const finalPlacement = itemPlacement || props.placement;
  return finalPlacement === "end" ? "chat-end" : "chat-start";
};
</script>

<template>
  <!-- Dynamic items mode -->
  <template v-if="items">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        'chat',
        getPlacementClass(item.placement),
        item.customClass || customClass,
      ]"
    >
      <div
        v-if="item.image || $slots[`image-${index}`]"
        class="chat-image avatar"
      >
        <div class="w-10 rounded-full">
          <slot :name="`image-${index}`" :item="item" :index="index">
            <img v-if="item.image" :src="item.image" alt="Chat avatar" />
          </slot>
        </div>
      </div>

      <div v-if="item.header || $slots[`header-${index}`]" class="chat-header">
        <slot :name="`header-${index}`" :item="item" :index="index">
          {{ item.header }}
        </slot>
      </div>

      <div
        :class="['chat-bubble', item.color ? `chat-bubble-${item.color}` : '']"
      >
        <slot :name="`message-${index}`" :item="item" :index="index">
          {{ item.message }}
        </slot>
      </div>

      <div v-if="item.footer || $slots[`footer-${index}`]" class="chat-footer">
        <slot :name="`footer-${index}`" :item="item" :index="index">
          {{ item.footer }}
        </slot>
      </div>
    </div>
  </template>

  <!-- Manual mode -->
  <template v-else>
    <slot></slot>
  </template>
</template>
