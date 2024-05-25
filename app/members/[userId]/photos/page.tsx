import {
  getMemberByUserId,
  getMemberPhotosByUserId,
} from "@/app/actions/memberActions";
import { CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import React from "react";

async function PhotosPage({ params }: { params: { userId: string } }) {
  const photos = await getMemberPhotosByUserId(params.userId);
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-5 gap-3">
          {photos &&
            photos.map((photo) => (
              <Image
                key={photo.id}
                width={300}
                height={300}
                src={photo.url}
                alt="Image of member"
                className="object-cover aspect-square"
              />
            ))}
        </div>
      </CardBody>
    </>
  );
}

export default PhotosPage;