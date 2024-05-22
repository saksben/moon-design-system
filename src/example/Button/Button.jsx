import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Button as RadButton, Theme } from "@radix-ui/themes";
import ArrowsBoost from "../../assets/icons/components/ArrowsBoost";
import { Input } from "../../components/Input/Input";
import { Checkbox } from "../../components/Checkbox/Checkbox";

/**
 * Playground to test components when handed props
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <div>
      <Checkbox indeterminate checked={true} className=' size-10 bg-hit text-piccolo rounded-none border-chiChi border-2' />
      <Input className='bg-hit' type='search' />
      <ArrowsBoost />
      {/* to add an icon, you would need to wrap everything in a div, collect its state from the descendant using 'has', use flex, and put the icon and other component in that div */}
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
          <div className="bg-piccolo hover:bg-hover-piccolo text-goten">
            <button>Piccolo</button>
          </div>
          <div className="bg-jiren hover:bg-hover-jiren text-piccolo">
            <button>Jiren</button>
          </div>
          <div className="bg-hit hover:bg-hover-hit text-goku">
            <button>Hit</button>
          </div>
          <div className="bg-heles hover:bg-hover-heles text-bulma">
            <button>Heles</button>
          </div>
          <div className="bg-beerus hover:bg-hover-beerus text-trunks">
            <button>Beerus</button>
          </div>
          <div className="bg-goku hover:bg-hover-goku text-trunks">
            <button>Goku</button>
          </div>
          <div className="bg-gohan hover:bg-hover-gohan text-trunks">
            <button>Gohan</button>
          </div>
          <div className="bg-zeno hover:bg-hover-zeno text-trunks">
            <button>Zeno</button>
          </div>
          <div className="bg-bulma hover:bg-hover-bulma text-trunks">
            <button>Bulma</button>
          </div>
          <div className="bg-trunks hover:bg-hover-trunks text-goku">
            <button>Trunks</button>
          </div>
          <div className="bg-goten hover:bg-hover-goten text-trunks">
            <button>Goten</button>
          </div>
          <div className="bg-popo hover:bg-hover-popo text-trunks">
            <button>Popo</button>
          </div>
        </div>
        <div>
          <div className="bg-krillin hover:bg-hover-krillin text-popo">
            <button>Krillin</button>
          </div>
          <div className="bg-chichi hover:bg-hover-chichi text-popo">
            <button>Chi-Chi</button>
          </div>
          <div className="bg-roshi hover:bg-hover-roshi text-popo">
            <button>Roshi</button>
          </div>
          <div className="bg-dodoria hover:bg-hover-dodoria text-popo">
            <button>Dodoria</button>
          </div>
          <div className="bg-cell hover:bg-hover-cell text-popo">
            <button>Cell</button>
          </div>
          <div className="bg-raditz hover:bg-hover-raditz text-popo">
            <button>Raditz</button>
          </div>
          <div className="bg-whis hover:bg-hover-whis text-popo">
            <button>Whis</button>
          </div>
          <div className="bg-frieza hover:bg-hover-frieza text-popo">
            <button>Frieza</button>
          </div>
          <div className="bg-nappa hover:bg-hover-nappa text-popo">
            <button>Nappa</button>
          </div>
        </div>
        <div>
          <div className="bg-krillin-60 hover:bg-hover-krillin-60 text-popo">
            <button>Krillin-60</button>
          </div>
          <div className="bg-chichi-60 hover:bg-hover-chichi-60 text-popo">
            <button>Chi-Chi-60</button>
          </div>
          <div className="bg-roshi-60 hover:bg-hover-roshi-60 text-popo">
            <button>Roshi-60</button>
          </div>
          <div className="bg-dodoria-60 hover:bg-hover-dodoria-60 text-popo">
            <button>Dodoria-60</button>
          </div>
          <div className="bg-cell-60 hover:bg-hover-cell-60 text-popo">
            <button>Cell-60</button>
          </div>
          <div className="bg-raditz-60 hover:bg-hover-raditz-60 text-popo">
            <button>Raditz-60</button>
          </div>
          <div className="bg-whis-60 hover:bg-hover-whis-60 text-popo">
            <button>Whis-60</button>
          </div>
          <div className="bg-frieza-60 hover:bg-hover-frieza-60 text-popo">
            <button>Frieza-60</button>
          </div>
          <div className="bg-nappa-60 hover:bg-hover-nappa-60 text-popo">
            <button>Nappa-60</button>
          </div>
        </div>
        <div>
          <div className="bg-krillin-10 hover:bg-hover-krillin-10 text-popo">
            <button>Krillin-10</button>
          </div>
          <div className="bg-chichi-10 hover:bg-hover-chichi-10 text-popo">
            <button>Chi-Chi-10</button>
          </div>
          <div className="bg-roshi-10 hover:bg-hover-roshi-10 text-popo">
            <button>Roshi-10</button>
          </div>
          <div className="bg-dodoria-10 hover:bg-hover-dodoria-10 text-popo">
            <button>Dodoria-10</button>
          </div>
          <div className="bg-cell-10 hover:bg-hover-cell-10 text-popo">
            <button>Cell-10</button>
          </div>
          <div className="bg-raditz-10 hover:bg-hover-raditz-10 text-popo">
            <button>Raditz-10</button>
          </div>
          <div className="bg-whis-10 hover:bg-hover-whis-10 text-popo">
            <button>Whis-10</button>
          </div>
          <div className="bg-frieza-10 hover:bg-hover-frieza-10 text-popo">
            <button>Frieza-10</button>
          </div>
          <div className="bg-nappa-10 hover:bg-hover-nappa-10 text-popo">
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
