import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";

// TODO: make Progress.Pin its own component to conform to Moon.io site method, instead of a prop
// TODO: the pin has parts that revolve around each other instead of moving together. Fix this.
// The Default progress bar works perfectly

export const Progress = ({ className, pin, size, value, ...props }) => {
  // Background is main-beerus because Figma's opacity affects indicator bar since Root wraps Indicator
  // overflow-hidden to fix clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  const stylesRoot = cva("rounded-full overflow-hidden w-full", {
    variants: {
      size: {
        "2xs": "h-4",
        "3xs": "h-3",
        "4xs": "h-2",
        "5xs": "h-1",
        "6xs": "h-[0.125rem]",
      },
    },
  });

  const stylesBar = cn(
    "progress-bar-container absolute bg-main-trunks opacity-[0.25] h-full w-full rounded-full"
  );

  // Automatically has smooth progress. Can be changed by giving className='transition-none'
  const stylesIndicator = cn([
    "progress",
    "h-full bg-main-piccolo rounded-full",
    "transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]",
  ]);

  const stylesPinContainer = cn([
    "absolute top-1/2 transform -translate-y-1/2",
    "transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]",
  ]);

  const stylesPin = cn(
    ["size-4 bg-main-goten rounded-full drop-shadow-sm"],
    " transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
  );

  const stylesLabel = cn(
    "absolute size-8 rounded bg-main-bulma rounded-full flex justify-center items-center drop-shadow-sm",
    "transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
  );

  const prog = value > 50 ? value - 1 : value < 1 ? 1 : value;

  return (
    <div className="relative">
      <div
        style={{ transform: "translateZ(0)" }}
        className={cn(stylesRoot({ size }), className)}
      >
        <div className={stylesBar}></div>
        <div
          // Need to update value with state and a useEffect timer outside of component
          style={{
            transform: `translateX(-${100 - value}%)`,
          }}
          className={cn(stylesIndicator)}
        ></div>
      </div>

      {pin && (
        <div
          style={{ left: `${prog}%`, transition: "left 660ms ease" }}
          className={cn(stylesPinContainer)}
        >
          <div
            style={{
              left: `${value}%`,
              bottom: "2rem",
              transform: `translateX(-${100 - value}%)`,
            }}
            className={cn(stylesLabel)}
          >
            <span className="text-2xs text-main-goku text-center">
              {value + "%"}
            </span>
          </div>
          <div
            style={{
              left: `${value}%`,
              transform: `translateX(-${100 - value}%)`,
            }}
            className={cn(stylesPin)}
            {...props}
          ></div>
        </div>
      )}
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["6xs", "5xs", "4xs", "3xs", "2xs"]),
  value: PropTypes.number,
  pin: PropTypes.bool,
};

Progress.defaultProps = {
  size: "2xs",
  value: 0,
  pin: false,
};

// , transform: `translateX(-${100 - prog}%)`
// left: `${prog}%`

// I couldn't figure out how to pass {value} to Progress.Pin in a way that conformed to Moon.io's site method, so I'm doing it my way for now, which is setting a 'pin' prop

// Progress.displayName = "Progress";

// Progress.Pin = ({ className, ...props }) => {
//     const stylesPin = cn(
//         ["size-4 bg-main-goten rounded-full drop-shadow-sm"],
//         'transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]'

//     )
//   return (
//     <div className={cn(stylesPin, className)} {...props}>
//     </div>
//   );
// };

// Progress.Pin.displayName = "Progress.Pin";
