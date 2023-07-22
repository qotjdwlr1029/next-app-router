import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-gray-300 border-b-2">
      <nav>
        <Link className="inline-block mx-2 my-2 no-underline" href="/">
          Home
        </Link>
        <Link className="inline-block mx-2 my-2 no-underline" href="/about">
          About
        </Link>
        <Link className="inline-block mx-2 my-2 no-underline" href="/detail">
          Detail
        </Link>
        <Link className="inline-block mx-2 my-2 no-underline" href="/user">
          User
        </Link>
        <Link className="inline-block mx-2 my-2 no-underline" href="/photos">
          Photos
        </Link>
        <Link className="inline-block mx-2 my-2 no-underline" href="/dynamic">
          Dynamic
        </Link>
        <Link
          className="inline-block mx-2 my-2 no-underline"
          href="/library/graymatter"
        >
          Graymatter
        </Link>
        <Link className="inline-block mx-2 my-2 no-underline" href="/callApi">
          call api
        </Link>
      </nav>
    </div>
  );
}
