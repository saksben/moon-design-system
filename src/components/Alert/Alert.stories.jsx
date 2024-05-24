import { Alert } from "./Alert";
import OtherFrame from "../../assets/icons/components/OtherFrame";
import { Button } from "../Button/Button";
import React from "react";

export default {
  title: "Core/Alert",
  component: Alert,
};

export const Default = {
  render: (args) => <Alert {...args}>Default alert</Alert>,
};

export const TitleAndMessage = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Alert title</Alert.Title>
      <Alert.Message>Alert message</Alert.Message>
    </Alert>
  ),
};

export const Icons = {
  render: (args) => (
    <>
      <Alert {...args}>
        <Alert.Message>
          <OtherFrame className="size-svg-3" />
          Alert with icon
        </Alert.Message>
      </Alert>
      <Alert {...args}>
        <Alert.Title>
          <OtherFrame className="size-svg-3" />
          Alert with title and icon
        </Alert.Title>
        <Alert.Message>Alert message</Alert.Message>
      </Alert>
    </>
  ),
};

export const CloseButton = ({ ...args }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const handleClick = () => setIsVisible(!isVisible);
  if (isVisible)
    return (
      <Alert {...args}>
        Click the Close button to hide the Alert
        <Alert.Close onClick={handleClick} />
      </Alert>
    );
  return (
    <Button variant="outline" onClick={handleClick}>
      Show Alert
    </Button>
  );
};

export const Customization = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Alert {...args}>
        <Alert.Message>
          <OtherFrame className="size-svg-3 text-roshi" />
          Generic style with colored icon
        </Alert.Message>
        <Alert.Close />
      </Alert>
      <Alert
        className="bg-transparent outline outline-1 outline-offset-[-1px] outline-roshi"
        {...args}
      >
        <Alert.Message className="text-roshi">
          <OtherFrame className="size-svg-3" />
          Outline style
        </Alert.Message>
        <Alert.Close />
      </Alert>
      <Alert className="bg-roshi-10" {...args}>
        <Alert.Message>
          <OtherFrame className="size-svg-3" />
          Colorful style
        </Alert.Message>
        <Alert.Close />
      </Alert>
    </div>
  ),
};
