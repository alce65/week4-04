import { MenuOptions } from "../../types/menu.options";
import { Link } from "react-router-dom";

type PropsType = {
  options: MenuOptions;
};

export function Menu({ options }: PropsType) {
  return (
    <nav>
      <p>Soy un menu</p>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
