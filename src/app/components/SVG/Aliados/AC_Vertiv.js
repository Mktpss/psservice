"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AC_Vertiv({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#FFFFFF" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="uuid-1e1ff562-8ca1-448d-9a0c-fefe110bbdf4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 110"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-af4bd596-f476-4c89-8527-6b9f164be798{fill:${color};stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m73.54,39.25c-.95,0-1.7,0-2.46,0-5.54.07-11.07.15-16.61.21-.49,0-.82.16-1.14.5-4.65,4.84-9.31,9.67-13.97,14.5-.12.12-.2.27-.33.45-.23-.21-.38-.35-.53-.49-4.87-4.83-9.74-9.67-14.6-14.51-.3-.3-.6-.45-1.04-.45-5.85-.06-11.71-.15-17.56-.22-.25,0-.5,0-.85,0,.1-.23.15-.4.23-.55,5.35-9.56,13.19-16.17,23.81-18.96,14.91-3.92,27.97-.24,38.76,10.76,5.89,6,9.23,13.36,10.32,21.71,2.09,16.08-6.03,31.74-20.39,39.38-.6.32-.94.29-1.43-.21-5.48-5.56-10.98-11.1-16.48-16.64-.18-.18-.39-.32-.64-.52,11.65-11.67,23.21-23.24,34.9-34.95Z"
      />
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m4.34,39.47c11.43,11.55,22.86,23.09,34.31,34.66-5.91,5.83-11.81,11.63-17.75,17.49C.84,81.33-5.01,56.82,4.34,39.47Z"
      />
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m176.32,39.13c3.62,0,7.17-.02,10.73,0,2.08.01,4.17-.02,6.25.15,5.77.46,10.3,5.15,10.65,10.89.2,3.19-.45,6.1-2.68,8.53-1.19,1.29-2.64,2.2-4.24,2.89-.21.09-.41.18-.66.3,1.53,2.17,3.03,4.29,4.54,6.42,1.49,2.11,2.98,4.21,4.54,6.42-.6,0-1.08,0-1.55,0-2.36,0-4.72-.01-7.07.01-.45,0-.72-.13-.98-.5-2.53-3.62-5.09-7.22-7.62-10.84-.3-.44-.62-.6-1.13-.57-.88.04-1.76.01-2.71.01v11.84h-8.04v-35.55Zm8.04,16.92c2.53,0,4.99,0,7.45,0,.29,0,.58-.11.85-.21,2.13-.81,3.39-3.02,3.04-5.32-.31-2.06-2.11-3.65-4.39-3.73-2.21-.07-4.42-.02-6.63-.02-.1,0-.2.04-.32.06v9.22Z"
      />
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m141.41,74.69v-35.49h25.61v7.6h-17.51v6.28h14.2v6.96h-14.21v7.36h17.53v7.29h-25.62Z"
      />
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m99.75,39.33c2.07,0,4.05,0,6.02,0,.78,0,1.56.03,2.34-.03.58-.05.83.15,1.02.7,2.22,6.41,4.47,12.81,6.72,19.21.42,1.21.85,2.41,1.31,3.73.13-.29.23-.48.31-.68,2.71-7.39,5.43-14.78,8.13-22.18.2-.55.46-.72,1.03-.71,2.42.04,4.84.03,7.26.03.21,0,.42,0,.71,0-.09.27-.14.46-.21.65-4.28,11.38-8.57,22.76-12.85,34.14-.16.42-.36.57-.81.56-2.34-.02-4.67-.02-7.01,0-.35,0-.56-.05-.71-.43-4.37-11.5-8.76-23-13.14-34.5-.04-.1-.06-.2-.13-.47Z"
      />
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m259.56,39.31c2.49,0,4.86,0,7.24,0,.08,0,.17,0,.25,0q1.65,0,2.2,1.58c2.49,7.11,4.99,14.22,7.48,21.34.07.2.15.39.28.69.13-.32.24-.55.33-.78,2.71-7.37,5.42-14.74,8.1-22.12.18-.5.41-.67.94-.66,2.65.03,5.3.01,8.06.01-.1.29-.16.5-.24.7-4.27,11.36-8.55,22.71-12.81,34.07-.16.44-.37.6-.85.6-2.32-.03-4.63-.02-6.95,0-.43,0-.62-.12-.78-.52-4.34-11.42-8.69-22.84-13.04-34.26-.06-.15-.11-.31-.22-.64Z"
      />
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m219.26,46.83h-10.62v-7.63h30v7.62h-10.57v27.85h-8.81v-27.85Z"
      />
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m245,39.19h7.93v35.5h-7.93v-35.5Z"
      />
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m299.15,72.01c-.32.87-.62,1.75-.96,2.62-.07.19-.3.44-.46.44-.16,0-.4-.24-.47-.43-.41-1.07-.79-2.16-1.3-3.22v3.64c-.24.02-.42.04-.65.06v-5.8c.77-.2.89-.15,1.16.57.4,1.08.79,2.16,1.26,3.42.37-1.01.68-1.85.99-2.69.1-.28.2-.55.3-.83.24-.64.28-.66.98-.49v5.77c-.24.02-.42.03-.69.05v-3.07c-.05,0-.11-.02-.16-.03Z"
      />
      <path
        className="uuid-af4bd596-f476-4c89-8527-6b9f164be798"
        d="m294.8,69.94h-2.13v5.12h-.75v-5.11h-1.78c-.01-.24-.02-.42-.03-.58.07-.05.1-.09.13-.1,1.41-.01,2.81-.02,4.22-.03.47,0,.41.3.33.69Z"
      />
    </svg>
  );
}
