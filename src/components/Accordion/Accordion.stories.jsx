import { Accordion } from "./Accordion";
import { Button } from "../Button/Button";
import ControlsChevronDownSmall from "../../assets/icons/components/ControlsChevronDownSmall";
import ChatDoubleBubble from "../../assets/icons/components/ChatDoubleBubble";
import ChatChat from "../../assets/icons/components/ChatChat";
import ChatComment from "../../assets/icons/components/ChatComment";
import ChatCommentAdd from "../../assets/icons/components/ChatCommentAdd";
import React from "react";

export default {
  title: "Core/Accordion",
  component: Accordion,
};

export const Default = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item
        value="item-1"
        className="border border-beerus rounded-md"
      >
        <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
          <Accordion.Button>
            <span>Default</span>
            <ControlsChevronDownSmall className="text-trunks size-svg-3 transition" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item
        value="item-2"
        className="border border-beerus rounded-md"
      >
        <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
          <Accordion.Button>
            <span>Test accordion</span>
            <ControlsChevronDownSmall className="text-trunks size-svg-3 transition" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const OpenByDefault = {
  render: (args) => (
    <Accordion defaultValue="item-1" singleOpen {...args}>
      <Accordion.Item
        value="item-1"
        className="border border-beerus rounded-md"
      >
        <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
          <Accordion.Button>
            <span>Test accordion</span>
            <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const SingleOpen = {
  render: (args) => (
    <Accordion singleOpen {...args}>
      <Accordion.Item
        value="item-1"
        className="border border-beerus rounded-md"
      >
        <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
          <Accordion.Button>
            <span>Test accordion</span>
            <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item
        value="item-2"
        className="border border-beerus rounded-md"
      >
        <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
          <Accordion.Button>
            <span>Test accordion</span>
            <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Disabled = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item
        disabled
        value="item-1"
        className="border border-beerus rounded-md"
      >
        <Accordion.Header
          className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma"
          disabled
        >
          <Accordion.Button>
            <span>Test accordion</span>
            <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Sizes = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Accordion itemSize="xl" {...args}>
        <Accordion.Item
          value="item-1"
          className="border border-beerus rounded-md"
        >
          <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
            <Accordion.Button>
              <span>X Large (xl)</span>
              <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/* cSpell:enable */}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion itemSize="lg">
        <Accordion.Item
          value="item-1"
          className="border border-beerus rounded-md"
        >
          <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
            <Accordion.Button>
              <span>Large (lg)</span>
              <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/* cSpell:enable */}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item
          value="item-2"
          className="border border-beerus rounded-md"
        >
          <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
            <Accordion.Button>
              <span>Medium is default (md)</span>
              <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/* cSpell:enable */}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion itemSize="sm">
        <Accordion.Item
          value="item-3"
          className="border border-beerus rounded-md"
        >
          <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
            <Accordion.Button>
              <span>Small (sm)</span>
              <ControlsChevronDownSmall className="text-trunks size-svg-2 transition duration-200" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/* cSpell:enable */}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const HeaderContent = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item
        value="item-3"
        className="border border-beerus rounded-md"
      >
        <Accordion.Header>
          <Accordion.Button className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
            <span className="grow">Test accordion</span>
            <div className="flex text-trunks items-center">
              <ChatChat className="size-svg-3" />
              <ChatComment className="size-svg-3" />
              <ChatCommentAdd className="size-svg-3" />
              <ChatDoubleBubble className="size-svg-3" />
            </div>
            <span className="flex justify-center w-6">
              <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
            </span>
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const OpenCloseAllProgrammatically = ({ ...args }) => {
  const items = ["item-1", "item-2"];
  const [values, setValues] = React.useState(["item-1"]);
  const toggleAll = () =>
    values.length === 0 ? setValues(items) : setValues([]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <Button className="w-32" onClick={toggleAll}>
        Toggle All
      </Button>
      <Accordion value={values} onValueChange={setValues} { ...args }>
        <Accordion.Item
          value="item-1"
          className="border border-beerus rounded-md"
        >
          <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
            <Accordion.Button>
              <span>Default</span>
              <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/* cSpell:enable */}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          value="item-2"
          className="border border-beerus rounded-md"
        >
          <Accordion.Header className="[&_.svg]:data-[state=open]:rotate-180 [&_.svg]:data-[state=open]:text-bulma">
            <Accordion.Button>
              <span>Test accordion</span>
              <ControlsChevronDownSmall className="text-trunks size-svg-3 transition duration-200" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/* cSpell:enable */}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
