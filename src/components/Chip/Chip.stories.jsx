import { Chip } from "./Chip";
import OtherFrame from "../../assets/icons/components/OtherFrame";

export default {
  title: "Core/Chip",
  component: Chip,
};

export const Default = {
  args: {
    children: "Default",
  },
};

export const Ghost = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Icons = ({ ...args }) => {
  const sharedProps = {
    className: "border border-beerus",
  };
  return (
    <>
      <div className="flex flex-wrap items-center justify-start gap-2 w-full text-bulma">
        <p>Small:</p>
        <Chip
          {...sharedProps}
          size="sm"
          iconLeft={<OtherFrame className="size-svg-3" />}
          {...args}
        >
          Left Icon
        </Chip>
        <Chip
          {...sharedProps}
          size="sm"
          iconRight={<OtherFrame className="size-svg-3" />}
          {...args}
        >
          Right Icon
        </Chip>
        <Chip
          {...sharedProps}
          size="sm"
          iconRight={<OtherFrame className="size-svg-3" />}
          iconLeft={<OtherFrame className="size-svg-3" />}
          {...args}
        >
          Left/Right Icons
        </Chip>
        <Chip
          {...sharedProps}
          size="sm"
          iconOnly={<OtherFrame className="size-svg-3" />}
          aria-label="Single icon"
          {...args}
        />
      </div>
      <div className="flex flex-wrap items-center justify-start gap-2 w-full text-bulma">
        <p>Medium:</p>
        <Chip
          {...sharedProps}
          {...args}
          iconLeft={<OtherFrame className="size-svg-3" />}
        >
          Left Icon
        </Chip>
        <Chip
          {...sharedProps}
          iconRight={<OtherFrame className="size-svg-3" />}
          {...args}
        >
          Right Icon
        </Chip>
        <Chip
          {...sharedProps}
          iconRight={<OtherFrame className="size-svg-3" />}
          iconLeft={<OtherFrame className="size-svg-3" />}
          {...args}
        >
          Left/Right Icons
        </Chip>
        <Chip
          {...sharedProps}
          iconOnly={<OtherFrame className="size-svg-3" />}
          aria-label="Single icon"
          {...args}
        />
      </div>
    </>
  );
};

export const IsActive = {
  args: {
    isActive: true,
    children: "Active",
  },
};

export const HoverStroke = {
  args: {
    isStroke: true,
    children: "Hover me",
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};
