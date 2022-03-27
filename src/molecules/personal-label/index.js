import React from "react";
import { Label } from "atoms";

function PersonalLabel(props) {
  const { value, value2, mainClass, valueClass, value2Class } = props;

  return (
    <div
      className={`grid md:grid-cols-3 grid-cols-2 gap-2 border-t border-gray-400 py-3 px-1 ${mainClass}`}
    >
      <Label
        value={value}
        classes={{
          root: `font-sans tracking-tight text-sm text-gray-600 ${valueClass}`,
        }}
      />
      <Label
        value={value2}
        classes={{
          root: `md:col-span-2 font-sans tracking-tight text-sm ${value2Class}`,
        }}
      />
    </div>
  );
}

export default PersonalLabel;
