import Link from "next/link";
import MediaNav from "../components/media_nav";

export default function Masthead() {
  const logo = <h1>Au Courant</h1>;
  const login = <button className="btn btn-primary btn-sm w-24">login</button>;

  return (
    <>
      <div className="flex flex-col  bg-primary-content  p-4 md:p-12 ">
        <div className="flex items-center justify-between  mb-2 ">
          <div>
            <Link href={"/"} className="prose no-underline hover:underline">
              {logo}
            </Link>
          </div>
          <div>{login}</div>
        </div>
        <MediaNav />
      </div>
    </>
  );
}
