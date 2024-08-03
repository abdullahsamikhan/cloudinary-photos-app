"use client";

import React, { useTransition } from "react";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import { Heart } from "@/components/icons/heart";
import { setAsFavouriteAction } from "./actions";

export default function ListImg(props: any & { publicId: string }) {
  const [transition, startTransition] = useTransition();
  return (
    <div className="relative">
      <CldImage {...props} />
      <Heart
        onClick={() => {
          startTransition(() => {
            setAsFavouriteAction(props.publicId);
          });
        }}
        className="absolute top-2  right-2"
      />
    </div>
  );
}
