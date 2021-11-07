import React from "react";

const Icon = ({
  size,
  backgroundColor = "#000",
  iconColor = "#fff",
  IconName,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconName color={iconColor} size={size * 0.5} />
    </div>
  );
};

export default Icon;
