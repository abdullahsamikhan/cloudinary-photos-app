"use server"
import cloudinary from "cloudinary";

export async function setAsFavouriteAction(publicId:string) {
        await  cloudinary.v2.uploader.add_tag("favourite", [publicId]);
}