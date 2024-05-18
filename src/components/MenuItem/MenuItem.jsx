
MenuItem.PropTypes = {
    className: PropTypes.string.isRequired,
}

// Return when Radio done

// Loosely based on Button, probably at least is a button
// className determines width
// MenuItem bg is transparent so inherits bg from parent container
// spaces between (ex. Title + span, but Title aligns at start)

// ANATOMY
// MenuItem Container
// Nested element (optional)
// Lead element (optional)
// MenuItem title (title)
// MenuItem label (deprecated)
// Trailing element or meta (optional)

// MenuItem.Title: determines text order when there is an icon. Aligns at start and fills up rest of row
// MenuItem.MultiTitle: multiline component with props title (heading) and text (subheading).
// MenuItem.Checkbox: a checkbox component
// MenuItem.Radio: a radio component

// Don't use multiple checkboxes/radios
// No checkbox/radio on accordion menu

// OTHER PROPS
// as: link
// href
// children: for text
// isActive: Is MenuItem active, not for radio/checkbox. For things like default highlighting.
// isSelected: Is MenuItem checked/unchecked, for radio/checkbox. I'm guessing the user uses useCallback to hand MenuItem a function that turns on focus, and a label wraps MenuItem plus its child (checkbox, radio)
// onClick

// CUSTOMIZATION
// swappable leading/trailing element (icon component child)
// change font
// change colors
// height