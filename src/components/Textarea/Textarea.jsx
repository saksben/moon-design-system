import PropTypes from "prop-types";

export const TextArea = ({
  className,
  readOnly,
  error,
  ...props
}) => {
  const modeTA =
    readOnly &&
    "cursor-not-allowed border-1 hover:border-transparent active:border-transparent focus:border-transparent";
  const modeDiv =
    readOnly && "cursor-not-allowed has-[:focus]:border-main-beerus";
  const valid = error
    ? "border-supportive-chiChi-100 border-2 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100"
    : "border-transparent";

  return (
    <div
      className={[
        `border border-1 rounded-md has-[:focus]:border-transparent has-[:disabled]:opacity-[32%]`,
        modeDiv,
      ].join(" ")}
    >
      <textarea
        readOnly={readOnly}
        className={[
          `transition ease-in-out duration-200
            pt-4 pl-4 w-full block text-md bg-main-gohan placeholder-main-trunks
            outline-none resize-none rounded-md  border-2
            hover:border-hover-main-beerus hover:border-2
            focus:border-main-piccolo focus:border-1
            active:border-main-piccolo active:border-1 active:text-main-bulma
            disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed
            invalid:border-supportive-chiChi-100 invalid:border-2`,
          modeTA,
          valid,
          className,
        ].join(" ")}
        {...props}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  readOnly: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  placeholder: "Textarea...",
  readOnly: false,
  error: false,
};
