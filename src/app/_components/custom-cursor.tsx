"use client";

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

export default function CustomCursor() {
  return (
    <>
      <Cursor isGelly={true} data-cursor-color="var(--purple)" />
    </>
  );
}
