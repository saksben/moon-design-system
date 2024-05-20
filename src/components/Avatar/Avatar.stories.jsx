import { Avatar } from "./Avatar";
import GenericUser from "../../assets/icons/components/GenericUser";
import image from "../../assets/images/avatar-img.png";

export default {
  title: "Core/Avatar",
  component: Avatar,
};

export const Default = {
  args: {
    children: "MD",
  },
};

export const Icon = {
  render: (args) => (
    <Avatar {...args}>
      <GenericUser />
    </Avatar>
  ),
};

export const Image = {
  args: { imageUrl: image },
};

export const ActiveStatus = {
  render: (args) => (
    <div className="flex gap-10">
      <Avatar className="border border-beerus" {...args}>
        <GenericUser className="text-moon-24" />
        <Avatar.Status
          position={{ vertical: "top", horizontal: "right" }}
          {...args}
        />
      </Avatar>
      <Avatar className="border border-beerus" {...args}>
        <GenericUser className="text-moon-24" />
        <Avatar.Status
          position={{ vertical: "top", horizontal: "left" }}
          {...args}
        />
      </Avatar>
      <Avatar className="border border-beerus" {...args}>
        <GenericUser className="text-moon-24" />
        <Avatar.Status {...args} />
      </Avatar>
      <Avatar className="border border-beerus" {...args}>
        <GenericUser className="text-moon-24" />
        <Avatar.Status
          position={{ vertical: "bottom", horizontal: "left" }}
          {...args}
        />
      </Avatar>
    </div>
  ),
};

export const OfflineStatus = {
  render: (args) => (
    <>
      <Avatar {...args}>
        md
        <Avatar.Status {...args} />
      </Avatar>
    </>
  ),
};
