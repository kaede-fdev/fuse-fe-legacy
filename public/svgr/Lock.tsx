import * as React from "react";

import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  variant?: "light" | "dark";
}

const Lock = ({ variant = "dark", ...props }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 1920 1920"
    {...props}
  >
    <path
      fill={variant === "dark" ? "#0F0F0F" : "#fff"}
      fillRule="evenodd"
      d="M1581.294 1694.118c0 62.23-50.598 112.94-112.941 112.94H451.883c-62.231 0-112.942-50.71-112.942-112.94V1016.47h1242.353v677.647Zm-112.941-790.589V508.235C1468.353 228.028 1240.325 0 960.118 0S451.882 228.028 451.882 508.235V903.53H226v790.589C226 1818.692 327.308 1920 451.882 1920h1016.47c124.575 0 225.883-101.308 225.883-225.882V903.529h-225.882Zm-451.765 338.824v338.823h-112.94v-338.823h112.94ZM960.118 112.94c217.976 0 395.294 177.318 395.294 395.294V903.53H564.824V508.235c0-217.976 177.317-395.294 395.294-395.294Z"
    />
  </svg>
);
export default Lock;
