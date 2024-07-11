import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="bg-zinc-900 p-5 text-zinc-100">
      <ul className="flex gap-8">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/infos">Infos</Link>
        </li>
      </ul>
    </nav>
  );
}
