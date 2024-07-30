import React from "react";

const WidgetWrapper = ({ children }) => {
  return (
    <div className="p-6 pb-3 bg-neutral-light rounded-3xl">{children}</div>
  );
};

export default WidgetWrapper;
