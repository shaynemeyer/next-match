import React from "react";
import CardInnerWrapper from "@/components/CardInnerWrapper";
import ChatForm from "./ChatForm";
import { getMemberByUserId } from "@/app/actions/memberActions";
import { getMessageThread } from "@/app/actions/messageActions";

async function ChatPage({ params }: { params: { userId: string } }) {
  const messages = await getMessageThread(params.userId);

  return (
    <CardInnerWrapper
      header="Chat"
      body={<div>Chats go here</div>}
      footer={<ChatForm />}
    />
  );
}

export default ChatPage;
