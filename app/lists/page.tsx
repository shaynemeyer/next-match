import React from "react";
import ListsTab from "./ListsTab";
import {
  fetchCurrentUserLikeIds,
  fetchLikedMembers,
} from "../actions/likeActions";

async function ListsPage({ searchParams }: { searchParams: { type: string } }) {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMembers(searchParams.type);

  return (
    <div>
      <ListsTab members={members} likeIds={likeIds} />
    </div>
  );
}

export default ListsPage;
