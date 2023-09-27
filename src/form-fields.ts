export interface FormField {
  name: string;
  normalFields?: Field[];
  radioFields?: Field[];
}

export interface Field {
  name: string;
  type: string;
}
export const formFields: FormField[] = [
  {
    name: "Personal Information",
    normalFields: [
      { name: "first_name", type: "text" },
      { name: "last_name", type: "text" },
      { name: "email", type: "email" },
    ],
    radioFields: [
      { name: "phone", type: "phone" },
      { name: "nationality", type: "text" },
      { name: "current_residence", type: "text" },
      { name: "id_number", type: "number" },
      { name: "date_of_birth", type: "date" },
      { name: "gender", type: "text" },
    ],
  },
  {
    name: "Profile",
    radioFields: [
      { name: "education", type: "text" },
      { name: "experience", type: "text" },
      { name: "resume", type: "text" },
    ],
  },
];
