"use client";
import React from "react";
import { UploadResult } from "../page";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UploadButton() {
  const router = useRouter();
  return (
    <Button asChild>
      <CldUploadButton
        onUpload={(results: UploadResult) => {
          //   setImageId(results.info.public_id);
          setTimeout(() => {
            console.log("Refresh");
            
            router.refresh();
          }, 1000);

        }}
        uploadPreset="ddhjtmuj"
      >
              <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          <h1>Upload</h1>
        </div>
      </CldUploadButton>
    </Button>
  );
}
