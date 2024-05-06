import React from "react";
import PropTypes from "prop-types";
import { Theme } from "@radix-ui/themes";
import * as RadAccordion from "@radix-ui/react-accordion";

export const Accordion = ({ ...props }) => {
  return (
    <div>
      <Theme>
        <RadAccordion.Root
          type="single"
          defaultValue="item-2"
          collapsible
          className="bg-red-500"
        >
          <RadAccordion.Item value="item-1">
            <RadAccordion.Header>
              <RadAccordion.Trigger>
                <span>Trigger text</span>
              </RadAccordion.Trigger>
            </RadAccordion.Header>
            <RadAccordion.Content>
              <span>Expanded</span>
            </RadAccordion.Content>
          </RadAccordion.Item>
        </RadAccordion.Root>
      </Theme>
    </div>
  );
};

Accordion.propTypes = {
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

Accordion.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
