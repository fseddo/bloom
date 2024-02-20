import { HTMLInputTypeAttribute, forwardRef } from "react";
import {
  Controller,
  FieldError,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";
import { CgAsterisk } from "react-icons/cg";

type Props<
  TFieldValues extends FieldValues,
  TFieldPath extends FieldPath<TFieldValues>
> = {
  label: string;
  fieldName: TFieldPath;
  control: any;
  isRequired?: boolean;
  type?: HTMLInputTypeAttribute;
  isTextArea?: boolean;
  required?: boolean;
};

export const Input = forwardRef(
  <
    TFieldValues extends FieldValues,
    TFieldPath extends FieldPath<TFieldValues>
  >(
    {
      label,
      fieldName,
      type = "text",
      isTextArea = false,
      control,
      required = false,
    }: Props<TFieldValues, TFieldPath>,
    ref: any
  ) => {
    return (
      <Controller
        control={control}
        name={fieldName}
        render={({ field, formState }) => (
          <div className="flex flex-col gap-2">
            <div className="flex">
              {label}
              {required && (
                <div className="mt-1 text-red-400">
                  <CgAsterisk size={10} />
                </div>
              )}
            </div>
            <div>
              {isTextArea ? (
                <textarea
                  className="border rounded-md w-full text-md px-2 py-1 h-40"
                  {...field}
                />
              ) : (
                <input
                  className="border rounded-md w-full text-md px-2 py-1"
                  type={type}
                  {...field}
                  ref={ref}
                />
              )}
              <ErrorMessage
                error={formState.errors[fieldName] as FieldError | undefined}
              />
            </div>
          </div>
        )}
      />
    );
  }
);
