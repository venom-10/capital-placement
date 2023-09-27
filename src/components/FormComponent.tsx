import { FormField, Field } from "../form-fields";
import Input from "../partials/Input";
import RadioInput from "../partials/RadioInput";

export default function FormComponent(props: { field: FormField }) {
  return (
    <div>
      <div className=" w-full rounded-3xl overflow-hidden">
        <div className="text-xl text-black font-bold bg-[#D0F7FA] p-[20px] ">
          {props.field.name}
        </div>
        <div className="p-[40px] drop-shadow-md border bg-gray-50">
          {props.field.normalFields?.map((field: Field, id) => (
            <Input field={field} id={id} />
          ))}

          {props.field.radioFields?.map((field: Field, id) => (
            <RadioInput field={field} id={id} />
          ))}
          <button className="w-max h-full font-medium text-black flex items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
}
