/* eslint-disable react/prop-types */
import { Breadcrumbs } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function BreadcrumbsWithIcon({page}) {
  const Navigate = useNavigate()
  return (
    <Breadcrumbs className="bg-0 px-0 cursor-auto">
      <button onClick={() => Navigate('/')} className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </button>
      <div className=" text-black">
        <span className="text-black select-none font-semibold text-sm cursor-auto">{page}</span>
      </div>
    </Breadcrumbs>
  );
}
