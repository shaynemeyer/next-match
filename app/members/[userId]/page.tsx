import { getMemberByUserId } from "@/app/actions/memberActions";
import { CardBody, CardHeader, Divider } from "@nextui-org/react";
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
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Profile
      </CardHeader>
      <Divider />
      <CardBody>{member.description}</CardBody>
    </>
  );
}

export default MemberDetailsPage;
