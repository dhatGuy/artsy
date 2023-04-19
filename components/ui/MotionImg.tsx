"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...props} ref={ref} />;
  }
);

const MotionImg = motion(ExoticImage);

export default MotionImg;
