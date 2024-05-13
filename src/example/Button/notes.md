What I've learned.

I'm 6 components in, and I've come to the conclusion that I'd just be better off creating my own components from scratch if I'm following a specific design system. I started by using Material UI, and after a few weeks I finally figured out how to make it work, but it was much too heavy so I looked for an alternative. Then I found Radix-ui as headless components I could style, and it was 99% perfect -- the problem is that remaining 1% was one little thing that the design system called for but the Radix component made impossible by its own architecture (of course, it was possible, but would involve a very high level of compensating code). So after 2 abandoned Radix components, I decided that using Google to learn how to make a basic component and styling/creating the rest from scratch was the easiest way to go. I'm 6 for 6 now.

There are 4 ways to approach styling.

1. The old-fashioned way. 3 files per component: jsx, story, css. You get what you want and have division of file labor, but you need to come up with every single class name and state.
2. Just Tailwind. 2 files per component: jsx and story, using Tailwind to style component. You know you'll get what you want, but it will be hell reading the component or the conditionals to figure out how it works when 90% of it is styling. And also, it's annoying to merge all classNames with .join().
3. Use twmerge and clsx (the "cn" method) to merge className styles. You're able to use multiple classNames easily, and merge EVERYTHING together. This is the easiest and the shortest. Cons are that you need to set up the (tiny) utility function. This is my preferred method unless I need to use the next to look more professional.
4. Use class-variance-authority. However much you are annoyed by how tall this method makes your code will be cancelled out by how thankful you will be that you separate both the styling and variants from the actual component. A little overkill unless you have a gigantic amount of variants, or code that takes up a lot of lines anyway but would look more professional as a data structure (ex. multi-conditional ternary operator). Pro is that prop defaults are built in.


*EXAMPLES*

***
 2
***

import PropTypes from "prop-types";

export const TextArea = ({ error, className, readOnly, ...props }) => {
  const modeTextarea =
    readOnly &&
    "cursor-not-allowed border hover:border-transparent active:border-transparent focus:border-transparent";
  const modeDiv =
    readOnly &&
    "cursor-not-allowed has-[:focus]:border-main-beerus has-[:active]:border-main-beerus";
  const validTextarea = error
    ? "border-supportive-chiChi-100 border-2 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100"
    : "border-transparent";
  const validDiv = error
    ? "border-supportive-chiChi-100"
    : "border-main-beerus";

  return (
    <div
      className={[
        `transition ease-in-out duration-200
        border rounded-md has-[:disabled]:opacity-[32%]`,
        modeDiv,
        validDiv,
      ].join(" ")}
    >
      <textarea
        readOnly={readOnly}
        className={[
          `transition ease-in-out duration-200
            pt-4 pl-4 w-full block text-md bg-main-gohan placeholder-main-trunks text-main-bulma
            outline-none resize-none rounded-md border-2
            hover:border-hover-main-beerus hover:border-2
            focus:border-main-piccolo focus:border-2
            active:border-main-piccolo active:border-2
            disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed
            invalid:border-supportive-chiChi-100 invalid:border-2`,
          modeTextarea,
          validTextarea,
          className,
        ].join(" ")}
        {...props}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  error: false,
};

***
 3
***

import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

export const TextArea = ({ error, className, readOnly, ...props }) => {
  //   Conditional styling for container div
  const styleDiv = cn(
    // Base styles
    "transition ease-in-out duration-200 border rounded-md has-[:disabled]:opacity-[32%]",
    // Variant styles
    {
      "border-supportive-chiChi-100": error == true,
      "border-main-beerus": error == false,
    },
    readOnly && "cursor-not-allowed"
  );

  // Conditional styling for textarea
  const styleTextarea = cn(
    // Base styles
    "transition ease-in-out duration-200",
    "pt-4 pl-4 w-full block text-md bg-main-gohan placeholder-main-trunks text-main-bulma outline-none resize-none rounded-md border-2",
    "hover:border-hover-main-beerus hover:border-2",
    "focus:border-main-piccolo focus:border-2",
    "active:border-main-piccolo active:border-2",
    "disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed",
    "invalid:border-supportive-chiChi-100 invalid:border-2",
    // Variant styles
    error == true
      ? "border-supportive-chiChi-100 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100"
      : "border-transparent",
    readOnly &&
      "cursor-not-allowed hover:border-transparent active:border-transparent focus:border-transparent"
  );

  return (
    <>
      <div className={cn(styleDiv)}>
        <textarea
          readOnly={readOnly}
          className={cn(styleTextarea, className)}
          {...props}
        />
      </div>
    </>
  );
};

TextArea.propTypes = {
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  error: false,
};


***
 4
***

import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const TextArea = ({ error, className, readOnly, ...props }) => {
  //   Conditional styling for container div
  const variantsDiv = cva(
    "transition ease-in-out duration-200 border rounded-md has-[:disabled]:opacity-[32%]",
    {
      variants: {
        error: {
          true: "border-supportive-chiChi-100",
          false: "border-main-beerus",
        },
        readOnly: {
          true: "cursor-not-allowed",
          false: "",
        },
      },
      defaultVariants: {
        error: false,
        readOnly: false,
      },
    }
  );

  // Conditional styling for textarea
  const variantsTextarea = cva(
    [
      "transition ease-in-out duration-200",
      "pt-4 pl-4 w-full block text-md bg-main-gohan placeholder-main-trunks text-main-bulma outline-none resize-none rounded-md border-2",
      "hover:border-hover-main-beerus hover:border-2",
      "focus:border-main-piccolo focus:border-2",
      "active:border-main-piccolo active:border-2",
      "disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed",
      "invalid:border-supportive-chiChi-100 invalid:border-2",
    ],
    {
      variants: {
        error: {
          true: "border-supportive-chiChi-100 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100",
          false: "border-transparent",
        },
        readOnly: {
          true: "cursor-not-allowed hover:border-transparent active:border-transparent focus:border-transparent",
          false: "",
        },
      },
      defaultVariants: {
        error: false,
        readOnly: false,
      },
    }
  );

  return (
    <>
      <div className={cn(variantsDiv({ error, readOnly }))}>
        <textarea
          readOnly={readOnly}
          className={cn(
            variantsTextarea({ error, readOnly, className }),
            className
          )}
          {...props}
        />
      </div>
    </>
  );
};

TextArea.propTypes = {
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};








