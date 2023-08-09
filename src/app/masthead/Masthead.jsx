import Link from "next/link";
import MediaNav from "../components/media_nav";

export default function Masthead() {
  const logo = <h1>Au Courant</h1>;
  const login = (
    <button className="btn btn-primary flex-none w-32">login</button>
  );

  return (
    <>
      <div className="flex justify-between  p-12 items-center bg-base-200 mb-12">
        <div className="prose flex flex-col ">
          <div className="flex justify-between ">
            <Link href={"/"} className="no-underline hover:underline">
              {logo}
            </Link>
            {login}
          </div>
          <MediaNav />
        </div>
      </div>
    </>
  );
}
