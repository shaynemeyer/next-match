"use client";

import { toggleLikeMember } from "@/app/actions/likeActions";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type LikeButtonProps = {
  targetId: string;
  hasLiked: boolean;
};

function LikeButton({ targetId, hasLiked }: LikeButtonProps) {
  const router = useRouter();

  async function toggleLike() {
    await toggleLikeMember(targetId, hasLiked);
    router.refresh();
  }

  return (
    <div
      onClick={toggleLike}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasLiked ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}

export default LikeButton;
