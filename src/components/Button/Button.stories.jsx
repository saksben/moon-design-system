// import { fn } from '@storybook/test';
import OtherFrameIcon from "../../assets/icons/components/OtherFrameIcon";
import { Button } from "./Button";

export default {
  title: "Core/Button",
  component: Button,
  // parameters: {layout: 'centered'},
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export const Default = {
  args: {
    children: "Button",
  },
};

export const Outline = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const FullWidth = {
  name: "Full Width",
  args: {
    children: "Full Width",
    fullWidth: true,
  },
};

export const IconLeft = {
  name: "Icon Left",
  args: {
    children: "IconLeft",
    iconLeft: <OtherFrameIcon />,
  },
};

export const IconRight = {
  name: "Icon Right",
  args: {
    children: "IconRight",
    iconRight: <OtherFrameIcon />,
  },
};

export const Link = {
  args: {
    children: "www.saksben.com",
    as: "a",
    href: "https://www.saksben.com",
    target: "_blank",
  },
};

export const Progress = {
  name: "Animation: Progress",
  args: {
    animation: 'progress'
  }
}

export const Error = {
  name: "Animation: Error",
  args: {
    children: "Error",
    animation: "error",
  },
};

export const Pulse = {
  name: "Animation: Pulse",
  args: {
    children: "Pulse",
    animation: "pulse"
  }
};
