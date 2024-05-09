import PropTypes from "prop-types";

export const Input = ({ error, size, className, readOnly, type, ...props }) => {
  const modeInput =
    readOnly &&
    "cursor-not-allowed border-1 hover:border-transparent active:border-transparent focus:border-transparent";
  const modeDiv =
    readOnly &&
    "cursor-not-allowed has-[:focus]:border-main-beerus has-[:active]:border-main-beerus";
  const validInput = error
    ? "border-supportive-chiChi-100 border-2 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100"
    : "border-transparent";
  const validDiv = error
    ? "border-supportive-chiChi-100"
    : "border-main-beerus";
  const sizing =
    size == "sm"
      ? "h-8 py-1 px-2"
      : size == "lg"
        ? "h-12 p-3"
        : size == "xl"
          ? "h-14 p-4"
          : "h-10 px-3 py-2"; // Else size is default md
  let placeHolder = "";
  switch (type) {
    case "number":
      placeHolder = "e.g. 12345";
      break;
    case "date":
      placeHolder = "mm/dd/yyyy";
      break;
    case "time":
      placeHolder = "--:-- --";
      break;
    case "datetime-local":
      placeHolder = "mm/dd/yyyy --:-- --";
      break;
    case "email":
      placeHolder = "e.g. john.doe@domain.co";
      break;
    case "password":
      placeHolder = "Password";
      break;
    case "search":
      placeHolder = "e.g. Search something";
      break;
    case "tel":
      placeHolder = "e.g. +372 123 4567";
      break;
    case "url":
      placeHolder = "e.g. https://domain.com";
      break;
    case "text":
      placeHolder = "Placeholder text";
      break;
    default:
      placeHolder = "";
  }

  return (
    <div
      className={[
        `transition ease-in-out duration-200
    border border-1 rounded-md has-[:disabled]:opacity-[32%]`,
        modeDiv,
        validDiv,
      ].join(" ")}
    >
      <input
        readOnly={readOnly}
        className={[
          `transition ease-in-out duration-200
            w-full block text-md bg-main-gohan placeholder-main-trunks text-main-bulma
            outline-none resize-none rounded-md border-2
            hover:border-hover-main-beerus hover:border-2
            focus:border-main-piccolo focus:border-1 
            active:border-main-piccolo active:border-1
            disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed
            invalid:border-supportive-chiChi-100 invalid:border-2`,
          sizing,
          modeInput,
          validInput,
          className,
        ].join(" ")}
        placeholder={placeHolder}
        type={type}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  size: "md",
  error: false,
  type: "text",
  placeholder: "",
};
