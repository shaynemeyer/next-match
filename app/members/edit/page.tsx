import { getAuthUserId } from "@/app/actions/authActions";
import { getMemberByUserId } from "@/app/actions/memberActions";
import React from "react";
import EditForm from "./EditForm";
import { notFound } from "next/navigation";
import CardInnerWrapper from "@/components/CardInnerWrapper";

async function EditPage() {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);

  if (!member) return notFound();

  return (
    <CardInnerWrapper
      header="Edit Profile"
      body={<EditForm member={member} />}
    />
  );
}

export default EditPage;
