import { getMemberByUserId } from "@/app/actions/memberActions";
import { notFound } from "next/navigation";
import React from "react";

async function MemberDetailsPage({
  params,
}: {
  params: {
    userId: string;
  };
}) {
  const member = await getMemberByUserId(params.userId);
  console.log({ member });

  if (!member) return notFound();

  return <div>{member.name}</div>;
}

export default MemberDetailsPage;
