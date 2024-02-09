import { FieldError } from "react-hook-form";

type Props = { error: FieldError | undefined };

export const ErrorMessage = ({ error }: Props) => {
  if (error == null) return;
  return <div className="text-red-600 text-base">{error.message}</div>;
};
