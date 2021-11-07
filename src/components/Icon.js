import React from "react";

const Icon = ({
  size,
  backgroundColor = "white",
  iconColor = "black",
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
      <IconName color={iconColor} size={size} />
    </div>
  );
};

export default Icon;
