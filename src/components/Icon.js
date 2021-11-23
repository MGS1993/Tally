import React from "react";

const Icon = ({
  size = "20px",
  backgroundColor = "white",
  iconColor = "black",
  IconName,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: size,
        height: size,
        borderRadius: parseInt(size) / 2,
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
