import { Button } from "@material-tailwind/react";
import { Input } from "./Input";
import { toast } from "react-toastify";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  description: string;
};

export const Contact = () => {
  const { register, handleSubmit, control, reset, trigger } =
    useForm<ContactFormData>({
      defaultValues: {
        description: "",
        email: "",
        firstName: "",
        lastName: "",
        subject: "",
      },
    });

  const handleOnSubmit: SubmitHandler<ContactFormData> = useCallback(
    (formData: ContactFormData) => {
      reset();
      trigger();
      toast(`${formData.firstName}, your message has been sent!`, {
        position: "bottom-right",
      });
    },
    []
  );

  return (
    <div className="flex py-16 justify-center">
      <div className="flex font-bold flex-col w-2/5 gap-10">
        <div className="text-4xl pr-40 font-playfair">Submit A Request</div>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex flex-col gap-6"
        >
          <div>
            <Input
              required
              control={control}
              label="First Name"
              fieldName="firstName"
              {...register("firstName", {
                required: "First name is required",
                onChange: () => trigger(),
              })}
            />
          </div>

          <Input
            control={control}
            label="Last Name"
            fieldName="lastName"
            {...register("lastName")}
          />
          <Input
            required
            control={control}
            label="Email"
            fieldName="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
              onChange: () => trigger(),
            })}
          />
          <Input
            control={control}
            label="Subject"
            fieldName="subject"
            {...register("subject")}
          />
          <Input
            required
            control={control}
            label="Description"
            fieldName="description"
            isTextArea
            {...register("description", {
              required: "Description is required",
              onChange: () => trigger(),
            })}
          />
          <Button type="submit" placeholder="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
