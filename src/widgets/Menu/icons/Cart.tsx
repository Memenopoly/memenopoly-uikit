import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="-1200 -1200 1300 1300" {...props}>
      <path
        transform="rotate(180)"
        d="M384 32c0-53.019-42.981-96-96-96s-96 42.981-96 96c0 53.019 42.981 96 96 96s96-42.981 96-96zM1024 32c0-53.019-42.981-96-96-96s-96 42.981-96 96c0 53.019 42.981 96 96 96s96-42.981 96-96zM1024 448v384h-768c0 35.346-28.654 64-64 64h-192v-64h128l48.074-412.054c-29.294-23.458-48.074-59.5-48.074-99.946 0-70.696 57.308-128 128-128h768v64h-768c-35.346 0-64 28.654-64 64 0 0.218 0.014 0.436 0.016 0.656l831.984 127.344z"
      />
    </Svg>
  );
};

export default Icon;
