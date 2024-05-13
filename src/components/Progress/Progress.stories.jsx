import { Progress } from "./Progress";

export default {
  title: "Core/Progress",
  component: Progress,
};

export const Default = {
  args: {
    value: 75,
  },
};

export const WithPin = ({ ...props }) => {
  return (
    <div>
      <div className="size-10"></div>
      <Progress value={75} pin {...props}></Progress>
    </div>
  );
};

export const WithLabels = () => {
  return (
    <div className="flex flex-col w-full gap-1 text-2xs font-medium uppercase">
      <div className="flex gap-1 justify-between">
        <span>0%</span>
        <span>100%</span>
      </div>
      <Progress value={75} />
      <span className="text-center">Progress Title</span>
    </div>
  );
};
