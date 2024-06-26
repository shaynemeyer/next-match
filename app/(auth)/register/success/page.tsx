"use client";

import CardWrapper from "@/components/CardWrapper";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

function RegisterSuccessPage() {
  const router = useRouter();

  return (
    <CardWrapper
      headerText="You have successfully registered"
      subHeaderText="You can now login to the app"
      action={() => router.push("/login")}
      actionLabel="Please verify your email address before you can login"
      headerIcon={FaCheckCircle}
    />
  );
}
export default RegisterSuccessPage;
