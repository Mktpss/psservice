"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Ac_Access({ width, height }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#B7CEFA" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="uuid-04d41b8e-1249-4cfc-a022-1fdee35ef0fc"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 110"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`.uuid-432c9b0f-975c-4b2a-b283-f156351114f9{fill:${color};stroke-width:0px;}`}
        </style>
      </defs>
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m158.42,90.46c-2.33,0-4.66-.06-6.99.02-1.72.06-3.58-1.45-3.44-3.45.05-.69.33-1.18.93-1.47.56-.27,1.12-.11,1.58.23.2.15.32.54.32.82.02,1.24.39,1.62,1.66,1.61,3.06-.02,6.12-.06,9.18-.07.8,0,1.6.05,2.4.05,1.28,0,1.93-.71,1.88-1.97-.03-.7-.02-1.41.01-2.12.06-1.39-.53-2.06-1.93-2.05-3.81.02-7.63,0-11.44.13-2.29.07-3.05-.9-3.69-2.57-.88-2.32-.33-4.38.63-6.46.3-.65.89-.68,1.44-.7,1.19-.03,2.38,0,3.56,0,3.7.01,7.4.05,11.1.02,1.29,0,1.71,1,2.28,1.81.46.64.06,1.31-.27,1.92-.29.53-.77.69-1.33.59-.54-.09-.52-.56-.58-.95-.21-1.23-.78-1.67-1.94-1.62-2.35.11-4.7.2-7.05.23-1.3.02-2.6-.1-3.9-.18-1.1-.06-1.59.44-1.54,1.55.04.83.04,1.67,0,2.51-.05,1.06.42,1.59,1.48,1.58,3.7-.02,7.4-.03,11.1-.05.34,0,.69,0,1.03.02,1.9.09,3.39,1.56,3.46,3.49.05,1.39.1,2.79.02,4.18-.03.52-.34,1.06-.61,1.54-.2.35-.48.69-.82.91-.36.23-.82.43-1.23.44-2.44.04-4.89.02-7.33.02,0,0,0,0,0,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m134.9,90.5c-2.38,0-4.75.02-7.13,0-1.88-.02-3.55-1.81-3.5-3.67.02-.8.55-1.34,1.32-1.37,1.04-.03,1.56.36,1.65,1.26.13,1.33.38,1.54,1.71,1.53,3.81-.01,7.63-.02,11.44-.02,1.5,0,2.06-.57,2-2.09-.03-.75,0-1.5,0-2.26-.02-1.28-.59-1.83-1.86-1.82-4.11.04-8.22.08-12.33.11-1.19,0-2.89-1.56-2.91-2.76-.03-1.57-.02-3.15,0-4.72.02-1.01,1.48-2.2,2.68-2.2,3.43,0,6.85.03,10.28.03,1.16,0,2.34.08,3.49-.07,1.77-.23,3.08,1.58,2.69,3.31-.19.83-.76,1.2-1.59,1.04-.49-.09-.63-.42-.67-.86-.17-1.55-.64-1.81-2.17-1.58-1.1.17-2.23.13-3.35.13-2.01,0-4.02-.02-6.03-.07-.61-.01-1.22-.15-1.84-.17-.76-.02-1.11.24-1.16.96-.08,1.23-.09,2.46-.07,3.69.01.66.53,1.02,1.38,1.03,1.48.02,2.97,0,4.45,0,2.76,0,5.53-.02,8.29-.02,1.49,0,2.64,1.08,2.66,2.53.03,1.91.04,3.83.03,5.74-.01,1.41-.92,2.28-2.34,2.29-2.38,0-4.75,0-7.13,0,0,0,0,0,0,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m65.05,72.5c2.44,0,4.89-.01,7.33,0,1.37,0,2.68,1.26,2.81,2.64.05.55.04,1.1.12,1.64.1.65-.17,1.06-.76,1.26-.41.14-.83.28-1.26.3-1.21.07-1.75-.67-1.39-1.84.06-.2.16-.38.22-.57.32-.94-.31-1.63-1.29-1.61-3.74.07-7.47.12-11.21.09-1.37,0-1.73.32-1.71,1.69.04,3.47.03,6.94-.02,10.41-.02,1.28.39,1.71,1.68,1.7,3.65-.03,7.31-.03,10.96,0,1.35.01,1.93-.66,1.59-1.97-.14-.55-.26-1.11-.28-1.67,0-.22.27-.56.49-.65.86-.35,2.35.07,2.64.81.5,1.26.55,2.56-.14,3.8-.08.14-.22.24-.28.39-.62,1.31-1.66,1.64-3.06,1.62-4.27-.08-8.54-.1-12.81.02-1.61.04-2.55-.75-3.4-1.85-.23-.3-.32-.76-.33-1.16-.03-1.6-.01-3.19,0-4.79,0-2.6,0-5.21.03-7.81.01-1.26,1.15-2.4,2.41-2.41,2.56-.02,5.12,0,7.67,0,0,0,0,0,0-.01Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m111.85,90.48c-2.74,0-5.48,0-8.22,0-1.11,0-1.36-.31-1.32-1.38.05-1.39.07-2.78.07-4.18,0-3.88-.02-7.76-.03-11.65,0-.68.18-.82.99-.82,3.61.02,7.22.05,10.83.07.02,0,.05,0,.07,0,2.01-.06,4.01-.12,6.02-.19.41-.01.86-.08,1,.47.15.57.07,1.1-.45,1.42-.27.17-.64.24-.97.24-4.41-.06-8.81-.14-13.22-.2-1.11-.02-1.62.61-1.52,1.69.06.67.06,1.36-.02,2.03-.12,1.07.23,1.68,1.32,1.69,2.35.04,4.7.01,7.05-.08,1.27-.05,1.83.31,1.73,1.41-.06.65-.48,1.03-1.13,1.01-2.4-.06-4.79-.11-7.19-.18-1.26-.03-1.69.4-1.69,1.65,0,1.02-.04,2.05-.07,3.07-.03,1.11.49,1.66,1.59,1.65,3.4-.03,6.8-.05,10.21-.09,1.05-.01,2.1-.15,3.14-.12.4.01,1.01.23,1.13.52.19.47.17,1.11.01,1.6-.07.22-.69.38-1.05.38-2.76.03-5.53.02-8.29.02,0-.01,0-.03,0-.04Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m88.36,72.53c2.54,0,5.07-.01,7.61,0,1.54,0,2.49,1.01,2.49,2.53,0,.52.02,1.05.04,1.57.03,1.09-.84,1.9-1.93,1.71-.24-.04-.58-.35-.61-.58-.09-.55-.08-1.13-.04-1.7.09-1.38-.55-1.96-1.91-1.69-.2.04-.4.12-.6.12-3.38-.03-6.76-.01-10.13-.12-1.54-.05-1.89.25-1.85,1.8.08,3.15.09,6.3.11,9.45,0,.29-.09.59-.12.88-.1,1.12.4,1.67,1.53,1.67,2.74-.02,5.48-.04,8.22-.05.96,0,1.92.04,2.87.08,1.51.05,1.97-.4,1.91-1.93-.02-.39-.11-.77-.12-1.16,0-.48-.19-1.04.43-1.31.52-.23,1.49.06,1.86.53.51.66.59,4.16.02,4.78-.71.76-1.44,1.4-2.67,1.38-4.57-.08-9.13-.03-13.7-.02-1.64,0-3.2-1.66-3.18-3.31.05-3.83.06-7.67.09-11.5,0-.52,0-1.06.16-1.54.41-1.25.97-1.62,2.28-1.62,2.42-.01,4.84,0,7.26,0,0,0,0,0,0,.01Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m39.04,72.52c1.53-.39,2.2.49,2.75,1.72.51,1.14,1.18,2.21,1.81,3.29.87,1.5,1.74,2.99,2.64,4.46,1.05,1.73,2.13,3.45,3.21,5.16.49.79,1.01,1.56,1.53,2.33.36.54.22.99-.41,1.08-.85.12-1.71.09-2.28-.7-.56-.77-1.13-1.55-1.6-2.37-.66-1.14-1.47-1.73-2.91-1.69-3.1.08-6.21,0-9.31-.13-1.64-.07-2.77.55-3.49,1.97-.33.65-.56,1.35-.92,1.98-.2.34-.55.67-.9.8-.4.16-.9.15-1.34.11-.29-.03-.72-.19-.79-.4-.09-.25.06-.66.23-.92.76-1.13,1.59-2.22,2.34-3.36.41-.63.7-1.33,1.08-1.98,1.35-2.29,2.73-4.57,4.08-6.86.59-1,1.19-1.99,1.67-3.04.54-1.17,1.3-1.8,2.62-1.45Zm3.67,11.32c1.14.08,1.54-.52,1.05-1.55-.07-.14-.14-.29-.21-.43-.68-1.36-1.33-2.73-2.06-4.07-.48-.88-1.01-1.73-1.62-2.53-.24-.32-.77-.66-1.11-.6-.34.06-.66.55-.88.92-.37.62-.61,1.32-.97,1.95-.93,1.64-1.91,3.25-2.83,4.89-.46.82-.24,1.2.69,1.38.2.04.41.02.61.02,2.44,0,4.88,0,7.32,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m184.54,100.06c.1-.39.27-.77.28-1.16.03-1.25-.03-2.51.01-3.76.01-.37.18-.94.43-1.04.3-.11.83.09,1.13.32,1.94,1.55,3.84,3.15,5.75,4.73.33.28.72.42,1.03.1.17-.17.18-.54.17-.82-.03-1.18-.11-2.36-.13-3.54,0-.38.24-.76.64-.72.3.03.59.31.85.53.1.08.14.3.13.45-.05,1.3-.13,2.59-.19,3.88,0,.11-.03.23-.05.34-.08.54-.15,1.22.42,1.35.35.08.98-.34,1.25-.71.84-1.16,1.56-2.4,2.33-3.61.41-.65.8-1.31,1.25-1.93.4-.55,1.33-.39,1.72.24,1.01,1.62,2,3.25,3.05,4.84.29.44.73.8,1.15,1.14.36.29.59.59.31,1.03-.23.36-.81.33-1.19-.03-.38-.36-.72-.79-1.16-1.05-.33-.19-.8-.2-1.2-.2-1.11,0-2.25.21-3.32.04-.97-.15-1.66.07-2.26.74-.54.6-1.09.95-1.88.5-.07-.04-.2-.05-.26,0-.87.51-1.39-.03-2.01-.57-1.69-1.46-3.44-2.85-5.16-4.27-.02-.01-.04-.03-.06-.04-.38-.12-.75-.25-1.13-.37-.08.4-.22.81-.22,1.21,0,1.12.09,2.23.09,3.35,0,.72-.36.98-1.06.76-.56-.18-1.06-.24-1.63-.01-.55.22-.92-.12-.93-.73,0-.07,0-.14,0-.21,0-1.51-.32-1.73-1.84-1.64-1.23.08-2.46.02-3.69-.02-1.03-.04-1.37.24-1.36,1.28,0,.16-.02.32.01.48.1.57-.12.91-.7.88-.5-.03-.9-.23-.9-.86.02-1.91.02-3.83.04-5.74.01-.82.54-1.38,1.45-1.4,2.08-.06,4.16-.1,6.23-.05,1.49.04,2.45,1.67,2.18,3.35-.13.79-.06,1.61-.05,2.42,0,.16.14.32.21.48.09.01.18.03.28.04Zm-2.95-2.54c.79.08,1.21-.32,1.21-1.09,0-.6-.45-.98-1.14-.98-1.62,0-3.23.01-4.85.01-.8,0-1.24.37-1.24,1.04,0,.69.42,1.02,1.24,1.02,1.59,0,3.18,0,4.78,0Zm19.03,1.46c.24.08.48.2.72.21.3.01.81,0,.86-.13.13-.34.16-.81.02-1.12-.24-.5-.62-.94-1.01-1.35-.2-.2-.53-.37-.81-.37-.17,0-.35.34-.5.55-.24.31-.42.68-.7.96-.35.36-.43.73-.23,1.17.19.43.54.4.92.28.24-.07.48-.13.73-.19Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m169.04,101.91c-1.16,0-2.33.04-3.49,0-1.26-.05-1.6-.43-1.62-1.68-.02-1.25.03-2.5-.01-3.75-.03-1.06-.34-1.25-1.37-1.07-.4.07-.81.05-1.22.02-.86-.05-1.26.35-1.22,1.21.07,1.41.12,2.82.19,4.23.04.82-.22.93-.89.99-.55.05-.81-.31-.79-1.01.05-1.39.14-2.77.14-4.16,0-1.07-.51-1.44-1.58-1.29-.36.05-.73.03-1.09.02-.87-.03-1.16.23-1.15,1.09.01,1.46.05,2.92.04,4.38,0,.32-.11.76-.32.91-.4.29-.89.24-1.31-.11-1.32-1.12-2.65-2.24-3.98-3.36-.61-.51-1.21-1.05-1.85-1.52-.23-.17-.66-.32-.84-.22-.2.11-.31.54-.3.83.02,1.14.1,2.28.14,3.42.02.51.02,1.03-.72,1.02-.6,0-.83-.33-.82-1.05.03-1.94.03-3.87.07-5.81,0-.29.1-.74.28-.82.26-.11.7-.05.95.11.56.38,1.05.88,1.57,1.31,1.49,1.23,2.98,2.47,4.49,3.68.18.15.62.26.72.17.21-.2.39-.55.4-.85.04-1.07-.01-2.14,0-3.21,0-1.02.25-1.3,1.26-1.33,2.57-.09,5.14-.15,7.72-.21.29,0,.58.11.87.13.55.04,1.11.08,1.67.07.7-.02,1.41-.11,2.11-.14,1.55-.07,3.1-.12,4.65-.17.18,0,.36-.01.55-.01.58,0,.97.22,1,.86.03.6-.32.95-1.01.96-1.12.02-2.24,0-3.36,0-.57,0-1.14-.04-1.71-.05-.3,0-.6-.03-.89.04-.49.12-.99.28-.95.95.03.64.53.79,1,.8,1.44.03,2.88-.02,4.31-.01.47,0,.96.01,1.41.14.23.07.51.41.51.63,0,.24-.26.52-.48.7-.15.12-.43.12-.65.12-1.51,0-3.01-.04-4.52-.05-.34,0-.7,0-1.01.13-.23.09-.53.36-.54.56-.01.24.19.64.4.73.47.2,1,.34,1.5.35,1.6,0,3.2-.08,4.79-.08.35,0,.75.15,1.04.35.45.32.32.84-.23,1-.28.08-.58.07-.88.08-1,0-2.01,0-3.01,0,0-.01,0-.02,0-.03Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m236.26,94.08c.92-.11,1.35.43,1.33,1.18-.04,1.5-.13,3-.19,4.5,0,.22-.03.47.04.67.15.48.61.6.91.19.97-1.29,1.91-2.6,2.82-3.93.54-.79.99-1.63,1.52-2.43.09-.13.39-.23.56-.18.23.06.47.22.61.42,1.06,1.5,2.08,3.03,3.14,4.53.34.48.7.95,1.11,1.38.37.38.61.28.72-.25.04-.18.03-.36.03-.54-.04-1.46-.08-2.92-.12-4.38-.01-.52-.04-1.08.68-1.17.58-.07,1.08.39,1.09,1.11,0,1.23.02,2.47-.16,3.69-.17,1.19.03,1.61,1.42,1.75,1.2.12,2.42-.05,3.63-.04.48,0,.97.15,1.44.23-.04.92-.19,1.1-1,1.11-1.71.03-3.42.03-5.14.01-.85-.01-1.71-.04-2.55-.18-.44-.07-.94-.3-1.23-.62-.65-.71-1.28-.85-2.24-.64-.95.21-2,.12-2.99,0-1.27-.15-1.52-.13-2.12.94-.35.63-.9.53-1.53.28-.17-.07-.42-.1-.58-.03-.63.28-1.16.31-1.74-.21-1.64-1.45-3.32-2.85-5.02-4.23-.39-.32-.94-.45-1.42-.66-.06.5-.18.99-.18,1.49,0,.98.07,1.96.08,2.94,0,.51-.22.86-.79.83-.53-.03-.84-.3-.82-.85.04-1.14.13-2.28.14-3.41,0-.76-.12-1.53-.09-2.29.01-.39.14-1.02.37-1.09.34-.11.9.05,1.21.29,1.93,1.57,3.8,3.2,5.71,4.79.21.17.62.27.86.17.18-.07.32-.48.32-.75.02-1.07-.05-2.14-.04-3.22,0-.48.14-.97.22-1.41Zm8.06,5.11c.54.03.94-.36.7-.77-.45-.77-1.02-1.48-1.58-2.18-.07-.09-.49-.08-.57.03-.41.54-.81,1.1-1.12,1.7-.38.72.02,1.25.82,1.23.58-.02,1.17,0,1.75,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m78.16,96.03c.33-.29.71-.46.84-.74.38-.87,1.1-1.28,1.93-1.32,1.9-.1,3.82-.31,5.72.14.55.13.86.47,1.18.92,1.03,1.43.93,3.03.85,4.64,0,.13-.16.25-.24.38-.22.37-.49.72-.63,1.11-.2.56-.59.8-1.13.8-2.1,0-4.2,0-6.3-.03-.66,0-1.1-.36-1.31-1-.2-.61-.56-1.03-1.38-1.05,0,.39.03.78-.01,1.17-.03.27-.11.67-.28.75-.26.11-.62,0-.94-.04-.08,0-.16-.08-.23-.14-1.85-1.55-3.69-3.11-5.54-4.66-.07-.06-.14-.14-.22-.16-.37-.09-.74-.15-1.1-.23-.04.35-.12.71-.11,1.06.05,1.07.17,2.13.2,3.19.02.69-.36,1.04-.99,1.01-.64-.03-.78-.49-.77-.99.04-1.96.09-3.92.17-5.88.03-.86.61-1.14,1.36-.69.12.07.22.16.33.25,1.4,1.16,2.81,2.32,4.21,3.48.4.34.78.7,1.18,1.04.14.12.27.31.43.32.37.04.84.12,1.1-.05.17-.11.13-.69.02-1.01-.4-1.17-.34-2.33-.06-3.49.05-.22.41-.46.67-.5.18-.03.51.19.61.38.19.35.26.77.44,1.34Zm5.25,4.65s0,.01,0,.02c.62,0,1.23.01,1.85,0,1.07-.03,1.77-.47,1.66-1.79-.05-.59-.02-1.18,0-1.77.06-1.12-.58-1.77-1.73-1.75-1.14.02-2.28.03-3.41.02-.98,0-1.79.58-1.94,1.52-.1.65-.14,1.32-.11,1.97.05,1.01.89,1.75,1.9,1.76.59.01,1.19,0,1.78,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m41.66,101.93c-1.12,0-2.24.01-3.36,0-1.31-.02-1.75-.47-1.78-1.78,0-.32.08-.63.08-.95,0-1.02-.02-2.04-.08-3.05,0-.18-.19-.47-.34-.52-.95-.29-1.92-.41-2.83.12-.21.13-.4.5-.39.76.04,1.37.16,2.73.2,4.09,0,.34-.13.87-.36.98-.38.18-.89.13-1.33.08-.11-.01-.26-.39-.26-.6.01-1.44.06-2.87.11-4.31.03-.94-.47-1.44-1.41-1.36-.36.03-.72.11-1.08.11-.71,0-1-.26-.99-.83,0-.56.4-.93,1.02-.9.57.02,1.13.11,1.7.12,1.23.02,2.46-.01,3.69.02.74.02,1.48.13,2.23.2.18.02.36.06.54.05,1.79-.07,3.59-.15,5.38-.23.73-.04,1.46-.16,2.18-.14.41,0,.96.08,1.21.35.53.58.03,1.42-.83,1.41-1.69,0-3.38-.03-5.06-.12-.64-.03-1.16.11-1.64.51-.37.31-.35.69-.01.9.4.25.9.47,1.37.48,1.5.03,3.01-.07,4.52-.04.31,0,.69.25.91.5.12.14.08.6-.06.76-.18.2-.54.32-.83.32-1.44,0-2.88-.07-4.31-.05-.5,0-1.03.13-1.5.32-.42.16-.45.72-.07.94.44.25.95.51,1.43.51,1.62.02,3.24-.08,4.86-.09.39,0,.79.14,1.15.29.15.07.31.34.3.51,0,.18-.17.42-.34.52-.18.11-.43.11-.65.12-1.12.01-2.24,0-3.35,0,0,0,0,0,0-.01Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m135.37,97.26c.82,0,1.64,0,2.46,0,.85-.01,1.92.85,2.3,1.86.29.8-.02,1.95-.75,2.44-.32.22-.75.37-1.13.38-2.19.03-4.38,0-6.57-.02-.29,0-.61-.05-.85-.18-.5-.28-.54-.8-.32-1.23.09-.18.55-.26.84-.24,1.02.06,2.03.21,3.04.27.96.06,1.92.06,2.88.06.29,0,.63,0,.86-.15.25-.16.55-.5.54-.74-.02-.29-.29-.63-.56-.81-.21-.14-.57-.11-.86-.1-1.53.02-3.06.06-4.59.07-1.4.01-2.62-1.2-2.65-2.59-.03-1.27,1.07-2.36,2.49-2.39,1.71-.04,3.43-.05,5.14.02.57.02,1.13.29,1.69.47.63.2.64.77.68,1.28,0,.09-.28.22-.45.31-.07.04-.19.06-.26.03-2.17-.95-4.48-.22-6.7-.52-.57-.08-.95.27-.98.88-.03.54.38.96,1.01.97.91.02,1.83,0,2.74,0,0-.03,0-.06,0-.09Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m125.1,101.92c-1.12,0-2.24.02-3.36,0-1.07-.03-1.63-.47-1.6-1.53.06-1.59.04-3.16.01-4.75-.02-1.29.69-1.77,1.99-1.78,2.03-.01,4.06-.06,6.09-.11.84-.02,1.22.27,1.12,1.02-.03.23-.27.51-.48.63-.24.13-.57.14-.86.14-1.58,0-3.15-.03-4.73-.02-.51,0-1.04.08-1.53.23-.2.06-.45.42-.44.62.02.25.23.63.45.71.48.17,1.02.25,1.53.25,1.44,0,2.88-.06,4.32-.06.87,0,1.34.64.9,1.23-.17.23-.6.38-.92.38-1.53.02-3.06-.03-4.59-.03-.43,0-.88.04-1.28.17-.2.07-.4.37-.43.6-.03.18.15.5.32.57.45.19.95.38,1.42.39,1.62.02,3.24-.05,4.86-.07.34,0,.68,0,1.01.08.38.09.71.37.53.78-.11.25-.46.52-.71.54-.89.06-1.78.01-2.67,0-.32,0-.64,0-.96,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m117.63,100.24c-.19.02-.36-.01-.42.05-.29.32-.56.66-.81,1.01-.33.46-.74.69-1.33.68-1.82-.03-3.65-.02-5.47-.02-1.15,0-2.35-1.24-2.31-2.38.03-.87.02-1.74.02-2.6,0-1.57.81-2.8,2.34-2.97,1.89-.21,3.82-.35,5.71.11.83.2,1.21.93,1.64,1.56.09.14-.04.59-.21.71-.16.12-.61.11-.73-.03-.89-.97-2.01-.93-3.17-.87-.86.05-1.74-.03-2.6,0-1.27.04-1.6.41-1.61,1.67,0,.71-.04,1.42-.03,2.12.02.84.36,1.29,1.17,1.31,1.67.05,3.33.02,5-.02.6-.02.93-.48.87-1.01-.07-.56-.49-.81-1.15-.75-.51.05-1.04.09-1.54.01-.24-.04-.59-.35-.61-.56-.02-.24.22-.6.45-.73.87-.53,3.02-.06,3.76.67.61.6,1.13,1.19,1.04,2.05Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m101.84,93.77c.97.1,1.96.11,2.9.31,1.22.26,1.94,1.29,1.96,2.55.01.84.03,1.69,0,2.53-.02.35.26.6.06,1.04-.64,1.42-1.58,1.95-3.15,1.74-1.28-.17-2.6-.08-3.9,0-.88.06-1.47-.29-2.16-.76-.76-.52-.73-1.15-.71-1.88.02-.75.01-1.51,0-2.26-.02-1.69,1.36-3.12,3.07-3.16.64-.01,1.28,0,1.92,0,0-.04,0-.08.01-.12Zm0,6.86v.04c.73,0,1.46.01,2.19,0,.82-.02,1.22-.41,1.23-1.23.02-.84,0-1.69,0-2.53,0-1.17-.37-1.53-1.57-1.52-1.12.01-2.23.02-3.35.05-.39.01-.77.07-1.15.12-.61.09-.9.44-.89,1.08.01.87-.02,1.73-.02,2.6,0,.94.36,1.33,1.3,1.38.75.03,1.51,0,2.26,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m221.99,101.96c-.89,0-1.78,0-2.67,0-1.39-.02-2.08-.59-2.13-1.94-.05-1.38.03-2.77.06-4.16.03-1.32,1.46-2.02,2.51-2.07,1.41-.07,2.83-.08,4.24,0,1.64.1,3.02,1.8,2.91,3.45-.03.39-.12.79-.05,1.16.23,1.19-.28,2.15-.91,3.04-.2.29-.7.48-1.09.51-.95.07-1.91.02-2.87.02,0,0,0-.01,0-.02Zm-.23-1.27c.34,0,.68,0,1.03,0,.34,0,.68,0,1.03,0,1.17-.04,1.7-.59,1.69-1.75,0-.57-.05-1.15.01-1.71.14-1.19-.39-1.72-1.75-1.81-1.36-.09-2.73,0-4.1.03-.58.02-1.06.27-1.1.91-.07,1.07-.11,2.14-.07,3.21.02.73.48,1.1,1.21,1.12.68.02,1.37,0,2.05,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m211.25,98.69c0,.84.02,1.68,0,2.53-.02.53-.38.74-.87.65-.49-.08-.84-.33-.81-.91.08-1.29.17-2.59.22-3.88.05-1.3-.49-1.77-1.79-1.64-.41.04-.82.09-1.23.09-.52,0-.95-.13-.99-.77-.04-.64.38-.99.88-.92,2.27.32,4.51-.07,6.77-.07.77,0,1.56.27,2.31.5.19.06.37.39.42.62.31,1.62.52,3.25.2,4.89-.06.31-.04.63-.02.95.03.77-.15,1.06-.7,1.05-.57,0-.79-.35-.76-1.1.06-1.25.1-2.51.12-3.76.02-1.23-.23-1.45-1.48-1.46-.39,0-.77-.04-1.16-.06-.74-.03-1.16.35-1.16,1.09,0,.73,0,1.46,0,2.19.02,0,.05,0,.07,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m51.68,101.96c-.89,0-1.78,0-2.67,0-1.05,0-2.38-1.26-2.4-2.3-.02-1.12-.01-2.24,0-3.35,0-.68,1.2-1.98,2.09-2.22.54-.14,1.11-.21,1.68-.22,1.12-.02,2.24.06,3.35.02,1.31-.04,2.03.8,2.66,1.74.1.15-.05.57-.22.76-.11.13-.44.12-.66.08-.13-.02-.25-.19-.35-.31-.52-.64-1.2-.83-2.01-.78-1.11.07-2.23.04-3.35.06-1.36.02-1.7.36-1.71,1.69,0,.66-.02,1.32-.02,1.99,0,.96.37,1.44,1.32,1.48,1.48.08,2.97.13,4.45.04.46-.03.96-.45,1.34-.82.33-.32.58-.49.99-.24.43.26.32.58.14.94-.48,1-1.16,1.58-2.36,1.45-.74-.08-1.5-.02-2.26-.02,0,0,0,0,0,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m65.49,94.05c1.12.02,1.36.25,1.36,1.16.01,1.87.02,3.74.03,5.61,0,.77-.2,1.05-.76,1.01-.64-.04-.75-.5-.73-1.02.01-.36.06-.73.06-1.09,0-.64-.34-.96-.97-.95-1.6.02-3.19.03-4.79.05-.98.01-1.29.43-1.06,1.4.06.24.1.49.12.74.04.54-.15.92-.76.95-.59.03-.92-.27-.94-.83-.02-.64.07-1.27.07-1.91,0-1.25-.04-2.5-.03-3.75,0-.31.04-.65.16-.93.08-.19.31-.44.48-.44.24,0,.65.14.7.31.15.47.27,1.01.18,1.48-.21,1.08,0,1.61,1.07,1.66,1.61.08,3.24.06,4.85.02.72-.02,1-.53.96-1.37-.03-.69,0-1.38,0-2.07Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m96.76,101.14c-.32.89-1.05.79-1.76.78-1.39-.01-2.79.02-4.18.02-1.31,0-1.67-.51-1.55-1.78.11-1.26.06-2.53.08-3.8,0-.54-.05-1.09.03-1.62.03-.21.37-.51.58-.52.26-.01.55.21.78.38.11.08.17.29.17.44-.04,1.32-.02,2.65-.2,3.95-.15,1.07.2,1.66,1.31,1.65,1.03,0,2.05-.07,3.08-.08.62,0,1.23.06,1.66.57Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m119.27,97.4c0,1.18,0,2.36,0,3.54,0,.46-.07.88-.62.92-.57.04-.91-.28-.92-.86,0-2-.03-4,.03-6,.02-.88.59-1.25,1.08-.81.23.21.36.62.38.96.06.75.02,1.5.02,2.25,0,0,.02,0,.03,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m144.07,98.09c.04.86.1,1.73.12,2.59.02.77-.23,1.1-.8,1.09-.53,0-.8-.45-.78-1.18.03-1.75.02-3.5.06-5.25,0-.32.12-.66.28-.94.25-.45.63-.32.85,0,.19.28.3.66.32,1.01.04.89.01,1.78.01,2.66-.02,0-.03,0-.05,0Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m186.44,8h-30.26s-14,20.34-15,33.23c-1,12.89-.35,22.54,3.02,27.14h15.65s-3.78-9.11-3.31-16.81h28.89s.8,21.97-13.4,39.54h14.28s15.61-20.71,15.71-40.94c.1-20.24-15.57-42.15-15.57-42.15Zm-1.92,32.04h-26.86c3.14-22.68,14.14-31.74,14.14-31.74,13.99,19.4,12.72,31.74,12.72,31.74Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m195.54,8.59l44.32-.29v11.07h-7.09s6.34,16.23,7.47,30.65c.57,7.3-3.58,27.38-14.71,41.37h-14.99s13.13-15.45,14.24-36-7.36-35.82-7.36-35.82h-21.84l-.04-10.98Z"
      />
      <path
        className="uuid-432c9b0f-975c-4b2a-b283-f156351114f9"
        d="m243.35,8.3s12.34,14.73,13.64,36.01-7.4,39.27-14.12,46.68h13.97s19.09-21.71,15.81-45.5-15.21-37.2-15.21-37.2h-14.08Z"
      />
    </svg>
  );
}
