import Link from "react-router-dom/Link";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts">posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default NavBar;
