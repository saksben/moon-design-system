import { IconButton } from "./IconButton";
import OtherFrame from "../../assets/icons/components/OtherFrame";

export default {
    title: "Core/IconButton",
    component: IconButton,
}

export const Default = {
    render: (args) => (
        <IconButton icon={<OtherFrame />} {...args} />
    )
}

export const Outline = {
    render: (args) => (
        <IconButton variant='outline' icon={<OtherFrame />} {...args} />
    )
}
export const Ghost = {
    render: (args) => (
        <IconButton variant='ghost' icon={<OtherFrame />} {...args} />
    )
}

export const Disabled = {
    render: (args) => (
        <IconButton disabled icon={<OtherFrame />} {...args} />
    )
}

export const Link = {
    render: (args) => (
        <IconButton as="a" href="https://www.saksben.com" target="_blank" icon={<OtherFrame />} data-testid="button" {...args} />
    )
}

export const Progress = {
    name: "Animation: Progress",
    render: (args) => (
        <IconButton
      animation="progress"
      icon={<OtherFrame />}
      onClick={() => alert("progress click")}
      data-testid="button-progress"
      {...args}
    />
    )
}

export const Success = {
    name: "Animation: Success",
    render: (args) => (
        <IconButton
      animation="success"
      icon={<OtherFrame />}
      onClick={() => alert("success click")}
      data-testid="button-success"
      {...args}
    />
    )
}

export const Error = {
    name: "Animation: Error",
    render: (args) => (
        <IconButton
      animation="error"
      icon={<OtherFrame />}
      onClick={() => alert("error click")}
      data-testid="button-error"
      {...args}
    />
    )
}

export const Pulse = {
    name: "Animation: Pulse",
    render: (args) => (
        <IconButton
      animation="pulse"
      icon={<OtherFrame />}
      onClick={() => alert("pulse click")}
      data-testid="button-pulse"
      {...args}
    />
    )
}