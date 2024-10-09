"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AC_PSS({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#FFFFFF" : "#324ba6");
  }, [theme]);
  return (
    <svg
        width="auto" // Set width to auto to maintain aspect ratio
        height="45px" // Set height to 50px
        viewBox="0 0 613 305"
        version="1.1"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLineJoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <g>
          <path
            d="M11.875,274.25l-8.333,0l-0,-6.417l25.25,0l-0,6.417l-8.292,0l0,23.125l-8.625,-0l0,-23.125Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M56.292,267.833l22.375,0l-0,6.625l-13.75,0l-0,4.834l12.083,-0l0,6.708l-12.083,-0l-0,4.833l13.75,0l-0,6.625l-22.375,0l-0,-29.625Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M109.958,293.917c-2.833,-2.625 -4.208,-6.334 -4.208,-11.167c0,-4.833 1.375,-8.792 4.167,-11.417c2.75,-2.625 6.875,-3.958 12.291,-3.958c1.75,-0 3.334,0.125 4.75,0.375c1.417,0.25 2.834,0.667 4.292,1.167l0,7.541c-2.625,-1.166 -5.458,-1.75 -8.458,-1.75c-2.834,0 -4.875,0.625 -6.209,1.917c-1.333,1.292 -2,3.333 -2,6.083c0,2.75 0.709,4.667 2.084,5.875c1.375,1.25 3.458,1.875 6.208,1.875c3.042,0 5.833,-0.583 8.458,-1.708l0,7.583c-2.833,1 -5.875,1.459 -9.083,1.459c-5.333,-0 -9.417,-1.292 -12.25,-3.917l-0.042,0.042Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M159.75,267.833l8.625,0l0,11l10.167,0l-0,-11l8.625,0l-0,29.542l-8.625,0l-0,-11l-10.167,0l0,11l-8.625,0l0,-29.542Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M216.542,267.833l7.333,0l11.167,15.625l-0,-15.625l8.625,0l-0,29.542l-7.375,0l-11.084,-15.583l0,15.583l-8.625,0l0,-29.542l-0.041,0Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M275.917,294.167c-2.542,-2.417 -3.792,-6.25 -3.792,-11.5c0,-5.25 1.25,-9.292 3.792,-11.709c2.541,-2.416 6.291,-3.625 11.291,-3.625c5,0 8.792,1.209 11.292,3.667c2.542,2.417 3.792,6.333 3.792,11.667c-0,5.333 -1.25,9.041 -3.792,11.458c-2.542,2.458 -6.292,3.667 -11.292,3.667c-5,-0 -8.75,-1.209 -11.291,-3.667l-0,0.042Zm16.083,-5.542c1,-1.25 1.5,-3.208 1.5,-5.958c0,-2.875 -0.5,-4.917 -1.458,-6.167c-0.959,-1.208 -2.584,-1.833 -4.834,-1.833c-2.25,-0 -3.833,0.625 -4.833,1.833c-1,1.208 -1.458,3.292 -1.458,6.167c-0,2.708 0.5,4.708 1.5,5.958c1,1.25 2.583,1.875 4.791,1.875c2.209,0 3.792,-0.625 4.792,-1.875Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M330.75,267.833l8.625,0l0,22.959l13.292,-0l-0,6.625l-21.917,-0l0,-29.584Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M380.083,294.167c-2.541,-2.417 -3.791,-6.25 -3.791,-11.5c-0,-5.25 1.25,-9.292 3.791,-11.709c2.542,-2.416 6.292,-3.625 11.292,-3.625c5,0 8.792,1.209 11.292,3.667c2.541,2.417 3.791,6.333 3.791,11.667c0,5.333 -1.25,9.041 -3.791,11.458c-2.542,2.458 -6.292,3.667 -11.292,3.667c-5,-0 -8.75,-1.209 -11.292,-3.667l0,0.042Zm16.084,-5.542c1,-1.25 1.5,-3.208 1.5,-5.958c-0,-2.875 -0.5,-4.917 -1.459,-6.167c-0.958,-1.208 -2.583,-1.833 -4.833,-1.833c-2.25,-0 -3.833,0.625 -4.833,1.833c-1,1.208 -1.459,3.292 -1.459,6.167c0,2.708 0.5,4.708 1.5,5.958c1,1.25 2.584,1.875 4.792,1.875c2.208,0 3.792,-0.625 4.792,-1.875Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M437,294c-2.75,-2.583 -4.167,-6.25 -4.167,-11.083c0,-4.834 1.417,-8.834 4.292,-11.5c2.875,-2.667 7,-4 12.458,-4c3.5,-0 6.584,0.416 9.167,1.291l0,7.375c-2.375,-0.875 -5.25,-1.333 -8.583,-1.333c-2.875,0 -5,0.667 -6.417,1.958c-1.417,1.292 -2.125,3.375 -2.125,6.209c0,2.625 0.583,4.541 1.792,5.791c1.208,1.209 3.041,1.834 5.541,1.834c1.459,-0 2.875,-0.209 4.209,-0.584l-0,-4.333l-5.875,0l-0,-5.333l13.083,-0l0,14.875c-1.25,0.791 -2.833,1.458 -4.75,1.958c-1.917,0.5 -4.125,0.75 -6.667,0.75c-5.25,0 -9.208,-1.292 -12,-3.833l0.042,-0.042Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <rect
            x="488.875"
            y="267.833"
            width="8.625"
            height="29.542"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M526.875,267.833l22.375,0l0,6.625l-13.75,0l-0,4.834l12.083,-0l0,6.708l-12.083,-0l-0,4.833l13.75,0l0,6.625l-22.375,0l0,-29.625Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M581.208,297.333c-1.791,-0.333 -3.291,-0.791 -4.5,-1.333l0,-7.125c1.417,0.625 2.959,1.167 4.625,1.542c1.667,0.416 3.25,0.583 4.667,0.583c1.667,0 2.833,-0.125 3.542,-0.417c0.708,-0.291 1.083,-0.875 1.083,-1.708c0,-0.542 -0.167,-1 -0.542,-1.333c-0.333,-0.334 -0.875,-0.667 -1.541,-0.917c-0.667,-0.25 -1.75,-0.625 -3.209,-1.083c-0.5,-0.125 -0.875,-0.25 -1.083,-0.334c-2,-0.625 -3.583,-1.333 -4.75,-2.125c-1.167,-0.791 -1.958,-1.708 -2.458,-2.791c-0.5,-1.084 -0.75,-2.459 -0.75,-4.042c-0,-2.917 1.041,-5.125 3.125,-6.625c2.083,-1.5 5.125,-2.292 9.166,-2.292c1.542,0 3.209,0.125 4.917,0.375c1.708,0.25 3.167,0.584 4.292,0.959l-0,7.166c-2.709,-1.083 -5.292,-1.625 -7.834,-1.625c-1.625,0 -2.833,0.125 -3.666,0.375c-0.792,0.25 -1.209,0.792 -1.209,1.625c0,0.5 0.167,0.917 0.5,1.25c0.334,0.292 0.834,0.584 1.542,0.792c0.708,0.25 1.875,0.542 3.5,1c2.375,0.625 4.167,1.417 5.417,2.333c1.25,0.917 2.166,1.917 2.625,3.084c0.5,1.166 0.75,2.583 0.75,4.208c-0,2.75 -1.084,4.917 -3.209,6.542c-2.125,1.625 -5.25,2.416 -9.375,2.416c-2,0 -3.916,-0.166 -5.708,-0.5l0.083,0Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
        </g>
        <path
          d="M554.583,87.5c33.584,0 51.75,18.208 51.75,54.583c0,40.875 -17.125,65.292 -59.166,65.292l-128.417,0l27.417,-51.292l104.291,0c10.084,0 14.625,-4.166 14.625,-14.625c0,-10.458 -4.541,-14.333 -14.625,-14.333l-75,0c-35.458,0 -51.75,-22.958 -51.75,-57.25c0,-37.583 17.292,-62.042 59.167,-62.042l119.75,0l-27.417,51.875l-95.625,0c-9.875,0 -14.625,3.584 -14.625,13.709c0,10.125 4.75,14 14.625,14l75,-0l0,0.083Z"
          style={{ fill: color, fillRule: "nonzero" }}
        />
        <path
          d="M128.125,7.875l-123.083,0l-0,199.5l48.833,0l0,-51l74,0c49.292,0 77.958,-29.542 77.958,-73.667c0,-44.125 -28.666,-74.875 -77.75,-74.875l0.042,0.042Zm4.5,97.542l-78.75,-0l0,-45.625l78.75,-0c15.167,-0 23.917,8.666 23.917,22.666c-0,14 -8.75,22.959 -23.917,22.959Z"
          style={{ fill: color, fillRule: "nonzero" }}
        />
        <g>
          <path
            d="M332.625,144.375l6.333,-14.333l52.292,12.5l-86.792,-59.959l-0.833,17.25l-58.75,-11.541l87.75,56.083Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M260.667,78.625c11.291,-21.958 33.625,-35.583 58.291,-35.583c24.667,-0 46.125,13.125 57.584,34.291l0.25,0.5l32.041,-19.333l-0.25,-0.458c-18.333,-32.875 -53.125,-53.292 -90.708,-53.292c-21.292,0 -41.75,6.417 -59.167,18.5c-17.041,11.833 -30,28.25 -37.541,47.458l-0.25,0.584l39.541,7.666l0.167,-0.375l0.042,0.042Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
          <path
            d="M370.167,149.417c-12.5,15.708 -31.209,24.708 -51.25,24.708c-24.167,0 -46.292,-13.208 -57.709,-34.5l-0.25,-0.458l-34.625,18.5l0.25,0.458c18.209,33.5 53.167,54.333 91.292,54.333c38.125,0 69.875,-18.75 88.875,-50.125l0.333,-0.583l-36.666,-12.583l-0.25,0.291l-0,-0.041Z"
            style={{ fill: color, fillRule: "nonzero" }}
          />
        </g>
      </svg>
  );
}
