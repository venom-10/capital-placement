import { NavLink } from "react-router-dom";
export default function NavCard(props: { name: string; link: string }) {
  return (
    <NavLink
      to={props.link}
      className="text-center font-medium h-full w-full grid items-center justify-center "
    >
      <li className="">{props.name}</li>
    </NavLink>
  );
}
