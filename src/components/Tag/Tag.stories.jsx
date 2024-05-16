import { Tag } from "./Tag";
import OtherFrame from "../../assets/icons/components/OtherFrame"
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
        <Tag iconLeft={<OtherFrame />} {...args}>Left Icon</Tag>
    )
}

export const RightIcon = {
    render: (args) => (
        <Tag iconRight={<ControlsClose />} {...args}>Right Icon</Tag>
    )
}

export const BothIcons = {
    render: (args) => (
        <Tag iconLeft={<OtherFrame />} iconRight={<ControlsClose />} {...args}>
      Both icons
    </Tag>
    )
}
