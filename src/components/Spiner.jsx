import { Spinner } from "@material-tailwind/react";
 
export function DefaultSpinner() {
  return (
    <div className="flex justify-center items-center py-10 cursor-auto">
        <Spinner />
    </div>
  );
}