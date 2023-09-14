"use client";

import React from "react";
import Terminal from "react-animated-term";
import "react-animated-term/dist/react-animated-term.css";

const termLines = [
  {
    text: "ls",
    cmd: true,
  },
  {
    text: "index.js    package.json    node_modules",
    cmd: false,
  },
  {
    text: "",
    cmd: true,
  },
];

const page = () => {
  return (
    <div>
      <Terminal lines={termLines} interval={80} white />
    </div>
  );
};

export default page;
