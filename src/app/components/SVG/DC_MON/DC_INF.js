"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DC_INF({ width, height }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#324BA6" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`  .cls-1 {
        fill: none;
      }

      .cls-1, .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: ${color};
      }`}
        </style>
      </defs>
      <g>
        <g>
          <path
            className="cls-2"
            d="m36.17,74.99c-.13,0-.27-.03-.4-.08l-9.98-4.16c-.51-.21-.77-.79-.59-1.31l2.67-7.64-.4-.31s-.06-.05-.07-.05c-.12-.09-.23-.19-.35-.28l-.71-.6c-.09-.08-.19-.17-.28-.25l-1.66-1.63s-.05-.05-.05-.05l-.41-.45.73-.76-.78.7c-.08-.08-.15-.17-.22-.25-.07-.08-.15-.17-.23-.27-.04-.04-.09-.1-.13-.16l-.84-1.07-7.66,2.63c-.52.18-1.1-.08-1.31-.59l-4.11-10c-.21-.51.01-1.1.51-1.34l7.29-3.52-.03-.21c-.02-.15-.04-.3-.05-.46l-.02-.21c-.02-.15-.03-.3-.04-.45l-.02-.25c0-.1-.02-.22-.02-.34l-.05-1s0-.1,0-.11v-.67s0-.26,0-.26c0-.13,0-.27,0-.42v-.23c.01-.15.02-.3.02-.45v-.2c.02-.16.03-.32.04-.48,0,0,0-.07,0-.08v-.09c.02-.17.03-.34.05-.51,0-.02.01-.11.01-.13.02-.19.04-.35.06-.52,0-.01.01-.09.01-.1l.07-.5-7.27-3.55c-.5-.24-.72-.83-.51-1.34l4.16-9.98c.21-.51.79-.77,1.31-.59l7.64,2.67.12-.15.89.56-.84-.63s.04-.06.05-.06l.34-.43c.08-.1.16-.2.24-.3l.14-.17s.05-.05.05-.05l.88-.98c.09-.1.19-.21.29-.31l.16-.17c.1-.1.21-.21.32-.32l.14-.13c.12-.11.23-.22.35-.33,0,0,.05-.05.05-.05l.45-.41s.02-.02.03-.03c.09-.08.18-.15.26-.23l.2-.17c.18-.15.32-.27.45-.38l.11-.09c.14-.11.27-.21.4-.32l.14-.11c.07-.05.13-.1.2-.15l-2.63-7.66c-.18-.52.08-1.1.59-1.31l10-4.11c.52-.21,1.1.02,1.34.51l3.52,7.29.41-.05s.07,0,.07,0l.58-.06c.22-.02.38-.04.54-.05h.13c.23-.03.39-.04.55-.04l.12,1.04-.05-1.05.58-.02.11,1.04-.03-1.05h.49s.08,0,.08,0c0,0,.13,0,.13,0h.29c.11-.01.24,0,.37,0l2.03.12s.12.01.13.01c.02,0,.11.01.12.01.13.01.28.03.42.05,0,0,.08.01.08.01l.48.06s.06,0,.07,0l.73.11c.57.1.95.64.86,1.21-.1.57-.63.96-1.21.86l-.57-.09s-.07-.01-.07-.01l-.56-.08.06-1.05-.13,1.04c-.13-.02-.26-.03-.39-.04,0,0-.07,0-.08,0l-2.03-.13c-.11,0-.22,0-.33,0h-.3s-.12,0-.12,0h-.51s-.06.01-.07.01l-.55.02h-.07c-.15.01-.29.02-.44.03h-.16c-.17.02-.31.04-.46.05,0,0-.07,0-.07,0l-1.68.22c-.45.08-.91-.16-1.11-.58l-3.42-7.1-8.17,3.36,2.56,7.45c.15.44,0,.92-.38,1.19l-.43.31c-.12.09-.23.17-.34.26l-.08.06s-.05.04-.06.04c-.12.09-.24.19-.36.28l-.05.04s-.06.05-.06.05c-.12.1-.25.2-.37.3,0,0-.06.05-.06.05l-.17.15c-.08.07-.16.14-.24.21,0,0-.02.01-.02.02s-.02.01-.02.02l-.41.37c-.15.14-.26.24-.36.35l-.13.12c-.1.1-.2.2-.3.3l-1.4,1.54c-.08.1-.15.18-.22.27l-.3.38-.88-.57.84.63s-.04.05-.05.06l-.57.76c-.27.38-.76.53-1.2.38l-7.44-2.6-3.4,8.15,7.08,3.46c.41.2.65.65.57,1.1,0,.01-.01.09-.02.1l-1.04-.12,1.03.19c-.02.15-.05.3-.07.45l-.08.61c-.02.2-.04.36-.06.51v.12c-.03.18-.04.34-.06.5v.12c-.02.19-.03.33-.04.48v.18c-.02.14-.02.28-.03.42v.21c0,.13,0,.26,0,.39v.24s.1,2.2.1,2.2c.01.13.02.26.04.4l.02.19c.02.15.03.29.05.43l.14.92c.07.46-.16.91-.58,1.11l-7.1,3.42,3.36,8.17,7.45-2.56c.45-.15.95.01,1.21.41l1.1,1.44s.05.05.05.05l.17.2c.08.1.15.18.22.26.07.09.13.15.19.22,0,0,.06.07.06.07l.36.4-.71.77.76-.72,2,1.91.46.39c.1.08.21.17.32.26.04.03.07.06.1.09l.39.3h0s0,0,.01,0c.01,0,.02.02.03.02.1.08.2.15.3.22,0,0,.07.05.07.05.01,0,.08.06.1.07.4.27.55.76.39,1.21l-2.6,7.44,8.15,3.4,3.46-7.08c.2-.42.66-.65,1.12-.57l.58.09-.08,1.05.15-1.04.53.07-.04,1.05.12-1.04,1.55.14s.07,0,.07,0l1.13.04c.14,0,.26,0,.38,0h.63s.09-.01.09-.01l.53-.02s.09,0,.1,0l2.13-.21s.07,0,.07,0l.54-.08.21,1.03.16,1.04-2.33.29-.19-1.04.09,1.04s-.09,0-.09,0c0,0-.07,0-.07,0l-1.08.05-.11-1.04.03,1.05h-.68c-.13.01-.27,0-.41,0l-2.97-.2s-.1-.01-.11-.01l-.49-.07-3.55,7.27c-.18.37-.55.59-.94.59Zm-7.28-13.66h0s.04-.06.04-.06l-.04.06Z"
          />
          <path
            className="cls-2"
            d="m44.55,58.54c-9.64,0-17.87-7.42-18.69-17.2-.42-4.99,1.13-9.85,4.37-13.68s7.77-6.17,12.76-6.58c2.13-.18,4.26,0,6.31.54.56.15.89.72.75,1.28-.15.56-.72.89-1.28.75-1.82-.48-3.71-.64-5.61-.48-4.44.37-8.46,2.45-11.34,5.85-2.87,3.4-4.25,7.72-3.88,12.15.77,9.16,8.84,16,18,15.22.96-.08,1.91-.24,2.83-.48.56-.15,1.13.19,1.28.75s-.19,1.13-.75,1.28c-1.04.27-2.11.45-3.18.54-.53.04-1.06.07-1.58.07Z"
          />
        </g>
        <path
          className="cls-2"
          d="m52.31,26.72c-2.16,0-3.91-1.75-3.91-3.91s1.75-3.91,3.91-3.91,3.91,1.75,3.91,3.91-1.75,3.91-3.91,3.91Zm0-5.73c-1,0-1.82.82-1.82,1.82s.82,1.82,1.82,1.82,1.82-.82,1.82-1.82-.82-1.82-1.82-1.82Z"
        />
        <path
          className="cls-2"
          d="m69.51,43.61c-2.16,0-3.91-1.75-3.91-3.91s1.75-3.91,3.91-3.91,3.91,1.75,3.91,3.91-1.75,3.91-3.91,3.91Zm0-5.73c-1,0-1.82.82-1.82,1.82s.82,1.82,1.82,1.82,1.82-.82,1.82-1.82-.82-1.82-1.82-1.82Z"
        />
        <path
          className="cls-2"
          d="m71.05,24.88c-2.16,0-3.91-1.75-3.91-3.91s1.75-3.91,3.91-3.91,3.91,1.75,3.91,3.91-1.75,3.91-3.91,3.91Zm0-5.73c-1,0-1.82.82-1.82,1.82s.82,1.82,1.82,1.82,1.82-.82,1.82-1.82-.82-1.82-1.82-1.82Z"
        />
        <path
          className="cls-2"
          d="m71.05,61.63c-2.16,0-3.91-1.75-3.91-3.91s1.75-3.91,3.91-3.91,3.91,1.75,3.91,3.91-1.75,3.91-3.91,3.91Zm0-5.73c-1,0-1.82.82-1.82,1.82s.82,1.82,1.82,1.82,1.82-.82,1.82-1.82-.82-1.82-1.82-1.82Z"
        />
        <path
          className="cls-2"
          d="m52.31,60.65c-2.16,0-3.91-1.75-3.91-3.91s1.75-3.91,3.91-3.91,3.91,1.75,3.91,3.91-1.75,3.91-3.91,3.91Zm0-5.73c-1,0-1.82.82-1.82,1.82s.82,1.82,1.82,1.82,1.82-.82,1.82-1.82-.82-1.82-1.82-1.82Z"
        />
        <path
          className="cls-2"
          d="m49.65,49.29h-9.87c-.37,0-.72-.2-.91-.52l-4.94-8.55c-.19-.32-.19-.72,0-1.05l4.94-8.55c.19-.32.53-.52.91-.52h9.87c.37,0,.72.2.91.52l4.93,8.55c.19.32.19.72,0,1.05l-4.93,8.55c-.19.32-.53.52-.91.52Zm-9.27-2.1h8.66l4.33-7.5-4.33-7.5h-8.66l-4.33,7.5,4.33,7.5Z"
        />
        <path
          className="cls-2"
          d="m66.25,40.9h-11.31c-.58,0-1.05-.47-1.05-1.05s.47-1.05,1.05-1.05h11.31c.58,0,1.05.47,1.05,1.05s-.47,1.05-1.05,1.05Z"
        />
        <path
          className="cls-2"
          d="m60.91,49.27h-10.85c-.58,0-1.05-.47-1.05-1.05s.47-1.05,1.05-1.05h10.85c.58,0,1.05.47,1.05,1.05s-.47,1.05-1.05,1.05Z"
        />
        <path
          className="cls-2"
          d="m60.91,49.27h-10.85c-.58,0-1.05-.47-1.05-1.05s.47-1.05,1.05-1.05h10.85c.58,0,1.05.47,1.05,1.05s-.47,1.05-1.05,1.05Z"
        />
        <path
          className="cls-2"
          d="m60.91,32.2h-10.85c-.58,0-1.05-.47-1.05-1.05s.47-1.05,1.05-1.05h10.85c.58,0,1.05.47,1.05,1.05s-.47,1.05-1.05,1.05Z"
        />
        <path
          className="cls-2"
          d="m60.91,32.2h-10.85c-.58,0-1.05-.47-1.05-1.05s.47-1.05,1.05-1.05h10.85c.58,0,1.05.47,1.05,1.05s-.47,1.05-1.05,1.05Z"
        />
        <path
          className="cls-2"
          d="m68.9,56.79c-.27,0-.54-.1-.74-.31l-7.47-7.47c-.41-.41-.41-1.07,0-1.48s1.07-.41,1.48,0l7.47,7.47c.41.41.41,1.07,0,1.48-.2.2-.47.31-.74.31Z"
        />
        <path
          className="cls-2"
          d="m61.43,32.08c-.27,0-.54-.1-.74-.31-.41-.41-.41-1.07,0-1.48l7.47-7.47c.41-.41,1.07-.41,1.48,0s.41,1.07,0,1.48l-7.47,7.47c-.2.2-.47.31-.74.31Z"
        />
        <path
          className="cls-2"
          d="m34.22,40.54h-6.6c-.58,0-1.05-.47-1.05-1.05s.47-1.05,1.05-1.05h6.6c.58,0,1.05.47,1.05,1.05s-.47,1.05-1.05,1.05Z"
        />
        <path
          className="cls-2"
          d="m39.52,31.98c-.36,0-.72-.19-.91-.53l-3.59-6.28c-.29-.5-.11-1.14.39-1.43.5-.29,1.14-.11,1.43.39l3.59,6.28c.29.5.11,1.14-.39,1.43-.16.09-.34.14-.52.14Z"
        />
        <path
          className="cls-2"
          d="m35.93,56.11c-.18,0-.36-.04-.52-.14-.5-.29-.68-.93-.39-1.43l3.59-6.28c.29-.5.93-.68,1.43-.39.5.29.68.93.39,1.43l-3.59,6.28c-.19.34-.55.53-.91.53Z"
        />
      </g>
    </svg>
  );
}