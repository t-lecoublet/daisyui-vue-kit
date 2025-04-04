import type { Meta, StoryObj } from "@storybook/vue3";
import Select from "@/components/DataInput/Select.vue";
import { useVariantStoriesControl } from "@/composables/useVariantProps";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta: Meta<typeof Select> = {
  title: "Components/DataInput/Select",
  component: Select,
  argTypes: {
    ...useVariantStoriesControl,
    ...useSizeStoriesControl,
    ghost: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const DefaultTplStr = `
<Select v-bind="args">
  <option disabled selected>Pick a color</option>
  <option>Crimson</option>
  <option>Amber</option>
  <option>Velvet</option>
</Select>
`;
const GhostSelectTplStr = `
<Select ghost v-bind="args">
  <option disabled selected>Pick a font</option>
  <option>Inter</option>
  <option>Poppins</option>
  <option>Raleway</option>
</Select>
`;
// TODO: FIELDSET A FAIRE
const SelectWithFieldsetTplStr = `
<fieldset class="fieldset">
  <legend class="fieldset-legend">Browsers</legend>
  <Select v-bind="args">
    <option disabled selected>Pick a browser</option>
    <option>Chrome</option>
    <option>FireFox</option>
    <option>Safari</option>
  </Select>
  <span class="fieldset-label">Optional</span>
</fieldset>
`;
const ColorsSelectTplStr = `
<div class="flex flex-col gap-4">
  <Select v-bind="args" variant="primary">
    <option disabled selected>Pick a text editor</option>
    <option>VScode</option>
    <option>VScode fork</option>
    <option>Another VScode fork</option>
  </Select>
  <Select v-bind="args" variant="secondary">
    <option disabled selected>Pick a language</option>
    <option>Zig</option>
    <option>Go</option>
    <option>Rust</option>
  </Select>
  <Select v-bind="args" variant="accent">
    <option selected disabled>Color scheme</option>
    <option>Light mode</option>
    <option>Dark mode</option>
    <option>System</option>
  </Select>
  <Select v-bind="args" variant="neutral">
    <option disabled selected>Server location</option>
    <option>North America</option>
    <option>EU west</option>
    <option>South East Asia</option>
  </Select>
  <Select v-bind="args" variant="info">
    <option disabled selected>Pick a Framework</option>
    <option>React</option>
    <option>Vue</option>
    <option>Angular</option>
  </Select>
  <Select v-bind="args" variant="success">
    <option disabled selected>Pick a Runtime</option>
    <option>npm</option>
    <option>Bun</option>
    <option>yarn</option>
  </Select>
  <Select v-bind="args" variant="warning">
    <option disabled selected>Pick an OS</option>
    <option>Windows</option>
    <option>MacOS</option>
    <option>Linux</option>
  </Select>
  <Select v-bind="args" variant="error">
    <option disabled selected>Pick an AI Model</option>
    <option>GPT-4</option>
    <option>Claude</option>
    <option>Llama</option>
  </Select>
</div>`;
const SizesSelectTplStr = `
<div class="flex flex-col gap-4">
  <Select v-bind="args" size="xs">
    <option disabled selected>Xsmall</option>
    <option>Xsmall Apple</option>
    <option>Xsmall Orange</option>
    <option>Xsmall Tomato</option>
  </Select>
  <Select v-bind="args" size="sm">
    <option disabled selected>Small</option>
    <option>Small Apple</option>
    <option>Small Orange</option>
    <option>Small Tomato</option>
  </Select>
  <Select v-bind="args" size="md">
    <option disabled selected>Medium</option>
    <option>Medium Apple</option>
    <option>Medium Orange</option>
    <option>Medium Tomato</option>
  </Select>
  <Select v-bind="args" size="lg">
    <option disabled selected>Large</option>
    <option>Large Apple</option>
    <option>Large Orange</option>
    <option>Large Tomato</option>
  </Select>
  <Select v-bind="args" size="xl">
    <option disabled selected>Xlarge</option>
    <option>Xlarge Apple</option>
    <option>Xlarge Orange</option>
    <option>Xlarge Tomato</option>
  </Select>
</div>
`;
const DisabledSelectTplStr = `
<Select disabled v-bind="args">
  <option>You can't touch this</option>
</Select>`;

// DEFAULT

const DefaultSelectTemplate: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: DefaultTplStr,
  }),
  args: {},
};
export const DefaultSelect = { ...DefaultSelectTemplate };

// GHOST SELECT

const GhostSelectTemplate: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: GhostSelectTplStr,
  }),
};
export const GhostSelect = { ...GhostSelectTemplate };

// SELECT WITH FIELDSET

const SelectWithFieldsetTemplate: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: SelectWithFieldsetTplStr,
  }),
};
export const SelectWithFieldset = { ...SelectWithFieldsetTemplate };

// COLORS SELECT

const ColorsSelectTemplate: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: ColorsSelectTplStr,
  }),
};
export const ColorsSelect = { ...ColorsSelectTemplate };

// SIZES SELECT

const SizesSelectTemplate: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: SizesSelectTplStr,
  }),
};
export const SizesSelect = { ...SizesSelectTemplate };

// DISABLED SELECT

const DisabledSelectTemplate: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: DisabledSelectTplStr,
  }),
};
export const DisabledSelect = { ...DisabledSelectTemplate };
