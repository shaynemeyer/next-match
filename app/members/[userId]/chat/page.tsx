import React from "react";
import CardInnerWrapper from "@/components/CardInnerWrapper";
import ChatForm from "./ChatForm";

function ChatPage() {
  return (
    <CardInnerWrapper
      header="Chat"
      body={<div>Chats go here</div>}
      footer={<ChatForm />}
    />
  );
}

export default ChatPage;
