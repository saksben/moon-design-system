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

export const ActiveStatus = {};

export const OfflineStatus = {};
