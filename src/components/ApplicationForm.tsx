import { useState, useEffect } from "react";
import Delete from "../partials/Delete";
import FormComponent from "./FormComponent";
import { formFields, FormField } from "../form-fields";

export default function ApplicationForm() {
  const [fileBlob, setFileBlob] = useState<string | null>(null);
  const fileInput = document.getElementById("file");

  const resetFile = () => {
    setFileBlob(null);
    if (fileInput) {
      fileInput.classList.remove("hidden");
    }
  };

  useEffect(() => {
    if (fileInput && fileBlob) {
      console.log(fileBlob);
      fileInput.classList.add("hidden");
    }
  }, [fileBlob]);

  return (
    <div className="py-16 px-10 w-[50%] font-main flex flex-col gap-10">
      <div className=" w-full rounded-3xl overflow-hidden">
        <div className="text-xl text-black font-bold bg-[#D0F7FA] p-[20px] ">
          Upload cover image
        </div>
        <div className="p-[40px] drop-shadow-md border bg-gray-50">
          <div id="file" className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-900">
                  <span className="font-semibold">Upload cover image</span>
                </p>
                <p className="text-xs text-gray-500">
                  16:9 ratio is recommended. Max image size 1mb
                </p>
              </div>

              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFileBlob(URL.createObjectURL(file));
                  }
                }}
              />
            </label>
          </div>
          {fileBlob && (
            <>
              <img
                src={fileBlob}
                alt="Cover Image Preview"
                className="mb-4 rounded-t-lg"
                style={{ width: "100%", maxHeight: "300px" }}
              />

              <div
                className="bg-gray-200 -mt-4 rounded-b-lg p-3"
                style={{ width: "100%", maxHeight: "300px" }}
              >
                <Delete name="Delete & re-upload" resetFile={resetFile} />
              </div>
            </>
          )}
        </div>
      </div>
      {formFields.map((field: FormField, index) => {
        return <FormComponent key={index} field={field} />;
      })}
    </div>
  );
}
