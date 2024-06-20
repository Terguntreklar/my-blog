import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <h1>Blog App</h1>
      </div>
      <Link key={0} href={"./"} className="navLink">
        List
      </Link>
      <Link key={0} href={"./Create"} className="navLink">
        Create
      </Link>
    </nav>
  );
}
