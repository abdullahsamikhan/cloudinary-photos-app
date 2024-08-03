"use client";

import React from "react";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";


export default function ListImg(props: any) {
  return  <CldImage {...props} />;
}
