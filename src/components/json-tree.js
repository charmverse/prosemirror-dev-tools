import React from "react";
import { JSONTree as JSONTreeVendor } from "react-json-tree";
import { jsonTreeTheme } from "./../theme";

export default function JSONTree(props) {
  return (
    <JSONTreeVendor
      invertTheme={false}
      theme={jsonTreeTheme}
      hideRoot
      {...props}
    />
  );
}
