"use client";

import {
  generateResetPasswordEmail,
  resetPassword,
} from "@/app/actions/authActions";
import CardWrapper from "@/components/CardWrapper";
import ResultMessage from "@/components/ResultMessage";
import {
  ResetPasswordSchema,
  resetPasswordSchema,
} from "@/lib/schemas/forgotPasswordSchema";
import { ActionResult } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<ActionResult<string> | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ResetPasswordSchema>({
    mode: "onTouched",
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordSchema) => {
    setResult(await resetPassword(data.password, searchParams.get("token")));
    reset();
  };

  return (
    <CardWrapper
      headerIcon={GiPadlock}
      headerText="Reset Password"
      subHeaderText="Enter your new password below"
      body={
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <div className="space-y-4">
            <Input
              defaultValue=""
              type="password"
              placeholder="Password"
              variant="bordered"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Input
              defaultValue=""
              type="password"
              placeholder="Confirm Password"
              variant="bordered"
              {...register("confirmPassword")}
              isInvalid={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message as string}
            />
            <Button
              isLoading={isSubmitting}
              isDisabled={!isValid}
              color="secondary"
              type="submit"
            >
              Reset password
            </Button>
          </div>
        </form>
      }
      footer={<ResultMessage result={result} />}
    />
  );
}
export default ResetPasswordForm;
