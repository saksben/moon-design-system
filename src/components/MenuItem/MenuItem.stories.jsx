import { MenuItem } from "./MenuItem";
import OtherFrame from "../../assets/icons/components/OtherFrame";
import ControlsChevronDown from "../../assets/icons/components/ControlsChevronDown";
import React, { useState, useCallback } from "react";

export default {
  title: "Core/MenuItem",
  component: MenuItem,
};

export const Default = {
  args: {
    className: "w-56",
    children: "Menu item text",
  },
};

export const Link = {
  args: {
    className: "w-56",
    children: "Menu item text",
    as: "a",
    href: "https://www.saksben.com",
    target: "_blank",
  },
};

export const Icon = ({ ...args }) => {
  return (
    <div className="flex gap-10">
      <MenuItem className="w-56" {...args}>
        <OtherFrame className="size-svg-3" />
        <MenuItem.Title>Your value</MenuItem.Title>
      </MenuItem>
      <MenuItem className="w-56" {...args}>
        <MenuItem.Title>Your value</MenuItem.Title>
        <OtherFrame className="size-svg-3" />
      </MenuItem>
    </div>
  );
};

export const Meta = ({ ...args }) => {
  return (
    <div className="flex gap-10">
      <MenuItem className="w-56" {...args}>
        <MenuItem.Title>Your value</MenuItem.Title>
        <span className="text-xs text-trunks">Meta</span>
      </MenuItem>
      <MenuItem className="w-56" {...args}>
        <OtherFrame className="text-moon-24" />
        <MenuItem.Title>Your value</MenuItem.Title>
        <span className="text-xs text-trunks">Meta</span>
      </MenuItem>
    </div>
  );
};

export const Checkbox = ({ ...args }) => {
  const [activeOpt1, setActiveOpt1] = React.useState(false);
  const [activeOpt2, setActiveOpt2] = React.useState(false);
  const toggle1 = React.useCallback(
    () => setActiveOpt1(!activeOpt1),
    [activeOpt1]
  );
  const toggle2 = React.useCallback(
    () => setActiveOpt2(!activeOpt2),
    [activeOpt2]
  );
  return (
    <div className="flex gap-10">
      <MenuItem
        isSelected={activeOpt1}
        onClick={toggle1}
        className="w-56"
        {...args}
      >
        <MenuItem.Checkbox />
        <MenuItem.Title>Your value</MenuItem.Title>
      </MenuItem>
      <MenuItem
        isSelected={activeOpt2}
        onClick={toggle2}
        className="w-56"
        {...args}
      >
        <MenuItem.Title>Your value</MenuItem.Title>
        <MenuItem.Checkbox className="rounded-none border-roshi checked:bg-roshi" />
      </MenuItem>
    </div>
  );
};

export const Radio = ({ ...args }) => {
  const [activeOpt1, setActiveOpt1] = React.useState(false);
  const [activeOpt2, setActiveOpt2] = React.useState(false);
  console.log(activeOpt1)
  return (
    <>
      <MenuItem
        isSelected={activeOpt1}
        onClick={
          React.useCallback(() => setActiveOpt1(!activeOpt1), [activeOpt1])}
        className="w-56"
        {...args}
      >
        <MenuItem.Radio />
        <MenuItem.Title>Your value</MenuItem.Title>
      </MenuItem>
      <MenuItem
        isSelected={activeOpt2}
        onClick={React.useCallback(
          () => setActiveOpt2(!activeOpt2),
          [activeOpt2]
        )}
        className="w-56"
        {...args}
      >
        <MenuItem.Title>Your value</MenuItem.Title>
        <MenuItem.Radio className="checked:border-hit after:bg-hit" />
      </MenuItem>
    </>
  );
};

export const MultiLine = ({ ...args }) => {
  const [active, setActive] = React.useState(false);
  return (
    <div className="flex">
      <MenuItem className="w-56" data-testid="menu-item-1" {...args}>
        <span>
          <OtherFrame className="size-svg-3" />
        </span>
        <MenuItem.MultiTitle
          title="Your value"
          text={
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          }
        />
        <span className="text-xs text-trunks">Meta</span>
      </MenuItem>
      <MenuItem
        isSelected={active}
        onClick={React.useCallback(() => setActive(!active), [active])}
        className="w-56"
        data-testid="menu-item-2"
        {...args}
      >
        <span className="px-2">
          <OtherFrame className="size-svg-3" />
        </span>
        <MenuItem.MultiTitle
          title="Your value"
          text={
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          }
        />
        <span className="px-2">
          <MenuItem.Checkbox />
        </span>
      </MenuItem>
    </div>
  );
};

export const MultipleMultilines = ({ ...args }) => {
  return (
    <div className="w-[376px] bg-gohan flex flex-col gap-3 rounded-lg p-6">
      <MenuItem isActive {...args}>
        <span className="bg-jiren rounded-md w-10 h-10 flex justify-center items-center">
          <OtherFrame className="size-svg-3 text-piccolo" />
        </span>
        <MenuItem.MultiTitle
          title="Job Board"
          text={<span>find your dream design job</span>}
        />
      </MenuItem>
      <MenuItem {...args}>
        <span className="bg-jiren rounded-md w-10 h-10 flex justify-center items-center">
          <OtherFrame className="size-svg-3 text-piccolo" />
        </span>
        <MenuItem.MultiTitle
          title="Freelance Projects"
          text={<span>An exclusive list for contract work</span>}
        />
      </MenuItem>
      <hr className="border-top border-beerus" />
      <MenuItem {...args}>
        <span className="bg-krillin-10 rounded-md w-10 h-10 flex justify-center items-center">
          <OtherFrame className="size-svg-3 text-krillin" />
        </span>
        <MenuItem.MultiTitle
          title="Want freelance design projects?"
          text={<span>Get new leads in your inbox every day</span>}
        />
      </MenuItem>
      <MenuItem {...args}>
        <span className="bg-chichi-10 rounded-md w-10 h-10 flex justify-center items-center">
          <OtherFrame className="size-svg-3 text-chichi" />
        </span>
        <MenuItem.MultiTitle
          title="Personalized your profile with video"
          text={<span>Introduce yourself to new clients with Pitch</span>}
        />
      </MenuItem>
    </div>
  );
};

