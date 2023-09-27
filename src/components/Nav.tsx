import { useEffect } from "react";
import NavCard from "../partials/NavCard";
import { Outlet, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/form", { replace: true });
  }, []);
  const nameFields = [
    { link: "/program-details", name: "Program Details" },
    { link: "/form", name: "Application Form" },
    { link: "/work-flow", name: "Workflow" },
    { link: "/preview", name: "Preview" },
  ];
  return (
    <div className="w-full min-h-screen flex">
      <div className="w-16 min-h-screen shadow-lg drop-shadow-2xl pt-10">
        <ul className="flex items-center justify-center flex-col gap-16">
          <li className="mb-6">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>{" "}
            </button>
          </li>
          <li>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 576 512"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </button>
          </li>
          <li>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.6em"
                viewBox="0 0 384 512"
              >
                <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full mt-24">
        <ul className="w-full h-[140px] shadow-lg drop-shadow-2xl flex justify-around items-center">
          {nameFields.map((field, index) => (
            <NavCard key={index} name={field.name} link={field.link} />
          ))}
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
