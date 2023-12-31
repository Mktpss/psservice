"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AC_abb = ({ width, height }) => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#FFFFFF" : "#324ba6");
  }, [theme]);

  return (
    <svg
      id="uuid-0c38a7eb-974e-4e60-9d63-8a3c785b3d1c"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 110"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6{fill:${color};stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m161.71,103.81v-47.01c.34,0,.67,0,.99,0,10.1,0,20.21,0,30.31-.02.77,0,1.14.29,1.48.93,1.82,3.46,2.78,7.17,3.14,11.03.79,8.4-1.02,16.15-6.21,22.91-5.57,7.26-13.05,11.23-22.12,12.12-2.49.24-5.02.04-7.6.04Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m241.98,103.94c-.02-.46-.06-.85-.06-1.25,0-14.86,0-29.73-.02-44.59,0-.99.19-1.33,1.28-1.32,10,.05,20,.04,30,0,.85,0,1.27.29,1.64,1.02,2.5,4.85,3.36,10.04,3.25,15.43-.31,14.91-10.48,27.09-25.11,30.1-3.6.74-7.24.72-10.98.61Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m46.45,103.96h-24.53c.13-.39.22-.73.34-1.06,5.39-15.11,10.78-30.21,16.14-45.32.29-.8.66-1.06,1.51-1.05,9.39.03,18.78.02,28.17.02h1.2v26.61c-.44,0-.84,0-1.24,0-4.47,0-8.95.02-13.42-.02-.79,0-1.13.27-1.37.99-2.11,6.22-4.25,12.44-6.38,18.65-.13.39-.28.76-.44,1.19Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m72.48,56.57h30.51c5.61,15.73,11.23,31.48,16.89,47.35-.41.02-.73.06-1.04.06-7.51,0-15.02-.01-22.53.02-.8,0-1.11-.26-1.36-.98-2.12-6.25-4.29-12.49-6.39-18.75-.28-.84-.64-1.16-1.56-1.15-4.4.05-8.81.02-13.21.02-.41,0-.81,0-1.31,0v-26.58Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m128.98,6.07h29.53v47.31h-29.53V6.07Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m209.3,6.07h29.49v47.3h-29.49V6.07Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m158.5,103.92h-29.53v-47.32h29.53v47.32Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m209.28,103.92v-47.31h29.54v47.31h-29.54Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m161.73,6.05c5.69-.03,11.35-.49,16.64,2.29,13.07,6.88,14.98,24.67,3.63,34.23-.44.37-.88.73-1.4,1.16,4.48,2.48,8.37,5.45,11.45,9.64h-30.32V6.05Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m242.03,6.05c5.52-.01,11.03-.49,16.19,2.07,13.33,6.62,15.58,24.57,4.27,34.28-.49.42-.98.83-1.45,1.22,2.07,1.45,4.15,2.8,6.1,4.31,1.96,1.52,3.69,3.3,5.2,5.47h-30.31V6.05Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m69.31,6.02v47.39h-29.54c.22-.64.41-1.24.62-1.83,5.31-14.87,10.62-29.74,15.9-44.62.26-.75.59-.97,1.37-.96,3.85.04,7.71.02,11.65.02Z"
      />
      <path
        className="uuid-c5ea33fb-4699-4b26-979c-a9a63c8ef5f6"
        d="m101.97,53.42h-29.49V6.07c.31-.02.57-.05.84-.05,3.65,0,7.3,0,10.96,0,.5,0,.88.01,1.09.62,5.49,15.46,11,30.91,16.51,46.36.04.12.06.26.1.43Z"
      />
    </svg>
  );
};

export default AC_abb;
