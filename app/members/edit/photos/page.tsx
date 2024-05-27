import { getAuthUserId } from "@/app/actions/authActions";
import {
  getMemberByUserId,
  getMemberPhotosByUserId,
} from "@/app/actions/memberActions";
import React from "react";
import MemberPhotoUpload from "./MemberPhotoUpload";
import MemberPhotos from "@/components/MemberPhotos";
import CardInnerWrapper from "@/components/CardInnerWrapper";

async function PhotosPage() {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <CardInnerWrapper
      header={
        <div className="flex flex-row justify-between items-center w-full">
          <div className="text-2xl font-semibold text-secondary">
            Edit Photos
          </div>
          <MemberPhotoUpload />
        </div>
      }
      body={
        <MemberPhotos
          photos={photos}
          editing={true}
          mainImageUrl={member?.image}
        />
      }
    />
  );
}

export default PhotosPage;
