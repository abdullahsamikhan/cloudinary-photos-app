import { CldImage } from "next-cloudinary";
import UploadButton from "./uploadbutton";
import cloudinary from "cloudinary";
import ListImg from "./cloudImg";

type SearchResult = {
  public_id: string;
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  console.log("hi");
  console.log(results);

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between ">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>

        <div className="grid grid-cols-4 gap-3 ">
          {results.resources.map((result) => (
            <ListImg
              key={result.public_id}
              src={result.public_id}
              publicId={result.public_id}
              width="500"
              height="500"
              alt="Description of my image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
