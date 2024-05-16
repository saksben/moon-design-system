import { IconButton } from "./IconButton";
import OtherFrameIcon from "../../assets/icons/components/OtherFrameIcon";

export default {
    title: "Core/IconButton",
    component: IconButton,
}

export const Default = {
    render: (args) => (
        <IconButton icon={<OtherFrameIcon />} {...args} />
    )
}

export const Outline = {
    render: (args) => (
        <IconButton variant='outline' icon={<OtherFrameIcon />} {...args} />
    )
}
export const Ghost = {
    render: (args) => (
        <IconButton variant='ghost' icon={<OtherFrameIcon />} {...args} />
    )
}

export const Disabled = {
    render: (args) => (
        <IconButton disabled icon={<OtherFrameIcon />} {...args} />
    )
}

export const Link = {
    render: (args) => (
        <IconButton as="a" href="https://www.saksben.com" target="_blank" icon={<OtherFrameIcon />} data-testid="button" {...args} />
    )
}

export const Progress = {
    name: "Animation: Progress",
    render: (args) => (
        <IconButton
      animation="progress"
      icon={<OtherFrameIcon />}
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
      icon={<OtherFrameIcon />}
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
      icon={<OtherFrameIcon />}
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
      icon={<OtherFrameIcon />}
      onClick={() => alert("pulse click")}
      data-testid="button-pulse"
      {...args}
    />
    )
}