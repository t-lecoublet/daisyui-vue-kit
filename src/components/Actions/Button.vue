<script setup lang="ts">
import { computed, inject } from "vue";
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";

type ElementType = "button" | "a" | "input" | "div";

const props = withDefaults(
  defineProps<{
    size?: Size;
    variant?: Variant;
    outline?: boolean;
    soft?: boolean;
    dash?: boolean;
    active?: boolean;
    ghost?: boolean;
    link?: boolean;
    wide?: boolean;
    disabled?: boolean;
    square?: boolean;
    circle?: boolean;
    block?: boolean;
    as?: ElementType;
    type?: string;
    href?: string;
    value?: string;
    inputType?: "button" | "submit" | "reset" | "radio" | "checkbox";
  }>(),
  {
    size: "default",
    variant: "default",
    outline: false,
    soft: false,
    dash: false,
    active: false,
    ghost: false,
    link: false,
    wide: false,
    disabled: undefined,
    square: false,
    circle: false,
    block: false,
    as: "button",
    type: undefined,
    href: undefined,
    value: undefined,
    inputType: undefined,
  },
);

const isInDropdownTrigger = inject("isDropdownTrigger", false);

const { sizeClass } = useSizeMapping(props, "btn");
const { colorClass } = useVariantMapping(props, "btn");
const softClass = computed(() => {
  return props.soft ? "btn-soft" : "";
});
const outlineClass = computed(() => {
  return props.outline ? "btn-outline" : "";
});
const dashClass = computed(() => {
  return props.dash ? "btn-dash" : "";
});
const activeClass = computed(() => {
  return props.active ? "btn-active" : "";
});
const ghostClass = computed(() => {
  return props.ghost ? "btn-ghost" : "";
});
const linkClass = computed(() => {
  return props.link ? "btn-link" : "";
});
const wideClass = computed(() => {
  return props.wide ? "btn-wide" : "";
});
const squareClass = computed(() => {
  return props.square ? "btn-square" : "";
});
const circleClass = computed(() => {
  return props.circle ? "btn-circle" : "";
});
const blockClass = computed(() => {
  return props.block ? "btn-block" : "";
});

const elementTag = computed((): ElementType => {
  if (isInDropdownTrigger) return "div";
  if (props.as) return props.as;
  return "button";
});

const isInputElement = computed(() => elementTag.value === "input");
const isAnchorElement = computed(() => elementTag.value === "a");

const buttonAttributes = computed(() => {
  const attrs: Record<string, any> = {};

  if (isInputElement.value) {
    attrs.type = props.inputType || "button";
    attrs.value = props.value || "";
  } else if (isAnchorElement.value) {
    attrs.href = props.href || "#";
    attrs.role = "button";
  } else if (isInDropdownTrigger) {
    attrs.tabindex = "0";
    attrs.role = "button";
  } else {
    attrs.type = props.type || "button";
  }

  attrs.disabled = props.disabled;

  return attrs;
});
</script>
<template>
  <component
    :is="elementTag"
    v-bind="buttonAttributes"
    :class="[
      'btn',
      sizeClass,
      colorClass,
      softClass,
      outlineClass,
      dashClass,
      activeClass,
      ghostClass,
      linkClass,
      wideClass,
      squareClass,
      circleClass,
      blockClass,
    ]"
  >
    <slot v-if="!isInputElement"></slot>
  </component>
</template>
