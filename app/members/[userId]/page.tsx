import { getMemberByUserId } from "@/app/actions/memberActions";
import CardInnerWrapper from "@/components/CardInnerWrapper";
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

  return (
    <CardInnerWrapper header="Profile" body={<div>{member.description}</div>} />
  );
}

export default MemberDetailsPage;
