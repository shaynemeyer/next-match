import React from "react";
import { CardBody, CardHeader, Divider } from "@nextui-org/react";
function ChatPage() {
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Chat
      </CardHeader>
      <Divider />
      <CardBody>Chats go here</CardBody>
    </>
  );
}

export default ChatPage;
