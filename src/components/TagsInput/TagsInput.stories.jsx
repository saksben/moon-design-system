import { TagsInput } from "./TagsInput";
import React, {useCallback, useState} from "react";

export default {
    title: "Core/TagsInput",
    component: TagsInput,
}

export const Default = (...args) => {
    const [selected, setSelected] = useState([]);

  const onEnter = useCallback(
    (value) => {
      setSelected([...selected, value]);
      console.log(selected)
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
    <div className="w-full max-w-sm">
      <TagsInput selected={selected} onEnter={onEnter} onClear={onClear} {...args}>
        {selected.map((text, index) => (
          <TagsInput.SelectedItem key={index} index={index} label={text} {...args} />
         ))}
      </TagsInput>
    </div>
  );
}

// WHAT'S HAPPENING?
// Tags are successfully being created in Input
// Tags don't have any text -> need to give them the value of {selected}
    // onEnter experiences a string {value} and user adds it to the array {selected}
        // Go to where you called onEnter and pass the string {value} to it as an argument
    // The component is given an array of strings via {selected}
        // The user takes each {text} in {selected} and maps it to a Tag as its {label}, and also gives its {index} as {index}


    // I'm guessing {selected} is just to keep track of the indexes, not to set Tag text
    // -Tags don't yet delete on click
    // onClear experiences a number {index} and filters out of the array {selected} the {item} with the {id} that matches {index}
        // {item} is each Tag in the {selected} array
        // {id} is the index of each Tag
        // {index} is obtained from {selected.length - 1}
            //  onClear={onClear({index})}. i.e. find where you call onClear and pass the Tag's {index} to it as an argument
    // take the last index in the array and pop it (this is the index that onClear experiences)

    // -when Tag's icon is clicked, it needs to call onClear() and pass it its own index.
      // -Tag needs access to onClear()
      // Tag has access to its own index