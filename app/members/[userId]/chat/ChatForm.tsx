"use client";

import { MessageSchema, messageSchema } from "@/lib/schemas/messageSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { HiPaperAirplane } from "react-icons/hi2";

function ChatForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: MessageSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex items-center gap-2"
    >
      <Input
        fullWidth
        placeholder="Type a message"
        variant="faded"
        {...register("text")}
        isInvalid={!!errors.text}
        errorMessage={errors.text?.message}
      />
      <Button
        type="submit"
        isIconOnly
        color="secondary"
        radius="full"
        isLoading={isSubmitting}
        isDisabled={!isValid || isSubmitting}
      >
        <HiPaperAirplane size={18} />
      </Button>
    </form>
  );
}

export default ChatForm;
