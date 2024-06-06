import { getMemberPhotosByUserId } from "@/app/actions/memberActions";
import CardInnerWrapper from "@/components/CardInnerWrapper";
import MemberPhotos from "@/components/MemberPhotos";
import { Image } from "@nextui-org/react";
import React from "react";

async function PhotosPage({ params }: { params: { userId: string } }) {
  const photos = await getMemberPhotosByUserId(params.userId);
  return (
    <CardInnerWrapper
      header="Photos"
      body={
        <div className="grid grid-cols-5 gap-3">
          <MemberPhotos photos={photos} />
        </div>
      }
    />
  );
}

export default PhotosPage;
