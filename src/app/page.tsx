'use client'

import { CldImage, CldOgImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

export type UploadResult = {
  info : {
    public_id:string; 
  },
  event: 'success';
}
 

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <>
    <main className="flex flex-col  min-h-screen justify-center items-center gap-3">
    
      <CldUploadButton
       onUpload={(results:UploadResult)=>{
        setImageId(results.info.public_id);
      }} 
      uploadPreset="ddhjtmuj" 
      />


     {imageId && (
        <CldImage
        width="500"
        height="500"
        src={imageId}
        alt="Description of my image"
        />
  )} 
    </main>
    </>
  );
}

