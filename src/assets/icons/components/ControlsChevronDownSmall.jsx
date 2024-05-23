import { cn } from "../../../utils/cn";

const ControlsChevronDownSmall = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("svg", className)}
    >
      <path
        d="M22 13L16 19L10 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ControlsChevronDownSmall;
