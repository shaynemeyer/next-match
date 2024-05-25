import Link from "next/link";
import React from "react";
import { getMembers } from "../actions/memberActions";

async function MembersPage() {
  const members = await getMembers();

  return (
    <div>
      <ul>
        {members &&
          members.map((member) => (
            <li key={member.id}>
              <Link href={`/members/${member.id}`}>{member.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MembersPage;