export const ExpandOrCollapse = () => {
  const [activeOpt, setActiveOpt] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  const toggleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleOpt = useCallback(() => {
    setActiveOpt(!activeOpt);
  }, [activeOpt]);

  return (
    <div className="flex items-start flex-wrap justify-around gap-2 w-full">
      <div className="w-[224px] bg-gohan flex flex-col gap-2 rounded-lg p-4">
        <MenuItem as="a" href="/">
          Vision
        </MenuItem>
        <MenuItem as="a" href="/">
          Getting started
        </MenuItem>
        <MenuItem as="a" href="/">
          How to contribute?
        </MenuItem>
        <MenuItem as="a" href="/">
          Colors palette
        </MenuItem>
        <MenuItem as="a" href="/">
          Tokens
        </MenuItem>
        <MenuItem as="a" href="/">
          Transform SVG
        </MenuItem>
        <MenuItem as="a" href="/">
          Manifest
        </MenuItem>
        <MenuItem isActive={activeOpt} onClick={toggleOpt}>
          Tailwind
          <ControlsChevronDown className={`size-svg-2 ${activeOpt && "rotate-180"}`} />
        </MenuItem>

        {activeOpt && (
          <div className="ps-6" data-testid="expandable-1">
            <MenuItem as="a" href="/">
              <MenuItem.Title> Accordion</MenuItem.Title>
            </MenuItem>
            <MenuItem as="a" href="/">
              <MenuItem.Title> Avatar</MenuItem.Title>
            </MenuItem>
            <MenuItem as="a" href="/">
              <MenuItem.Title> Breadcrumb</MenuItem.Title>
            </MenuItem>
            <MenuItem as="a" href="/">
              <MenuItem.Title> Button</MenuItem.Title>
            </MenuItem>
            <MenuItem as="a" href="/">
              <MenuItem.Title> Checkbox</MenuItem.Title>
            </MenuItem>
          </div>
        )}
      </div>

      <div className="w-56 bg-gohan flex flex-col gap-2 rounded-lg p-4">
        <MenuItem>
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-2xs">B</p>
          </span>
          <MenuItem.Title>
            <p className="text-sm font-medium">Bitcasino</p>
          </MenuItem.Title>
        </MenuItem>
        <MenuItem
          className="ps-6"
          onClick={toggleClick}
          data-testid="right-trigger"
        >
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-2xs">CX</p>
          </span>
          <MenuItem.Title> Customer...</MenuItem.Title>
          <ControlsChevronDown className={`w-6 ${isOpen && "rotate-180"}`} />
        </MenuItem>

        {isOpen && (
          <div className="ps-10" data-testid="expandable-2">
            <MenuItem>
              <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
                <p className="font-medium text-2xs">S</p>
              </span>
              <MenuItem.Title>Sub nested item</MenuItem.Title>
            </MenuItem>
            <MenuItem>
              <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
                <p className="font-medium text-2xs">S</p>
              </span>
              <MenuItem.Title>Sub nested item</MenuItem.Title>
            </MenuItem>
          </div>
        )}

        <MenuItem className="ps-6">
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-2xs">CX</p>
          </span>
          <MenuItem.Title>Quality...</MenuItem.Title>
        </MenuItem>
        <MenuItem className="ps-6">
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-2xs">RG</p>
          </span>
          <MenuItem.Title>Responsible...</MenuItem.Title>
        </MenuItem>
        <MenuItem className="ps-6">
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-2xs">RG</p>
          </span>
          <MenuItem.Title>Responsible...</MenuItem.Title>
        </MenuItem>
        <div className="flex flex-col gap-2 rounded-lg">
          <MenuItem>
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-2xs">S</p>
            </span>
            <MenuItem.Title>
              <p className="text-moon-14 font-medium">Sportsbet</p>
            </MenuItem.Title>
          </MenuItem>
          <MenuItem className="ps-6">
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-2xs">RG</p>
            </span>
            <MenuItem.Title>Customer...</MenuItem.Title>
          </MenuItem>
          <MenuItem className="ps-6">
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-2xs">CX</p>
            </span>
            <MenuItem.Title>Quality...</MenuItem.Title>
          </MenuItem>
          <MenuItem className="ps-6">
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-2xs">RG</p>
            </span>
            <MenuItem.Title>Responsible...</MenuItem.Title>
          </MenuItem>
        </div>
        <div className="flex flex-col gap-2 rounded-lg ">
          <MenuItem>
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-2xs">L</p>
            </span>
            <MenuItem.Title>
              <p className="text-sm font-medium">Livecasino</p>
            </MenuItem.Title>
          </MenuItem>
          <MenuItem className="ps-6">
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-2xs">RG</p>
            </span>
            <MenuItem.Title>Customer...</MenuItem.Title>
          </MenuItem>
        </div>
      </div>
    </div>
  );
};
