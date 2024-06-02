import React from "react";
import MessageSidebar from "./MessageSidebar";
import { getMessagesByContainer } from "../actions/messageActions";
import MessageTable from "./MessageTable";
import { MessageDto } from "@/types";

async function MessagesPage({
  searchParams,
}: {
  searchParams: { container: string };
}) {
  const { messages, nextCursor } = await getMessagesByContainer(
    searchParams.container
  );
  return (
    <div className="grid grid-cols-12 gap-5 h-[80vh] mt-10">
      <div className="col-span-2">
        <MessageSidebar />
      </div>
      <div className="col-span-10">
        <MessageTable
          intialMessages={messages as MessageDto[]}
          nextCursor={nextCursor}
        />
      </div>
    </div>
  );
}

export default MessagesPage;
