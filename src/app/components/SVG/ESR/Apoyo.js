"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Apoyo({ width, height }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#324BA6" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124.28 117.9"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`     .cls-1 {
        fill: ${color};
        stroke-width: 0px;
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m61.18,98.97c-.17,0-.34-.04-.49-.13-.05-.03-5.15-2.94-11.5-7.54-.45-.32-.55-.95-.22-1.4s.95-.55,1.4-.22c5.12,3.7,9.41,6.3,10.82,7.13,1.41-.83,5.7-3.43,10.82-7.13.45-.32,1.07-.22,1.4.22.32.45.22,1.07-.22,1.4-6.35,4.59-11.45,7.51-11.5,7.54-.15.09-.32.13-.49.13Z"
      />
      <path
        className="cls-1"
        d="m32.01,75.64c-.23,0-.46-.08-.65-.24h0c-.42-.36-.47-.99-.11-1.41.36-.42.99-.47,1.41-.11.42.36.47.99.11,1.41-.2.23-.48.35-.76.35Z"
      />
      <path
        className="cls-1"
        d="m95.84,67.76c-.16,0-.32-.04-.47-.12-.49-.26-.67-.87-.41-1.35,1.61-3.02,2.52-5.92,2.72-8.63.75-10.44-4.84-19.96-13.6-23.15-7.88-2.87-16.13.33-22.08,8.55-.38.52-1.24.52-1.62,0-5.95-8.22-14.2-11.42-22.08-8.55-8.76,3.19-14.35,12.7-13.6,23.15.19,2.71,1.11,5.61,2.72,8.63.26.49.08,1.09-.41,1.35-.49.26-1.09.07-1.35-.41-1.74-3.27-2.73-6.44-2.95-9.43-.81-11.33,5.32-21.68,14.91-25.17,8.41-3.06,17.13,0,23.57,8.19,6.44-8.19,15.16-11.24,23.57-8.19,9.59,3.49,15.72,13.84,14.91,25.17-.21,2.99-1.2,6.16-2.95,9.43-.18.34-.53.53-.88.53Z"
      />
      <g>
        <g>
          <path
            className="cls-1"
            d="m78.21,87.17c-.34,0-.68-.18-.86-.5l-8.94-15.29c-.63-1.08-.78-2.36-.4-3.6.37-1.21,1.19-2.24,2.32-2.9.8-.46,1.69-.71,2.59-.71,1.7,0,3.2.83,4.01,2.23l8.21,14.05c.28.48.12,1.09-.36,1.37-.48.28-1.09.12-1.37-.36l-8.21-14.05c-.46-.78-1.31-1.24-2.29-1.24-.54,0-1.09.15-1.58.44-.69.4-1.19,1.03-1.41,1.75-.21.7-.14,1.42.21,2.01l8.94,15.29c.28.48.12,1.09-.36,1.37-.16.09-.33.14-.5.14Z"
          />
          <path
            className="cls-1"
            d="m90.35,75.64c-.34,0-.68-.18-.86-.5l-8.2-14.04c-1.57-2.68-.77-6.08,1.78-7.57.78-.46,1.68-.7,2.6-.7,1.97,0,3.84,1.1,4.87,2.87l6.16,10.55c.28.48.12,1.09-.36,1.37-.48.28-1.09.12-1.37-.36l-6.16-10.55c-.68-1.16-1.88-1.88-3.14-1.88-.57,0-1.1.14-1.59.43-1.6.94-2.08,3.1-1.06,4.84l8.2,14.04c.28.48.12,1.09-.36,1.37-.16.09-.33.14-.5.14Z"
          />
          <path
            className="cls-1"
            d="m84.28,81.96c-.34,0-.68-.18-.86-.5l-11.25-19.26c-.75-1.28-1-2.76-.7-4.17.3-1.44,1.14-2.62,2.36-3.33,1.03-.61,2.3-.81,3.52-.56.54.11.89.64.78,1.18-.11.54-.63.88-1.18.78-.75-.15-1.5-.03-2.12.33-.73.42-1.23,1.14-1.42,2.02-.19.91-.03,1.89.47,2.74l11.25,19.26c.28.48.12,1.09-.36,1.37-.16.09-.33.14-.5.14Z"
          />
          <path
            className="cls-1"
            d="m72.59,91.49c-.34,0-.68-.18-.86-.5l-5.91-10.11c-.4-.7-.62-1.48-.62-2.27,0-1.6.86-3.09,2.24-3.9.48-.28,1.09-.12,1.37.36.28.48.12,1.09-.36,1.37-.77.45-1.25,1.29-1.25,2.18,0,.44.12.88.34,1.27l5.91,10.11c.28.48.12,1.09-.36,1.37-.16.09-.33.14-.5.14Z"
          />
        </g>
        <g>
          <path
            className="cls-1"
            d="m44.15,87.17c-.17,0-.35-.04-.5-.14-.48-.28-.64-.89-.36-1.37l8.94-15.29c.35-.6.43-1.31.21-2.01-.22-.73-.72-1.35-1.41-1.75-.49-.28-1.04-.44-1.58-.44-.98,0-1.83.46-2.29,1.24l-8.21,14.05c-.28.48-.89.64-1.37.36-.48-.28-.64-.89-.36-1.37l8.21-14.05c.82-1.4,2.32-2.23,4.01-2.23.9,0,1.79.25,2.59.71,1.13.66,1.95,1.69,2.32,2.9.38,1.24.23,2.52-.4,3.6l-8.94,15.29c-.19.32-.52.5-.86.5Z"
          />
          <path
            className="cls-1"
            d="m32.01,75.64c-.17,0-.34-.04-.5-.14-.48-.28-.64-.89-.36-1.37l8.2-14.04c1.01-1.73.54-3.9-1.06-4.84-.49-.28-1.02-.43-1.59-.43-1.26,0-2.47.72-3.15,1.88l-6.16,10.55c-.28.48-.89.64-1.37.36-.48-.28-.64-.89-.36-1.37l6.16-10.55c1.04-1.77,2.9-2.87,4.87-2.87.92,0,1.81.24,2.6.7,2.55,1.49,3.35,4.89,1.78,7.57l-8.2,14.04c-.19.32-.52.5-.86.5Z"
          />
          <path
            className="cls-1"
            d="m38.09,81.96c-.17,0-.34-.04-.5-.14-.48-.28-.64-.89-.36-1.37l11.25-19.26c.5-.86.67-1.83.47-2.74-.19-.88-.69-1.6-1.42-2.02-.44-.26-.95-.39-1.47-.39-.55,0-1-.45-1-1s.45-1,1-1c.88,0,1.74.23,2.48.67,1.22.71,2.06,1.89,2.36,3.33.3,1.4.05,2.88-.7,4.17l-11.25,19.26c-.19.32-.52.5-.86.5Z"
          />
          <path
            className="cls-1"
            d="m49.77,91.49c-.17,0-.34-.04-.5-.14-.48-.28-.64-.89-.36-1.37l5.91-10.11c.22-.38.34-.82.34-1.26,0-.68-.28-1.34-.77-1.81-.4-.38-.41-1.02-.03-1.41.38-.4,1.02-.41,1.41-.03.88.84,1.38,2.03,1.38,3.25,0,.79-.21,1.58-.61,2.27l-5.91,10.12c-.19.32-.52.5-.86.5Z"
          />
        </g>
      </g>
    </svg>
  );
}