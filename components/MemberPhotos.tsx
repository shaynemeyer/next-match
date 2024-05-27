"use client";

import { setMainImage } from "@/app/actions/userActions";
import { Photo } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import MemberImage from "./MemberImage";
import StarButton from "./StarButton";

type MemberPhotosProps = {
  photos: Photo[] | null;
  editing?: boolean;
  mainImageUrl?: string | null;
};

function MemberPhotos({ photos, editing, mainImageUrl }: MemberPhotosProps) {
  const router = useRouter();
  const [loading, setLoading] = useState({
    type: "",
    isLoading: false,
    id: "",
  });

  const onSetMain = async (photo: Photo) => {
    setLoading({
      type: "main",
      isLoading: true,
      id: photo.id,
    });
    await setMainImage(photo);
    setLoading({
      type: "main",
      isLoading: false,
      id: "",
    });
    router.refresh();
    setLoading({ isLoading: false, id: "", type: "" });
  };

  return (
    <div className="grid grid-cols-5 gap-3 p-5">
      {photos &&
        photos.map((photo) => (
          <div className="relative" key={photo.id}>
            <MemberImage photo={photo} />
            {editing && (
              <>
                <div
                  onClick={() => onSetMain(photo)}
                  className="absolute top-3 left-3 z-50"
                >
                  <StarButton
                    selected={photo.url === mainImageUrl}
                    loading={
                      loading.isLoading &&
                      loading.type === "main" &&
                      loading.id === photo.id
                    }
                  />
                </div>
                <div className="absolute top-3 right-3 z-50">
                  <DeleteButton loading={false} />
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
}

export default MemberPhotos;
