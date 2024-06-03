"use client";

import { generateResetPasswordEmail } from "@/app/actions/authActions";
import CardWrapper from "@/components/CardWrapper";
import ResultMessage from "@/components/ResultMessage";
import { ActionResult } from "@/types";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

function ForgotPasswordForm() {
  const [result, setResult] = useState<ActionResult<string> | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    setResult(await generateResetPasswordEmail(data.email));
    reset();
  };

  return (
    <CardWrapper
      headerIcon={GiPadlock}
      headerText="Forgot Password"
      subHeaderText="Enter your email address and we will email you a link to reset your password"
      body={
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <div className="space-y-4">
            <Input
              defaultValue=""
              type="email"
              placeholder="Enter your email address"
              variant="bordered"
              {...register("email", { required: true })}
            />
            <Button
              isLoading={isSubmitting}
              isDisabled={!isValid}
              color="secondary"
              type="submit"
            >
              Send reset email
            </Button>
          </div>
        </form>
      }
      footer={<ResultMessage result={result} />}
    />
  );
}
export default ForgotPasswordForm;
