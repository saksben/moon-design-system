import { cn } from "../../../utils/cn";

const GenericInfo = ({ className }) => {
  return (
    <span className={cn("size-svg-2 flex justify-center items-center", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        
      >
        <path
          d="M16 21.2778V14.9444M16 12.3056V10.7222M25.5 16C25.5 21.2467 21.2467 25.5 16 25.5C10.7533 25.5 6.5 21.2467 6.5 16C6.5 10.7533 10.7533 6.5 16 6.5C21.2467 6.5 25.5 10.7533 25.5 16Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default GenericInfo;