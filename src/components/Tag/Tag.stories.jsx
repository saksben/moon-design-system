import { Tag } from "./Tag";
import OtherFrameIcon from "../../assets/icons/components/OtherFrameIcon"
import ControlsClose from "../../assets/icons/components/ControlsClose"

export default {
    title: "Core/Tag",
    component: Tag,
}

export const Default = {
    args: {
        children: "Default"
    }
}

export const LeftIcon = {
    render: (args) => (
        <Tag iconLeft={<OtherFrameIcon />} {...args}>Left Icon</Tag>
    )
}

export const RightIcon = {
    render: (args) => (
        <Tag iconRight={<ControlsClose />} {...args}>Right Icon</Tag>
    )
}

export const BothIcons = {
    render: (args) => (
        <Tag iconLeft={<OtherFrameIcon />} iconRight={<ControlsClose />} {...args}>
      Both icons
    </Tag>
    )
}
