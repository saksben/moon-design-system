import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Button as RadButton, Theme } from "@radix-ui/themes";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <div style={{backgroundColor: '#E2E2E2', width: '500px', display: 'flex', justifyContent: 'space-between'}}>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
      <div style={{ display: "flex" }}>
        <div>
          <div className="bg-main-piccolo text-main-piccolo">
            <button>Piccolo</button>
          </div>
          <div className="bg-main-jiren text-main-jiren">
            <button>Jiren</button>
          </div>
          <div className="bg-main-hit text-main-hit">
            <button>Hit</button>
          </div>
          <div className="bg-main-heles text-main-heles">
            <button>Heles</button>
          </div>
          <div className="bg-main-beerus text-main-beerus">
            <button>Beerus</button>
          </div>
          <div className="bg-main-goku text-main-goku">
            <button>Goku</button>
          </div>
          <div className="bg-main-gohan text-main-gohan">
            <button>Gohan</button>
          </div>
          <div className="bg-main-zeno text-main-zeno">
            <button>Zeno</button>
          </div>
          <div className="my-[50px] w-[64px] h-[64px] rounded-md ml-[15px] bg-main-gohan text-main-bulma drop-shadow-sm">
            <button>Bulma</button>
          </div>
          <div className="bg-main-trunks text-main-trunks">
            <button>Trunks</button>
          </div>
          <div className="bg-main-goten text-main-goten">
            <button>Goten</button>
          </div>
          <div className="bg-main-popo text-main-popo">
            <button>Popo</button>
          </div>
        </div>
        <div>
          <div className="bg-supportive-krillin-100 text-supportive-krillin-100">
            <button>Krillin</button>
          </div>
          <div className="bg-supportive-chiChi-100 text-supportive-chiChi-100">
            <button>Chi-Chi</button>
          </div>
          <div className="bg-supportive-roshi-100 text-supportive-roshi-100">
            <button>Roshi</button>
          </div>
          <div className="bg-supportive-dodoria-100 text-supportive-dodoria-100">
            <button>Dodoria</button>
          </div>
          <div className="bg-supportive-cell-100 text-supportive-cell-100">
            <button>Cell</button>
          </div>
          <div className="bg-supportive-raditz-100 text-supportive-raditz-100">
            <button>Raditz</button>
          </div>
          <div className="bg-supportive-whis-100 text-supportive-whis-100">
            <button>Whis</button>
          </div>
          <div className="bg-supportive-frieza-100 text-supportive-frieza-100">
            <button>Frieza</button>
          </div>
          <div className="my-[50px] w-[64px] h-[64px] rounded-md ml-[15px] bg-main-gohan text-supportive-nappa-100 drop-shadow-md">
            <button>Nappa</button>
          </div>
        </div>
        <div>
          <div className="bg-supportive-krillin-60 text-supportive-krillin-60">
            <button>Krillin-60</button>
          </div>
          <div className="bg-supportive-chiChi-60 text-supportive-chiChi-60">
            <button>Chi-Chi-60</button>
          </div>
          <div className="bg-supportive-roshi-60 text-supportive-roshi-60">
            <button>Roshi-60</button>
          </div>
          <div className="bg-supportive-dodoria-60 text-supportive-dodoria-60">
            <button>Dodoria-60</button>
          </div>
          <div className="bg-supportive-cell-60 text-supportive-cell-60">
            <button>Cell-60</button>
          </div>
          <div className="bg-supportive-raditz-60 text-supportive-raditz-60">
            <button>Raditz-60</button>
          </div>
          <div className="bg-supportive-whis-60 text-supportive-whis-60">
            <button>Whis-60</button>
          </div>
          <div className="bg-supportive-frieza-60 text-supportive-frieza-60">
            <button>Frieza-60</button>
          </div>
          <div className="my-[50px] w-[64px] h-[64px] rounded-md ml-[15px] bg-main-gohan text-supportive-nappa-60 drop-shadow-lg">
            <button>Nappa-60</button>
          </div>
        </div>
        <div>
          <div className="bg-supportive-krillin-10 text-supportive-krillin-10">
            <button>Krillin-10</button>
          </div>
          <div className="bg-supportive-chiChi-10 text-supportive-chiChi-10">
            <button>Chi-Chi-10</button>
          </div>
          <div className="bg-supportive-roshi-10 text-supportive-roshi-10">
            <button>Roshi-10</button>
          </div>
          <div className="bg-supportive-dodoria-10 text-supportive-dodoria-10">
            <button>Dodoria-10</button>
          </div>
          <div className="bg-supportive-cell-10 text-supportive-cell-10">
            <button>Cell-10</button>
          </div>
          <div className="bg-supportive-raditz-10 text-supportive-raditz-10">
            <button>Raditz-10</button>
          </div>
          <div className="bg-supportive-whis-10 text-supportive-whis-10">
            <button>Whis-10</button>
          </div>
          <div className="bg-supportive-frieza-10 text-supportive-frieza-10">
            <button>Frieza-10</button>
          </div>
          <div className="my-[50px] w-[64px] h-[64px] rounded-md ml-[15px] bg-main-gohan text-supportive-nappa-10 drop-shadow-xl">
            <button>Nappa-10</button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 0,
          height: 0,
        }}
      >
        <Theme>
          <RadButton color="yellow" className="text-red-500">
            RadButton
          </RadButton>
        </Theme>
      </div>
    </div>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
