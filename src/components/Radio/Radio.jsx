


// Based on Headless UI

// STATES
// unselected
// selected

// label is Radio.Option children

// CUSTOMIZATION
// bg color (after:bg)
// bg color when checked (use after:bg)
// border color (border)
// border color when checked (use checked:border) (uses HUI's data attribute data-checked)

// RADIO PROPS (HUI RadioGroup) (will need to use .map function per HUI, and a key prop with it)
// children
// className
// defaultValue={defaultValue}: sets an option as pressed by default, sets by Option value (uncontrolled)
// disabled
// name={name}: name when using form (HUI prop). data transfer occurs through a hidden input tag (HUI prop)
// setValue: set value of Radio
// value={value}: value of Radio. Useful for state change.

// OPTION PROPS (HUI Radio)
// children
// className
// disabled
// value: value of Radio for form use (useContext?). Should be same as RadioGroup's value

// INDICATOR PROPS (the actual button) (span)
// className