"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AC_Huawei({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#FFFFFF" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="uuid-6082c161-5e1d-4210-a393-1408bdb6fc7d"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 110"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575{fill:${color};stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m300,78.38c-2.32,0-4.64,0-6.95.02-.17,0-.25-.04-.23-.22,0-.07,0-.15,0-.22,0-9.75,0-19.5,0-29.25,0-.38.1-.45.46-.45,2.11.02,4.22,0,6.33,0,.13,0,.26-.02.4-.03v30.15Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m222.62,71.4c.41-1.49.81-2.91,1.2-4.34,1.69-6.16,3.38-12.31,5.06-18.47.07-.26.18-.33.44-.33,2.48.01,4.96.01,7.43,0,.26,0,.35.09.42.32,2.35,7.47,4.72,14.93,7.08,22.4.03.11.07.22.14.44.17-.55.31-.99.45-1.44,2.17-7.13,4.34-14.26,6.5-21.39.08-.26.19-.33.45-.33,2.11.01,4.22.01,6.33,0,.31,0,.36.06.26.36-3.3,9.83-6.6,19.66-9.88,29.49-.07.22-.17.29-.41.29-2.59,0-5.18-.01-7.76,0-.29,0-.39-.1-.47-.36-2.23-7.23-4.47-14.45-6.7-21.67-.04-.12-.04-.27-.16-.38-.59,2.18-1.18,4.35-1.77,6.52-1.4,5.18-2.8,10.35-4.19,15.53-.07.26-.18.35-.46.35-2.56-.01-5.13-.01-7.69,0-.25,0-.35-.07-.44-.31-3.54-9.83-7.09-19.67-10.65-29.5-.09-.26-.09-.34.23-.34,2.23.01,4.47.01,6.7,0,.28,0,.37.11.45.35,2.42,7.45,4.84,14.89,7.27,22.33.04.14.1.27.17.46Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m14.39,32.18c.07.08.15.17.23.26,1.46,1.81,2.87,3.67,4.24,5.55,7.36,10.08,13.89,20.66,19.42,31.85.73,1.47,1.42,2.97,2.12,4.45.08.16.14.32,0,.47-.16.17-.33.11-.5.02-7.82-3.94-15.51-8.1-22.71-13.11-2.37-1.65-4.65-3.41-6.64-5.5-2.62-2.75-3.97-6.04-3.8-9.88.09-1.99.68-3.85,1.52-5.64,1.46-3.12,3.49-5.82,5.88-8.28.05-.05.1-.1.16-.15.02-.01.04-.02.09-.04Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m112.51,63.33c0-4.88,0-9.75-.01-14.63,0-.39.12-.45.47-.45,1.99.02,3.98.02,5.97,0,.35,0,.47.06.46.44-.02,3.78,0,7.56-.02,11.34,0,.33.05.44.42.44,4.83-.02,9.67-.01,14.5,0,.33,0,.39-.09.39-.4-.01-3.79,0-7.58-.02-11.38,0-.34.06-.45.43-.45,2.04.02,4.08.02,6.11,0,.27,0,.35.07.35.34,0,9.82,0,19.63,0,29.45,0,.26-.05.35-.33.35-2.07-.01-4.15-.01-6.22,0-.3,0-.32-.1-.32-.35,0-3.95,0-7.9.01-11.85,0-.33-.08-.4-.4-.4-4.85.01-9.69.01-14.54,0-.31,0-.38.08-.38.38.01,3.94,0,7.88.02,11.82,0,.35-.11.41-.42.4-2.04-.01-4.08-.01-6.11,0-.29,0-.36-.08-.36-.36,0-4.9,0-9.8,0-14.71Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m277.24,65.77c-3.05,0-6.1,0-9.15,0-.3,0-.4.06-.38.37.06.84.12,1.68.31,2.5.57,2.41,2.12,3.77,4.52,4.26,1.06.21,2.13.26,3.2.27,3.55,0,7.1,0,10.65,0,.31,0,.38.08.37.38-.02,1.5-.01,3,0,4.5,0,.27-.04.37-.35.37-4.2-.02-8.4,0-12.59-.03-2.09-.01-4.16-.25-6.12-1.08-3.81-1.62-6.19-4.45-7.18-8.46-.58-2.37-.63-4.77-.47-7.19.12-1.81.43-3.57,1.04-5.28,1.31-3.65,3.83-6.02,7.52-7.18,2.22-.7,4.51-.91,6.82-.91,3.65,0,7.3,0,10.95,0,.31,0,.38.09.38.38-.02,1.51-.02,3.02,0,4.54,0,.28-.07.34-.34.34-3.72,0-7.44-.01-11.17,0-1.14,0-2.26.15-3.34.53-2.2.78-3.42,2.4-3.91,4.62-.11.49-.17.98-.23,1.48-.04.29.02.39.35.39,2.9-.01,5.81,0,8.71,0,3.19,0,6.37,0,9.56,0,.31,0,.38.07.37.38-.02,1.5-.02,3,0,4.5,0,.29-.06.39-.37.39-3.05-.01-6.1,0-9.15,0Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m176.93,78.39c.84-1.83,1.64-3.59,2.45-5.36,3.73-8.13,7.46-16.26,11.18-24.4.13-.29.28-.38.59-.38,2.18.02,4.37.01,6.55,0,.22,0,.34.06.44.27,4.56,9.88,9.12,19.76,13.69,29.63.02.05.05.11.07.17-.11.09-.22.05-.32.05-2.32,0-4.64,0-6.96,0-.27,0-.37-.09-.47-.33-.91-2.19-1.83-4.37-2.74-6.56-.1-.23-.21-.3-.45-.3-4.52,0-9.03,0-13.55,0-.25,0-.35.08-.45.31-.87,2.18-1.76,4.35-2.63,6.53-.11.27-.23.36-.53.36-2.16-.02-4.32,0-6.48,0h-.42Zm12.41-12.55c.07,0,.11.02.14.02,3.1,0,6.2,0,9.29,0,.27,0,.27-.08.18-.29-.67-1.56-1.34-3.13-2.01-4.69-.93-2.19-1.87-4.37-2.83-6.62-1.6,3.89-3.19,7.72-4.78,11.57Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m175.56,58.88c0,2.91.01,5.83,0,8.74,0,1.34-.16,2.67-.44,3.99-.44,2.06-1.71,3.51-3.4,4.66-1.84,1.24-3.89,1.87-6.06,2.18-2.7.39-5.4.4-8.1.06-2.67-.33-5.17-1.11-7.33-2.82-1.65-1.3-2.51-2.99-2.79-5.03-.2-1.47-.24-2.94-.24-4.41,0-5.85,0-11.71,0-17.56,0-.32.06-.43.41-.43,2.01.02,4.03.02,6.04,0,.33,0,.39.09.39.41,0,6.06,0,12.12,0,18.18,0,.99.11,1.97.35,2.93.51,2.05,1.81,3.3,3.84,3.76,2.05.46,4.11.46,6.17.03,2.33-.48,3.62-1.95,4.06-4.24.21-1.08.24-2.18.24-3.28,0-5.79,0-11.58,0-17.38,0-.34.09-.42.42-.42,2.04.02,4.08.01,6.11,0,.28,0,.34.07.34.34-.01,3.43,0,6.85,0,10.28h0Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m67.02,78.33c-3.59,0-7.18,0-10.77,0-.1,0-.2,0-.29,0-.15,0-.26-.09-.3-.23-.05-.14,0-.27.1-.36.1-.09.21-.16.32-.24,5.92-3.93,12.05-7.53,18.2-11.08,6.05-3.49,12.16-6.87,18.29-10.19.39-.21.39-.21.52.23,2,6.82-.32,14.51-6.74,18.93-2.86,1.97-6.06,2.91-9.53,2.92-3.27,0-6.54,0-9.81,0,0,0,0,.01,0,.02Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m66.58,87.82c-1.53-.81-2.98-1.75-4.44-2.68-1.94-1.25-3.84-2.55-5.71-3.89-.18-.13-.39-.25-.31-.52.08-.27.33-.24.55-.24,4.02.14,8.05.28,12.07.42,2.37.08,4.73.16,7.1.24,3.05.1,6.1.21,9.15.31.29,0,.31.09.16.3-.18.26-.34.53-.51.79-.17-.03-.31.04-.46.1-.64.27-1.27.57-1.9.83-2.51,1.06-5.08,1.95-7.72,2.64-2.3.6-4.62,1.1-6.98,1.41-.33.04-.72-.02-.99.28Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m45.53,48.31c0-.91-.15-1.81-.11-2.72.02-.93-.06-1.85-.12-2.78-.11-2.27-.33-4.54-.61-6.79-.44-3.49-1.05-6.95-2.07-10.32-.52-1.75-1.12-3.47-2.01-5.07-.2-.32-.38-.65-.62-.94h-.15c-.44.16-.92.1-1.36.27.02.01.03.02.04.03-.01-.01-.03-.02-.04-.03-.12.01-.24.02-.36.04-.89.19-1.78.36-2.66.57-.79.19-1.57.42-2.29.81-.14.06-.3.11-.43.18-4.84,2.6-7.3,6.65-7.38,12.13-.04,2.48.54,4.86,1.27,7.2,1.19,3.8,2.86,7.4,4.68,10.93,3.33,6.45,7.15,12.61,11.18,18.64.4.6.81,1.19,1.21,1.78.1.15.22.26.42.22.2-.05.25-.21.27-.39.02-.27.05-.53.08-.8.26-2.57.46-5.15.63-7.73.15-2.23.26-4.45.33-6.68.05-1.85.13-3.7.09-5.56.03-1,0-1.99,0-2.99Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m87.07,46.62c-.11-3.39-1.43-6.38-3.27-9.16-.05-.08-.09-.17-.14-.25-.81-1.23-1.71-2.39-2.73-3.46-.3-.41-.65-.77-1-1.13q-.48-.49-.9.03c-2.86,3.59-5.56,7.31-8.15,11.1-1.16,1.7-2.32,3.4-3.41,5.14-1.11,1.68-2.19,3.39-3.22,5.12-.03.05-.07.1-.1.15-3.55,5.84-6.82,11.83-9.76,18-.32.68-.64,1.37-.96,2.05-.09.19-.13.38.04.54.16.15.34.09.5-.01.03-.02.07-.03.1-.05,3.16-1.58,6.29-3.22,9.37-4.94,5.01-2.79,9.94-5.69,14.56-9.1,2.03-1.49,3.99-3.06,5.66-4.96,2.27-2.59,3.51-5.61,3.4-9.09Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m37.9,77.61c-.05-.03-.1-.07-.15-.1-1.56-1-3.1-2.03-4.67-3.01-6.8-4.25-13.76-8.22-20.75-12.14-1.17-.65-2.35-1.29-3.52-1.93-.79-.47-1.59-.91-2.41-1.33-.24-.12-.49-.23-.72-.37-1.23-.78-2.55-1.41-3.83-2.1-.32-.18-.65-.37-1-.57-.37,1.07-.61,2.12-.69,3.21-.02.09-.05.19-.06.28-.21,2.07-.09,4.12.49,6.12,1.69,5.87,5.44,9.83,11.22,11.84,1.06.37,2.17.62,3.3.7,1.34.24,2.68.13,4.03.14h7.11c1.22,0,2.44,0,3.66,0,2.6-.01,5.2-.03,7.8-.04.21,0,.4-.02.48-.25.07-.23-.09-.36-.26-.47Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m83.05,84.76c-.67.85-1.4,1.63-2.23,2.34-1,.86-2.04,1.65-3.24,2.2-1.94.89-3.95,1.29-6.07.77-1.01-.25-1.96-.67-2.88-1.16.03-.19.18-.21.32-.23.5-.08,1-.16,1.5-.26,1.82-.35,3.63-.76,5.42-1.28,2.09-.6,4.16-1.29,6.17-2.12.32-.13.62-.35,1-.27Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m83.05,84.76c-.38-.08-.68.14-1,.27-2.01.83-4.08,1.52-6.17,2.12-1.79.51-3.59.93-5.42,1.28-.5.1-1,.17-1.5.26-.15.02-.3.04-.32.23-.69-.35-1.4-.67-2.06-1.1.27-.3.66-.23.99-.28,2.36-.31,4.68-.8,6.98-1.41,2.64-.69,5.21-1.58,7.72-2.64.64-.27,1.27-.56,1.9-.83.14-.06.29-.13.46-.1-.5.76-.97,1.53-1.57,2.21Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m37.7,80.7c-.08-.2-.27-.23-.46-.23-2.25.08-4.51.17-6.76.25-1.35-.05-2.68.15-4.03.14-1.59-.03-3.17.16-4.76.16-.98.03-1.95.07-2.93.1-.04,0-.07-.01-.11-.01-3.28.11-6.56.23-9.83.34-.26,0-.29.06-.16.28.56.95,1.16,1.86,1.84,2.72,1.6,2.03,3.46,3.77,5.83,4.88,2.51,1.17,5.06,1.3,7.63.16,1.44-.64,2.85-1.36,4.17-2.23.67-.25,1.21-.73,1.82-1.09.12-.06.24-.11.35-.17.46-.29.93-.59,1.39-.88.35-.22.69-.45,1-.73.17.02.27-.1.39-.18.56-.37,1.11-.76,1.66-1.14.95-.6,1.85-1.26,2.76-1.91.15-.11.3-.24.21-.46Z"
      />
      <path
        className="uuid-b8cb9f06-f42e-4a61-a48b-ac87cdd76575"
        d="m66.71,26.94c-1.27-2.29-3.1-4.04-5.43-5.27-1.68-.88-3.52-1.18-5.33-1.61-.62-.15-1.27-.18-1.89-.37h-.29c-.31.45-.58.92-.82,1.42-1.81,3.79-2.75,7.83-3.4,11.96,0,0,0,0,0,0-.24,1.31-.44,2.63-.54,3.97-.13.18-.06.4-.08.6-.14,1.16-.26,2.33-.31,3.5-.13,1.34-.2,2.68-.24,4.02-.05,1.24-.13,2.49-.09,3.73-.03,1.22-.05,2.44,0,3.66-.04,2.85.1,5.7.25,8.55.19,3.63.48,7.25.85,10.86.02.21.02.43.27.51.26.08.37-.12.48-.29,3.24-4.72,6.31-9.55,9.17-14.51.52-.91,1.06-1.81,1.52-2.74,0,0,0,0,0,0,.07-.11.15-.22.21-.34.57-1.09,1.14-2.18,1.71-3.27.67-1.24,1.28-2.51,1.85-3.8.65-1.36,1.22-2.76,1.74-4.17.62-1.55,1.12-3.13,1.47-4.76.44-1.61.55-3.25.62-4.91.15-2.42-.53-4.65-1.69-6.73Z"
      />
    </svg>
  );
}