import { TagsInput } from "./TagsInput";
import { useCallback, useState } from "react";

export default {
  title: "Core/TagsInput",
  component: TagsInput,
};

export const Default = ({ ...args }) => {
  const [selected, setSelected] = useState([]);

  const onEnter = useCallback(
    (value) => {
      setSelected([...selected, value]);
      console.log(selected);
    },
    [selected, setSelected]
  );

  const onClear = useCallback(
    (index) => {
      setSelected(selected.filter((item, id) => id !== index));
    },
    [selected, setSelected]
  );

  return (
    <div className="w-full max-w-sm">
      <TagsInput
        selected={selected}
        onEnter={onEnter}
        onClear={onClear}
        {...args}
      >
        {selected.map((text, index) => (
          <TagsInput.SelectedItem key={index} index={index} label={text} />
        ))}
      </TagsInput>
    </div>
  );
};

// TagsInput component with logic based on size
const TagsInputWithLogic = ({ size }) => {
  const [selected, setSelected] = useState([]);
  const onEnter = useCallback(
    (value) => {
      setSelected([...selected, value]);
    },
    [selected, setSelected],
  );
  const onClear = useCallback(
    (index) => {
      setSelected(selected.filter((item, id) => id !== index));
    },
    [selected, setSelected],
  );

  return (
    <TagsInput
      selected={selected}
      onEnter={onEnter}
      onClear={onClear}
      size={size}
      className="mb-4"
    >
      {selected.map((text, index) => (
        <TagsInput.SelectedItem key={index} index={index} label={text} />
      ))}
    </TagsInput>
  );
};

export const DifferentSizes = ({...args}) => (
  <div className="w-full max-w-sm">
    <p>Small</p>
    <TagsInputWithLogic size="sm" {...args} />
    <p>Medium (default)</p>
    <TagsInputWithLogic {...args} />
    <p>Large</p>
    <TagsInputWithLogic size="lg" {...args} />
  </div>
);

export const DifferentStates = ({ ...args }) => {
  const [selected1, setSelected1] = useState(["Preset data"]);
  const [selected2, setSelected2] = useState(["Preset data"]);

  const onEnter1 = useCallback(
    (value) => {
      setSelected1([...selected1, value]);
    },
    [selected1, setSelected1],
  );

  const onEnter2 = useCallback(
    (value) => {
      setSelected2([...selected2, value]);
    },
    [selected2, setSelected2],
  );

  const onClear1 = useCallback(
    (index) => {
      setSelected1(
        selected1.filter((item, id) => id !== index),
      );
    },
    [selected1, setSelected1],
  );

  const onClear2 = useCallback(
    (index) => {
      setSelected2(
        selected2.filter((item, id) => id !== index),
      );
    },
    [selected2, setSelected2],
  );

  return (
    <div className="flex flex-col items-center w-full h-50">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start w-full gap-2">
        <div className="flex flex-col w-full max-w-sm lg:max-w-md">
          <TagsInput
            selected={selected1}
            label="Disabled"
            disabled
            onEnter={onEnter1}
            onClear={onClear1}
            {...args}
          >
            {selected1.map((text, index) => (
              <TagsInput.SelectedItem key={index} index={index} label={text} {...args} />
            ))}
          </TagsInput>
        </div>
        <div className="flex flex-col w-full max-w-sm lg:max-w-md">
          <TagsInput
            selected={selected2}
            label={<span className="text-chichi">Error</span>}
            isError
            onEnter={onEnter2}
            onClear={onClear2}
            {...args}
          >
            {selected2.map((text, index) => (
              <TagsInput.SelectedItem key={index} index={index} label={text} {...args} />
            ))}
          </TagsInput>
        </div>
      </div>
    </div>
  );
};

export const TextCasing = ({...args}) => {
  const [selected1, setSelected1] = useState(["Preset data"]);
  const [selected2, setSelected2] = useState(["Preset data"]);

  const onEnter1 = useCallback(
    (value) => {
      setSelected1([...selected1, value]);
    },
    [selected1, setSelected1],
  );

  const onEnter2 = useCallback(
    (value) => {
      setSelected2([...selected2, value]);
    },
    [selected2, setSelected2],
  );

  const onClear1 = useCallback(
    (index) => {
      setSelected1(selected1.filter((item, id) => id !== index));
    },
    [selected1, setSelected1],
  );

  const onClear2 = useCallback(
    (index) => {
      setSelected2(selected2.filter((item, id) => id !== index));
    },
    [selected2, setSelected2],
  );

  return (
    <div className="flex flex-col items-center w-full h-50">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start w-full gap-2">
        <div className="flex flex-col w-full max-w-sm lg:max-w-md">
          <TagsInput
            selected={selected1}
            label="Lower"
            onEnter={onEnter1}
            onClear={onClear1}
            {...args}
          >
            {selected1.map((text, index) => (
              <TagsInput.SelectedItem
                isUppercase={false}
                index={index}
                label={text}
                key={index}
                {...args}
              />
            ))}
          </TagsInput>
        </div>
        <div className="flex flex-col w-full max-w-sm lg:max-w-md">
          <TagsInput
            selected={selected2}
            label="Uppercase (default)"
            onEnter={onEnter2}
            onClear={onClear2}
            {...args}
          >
            {selected2.map((text, index) => (
              <TagsInput.SelectedItem key={index} index={index} label={text} {...args} />
            ))}
          </TagsInput>
        </div>
      </div>
    </div>
  );
}