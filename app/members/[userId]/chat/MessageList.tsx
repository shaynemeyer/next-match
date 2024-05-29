"use client";

import { MessageDto } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import { pusherClient } from "@/lib/pusher";

type MessageListProps = {
  initialMessages: MessageDto[];
  currentUserId: string;
  chatId: string;
};

function MessageList({
  initialMessages,
  currentUserId,
  chatId,
}: MessageListProps) {
  const [messages, setMessages] = useState(initialMessages);

  const handleNewMessage = useCallback((message: MessageDto) => {
    setMessages((prevState) => {
      return [...prevState, message];
    });
  }, []);

  useEffect(() => {
    const channel = pusherClient.subscribe(chatId);
    channel.bind("message:new", handleNewMessage);

    return () => {
      channel.unsubscribe();
      channel.unbind("message:new", handleNewMessage);
    };
  }, [chatId, handleNewMessage]);

  return (
    <div>
      {messages.length === 0 ? (
        "No messages to display"
      ) : (
        <div>
          {messages.map((message) => (
            <MessageBox
              key={message.id}
              message={message}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MessageList;
