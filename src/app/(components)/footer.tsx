import Link from "next/link";
import { FaInbox, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="mt-5  w-full bg-indigo-50">
        <div className="grid grid-cols-1 md:grid-cols-4 mt-10 p-8 ">
          <div className="h-40">
            <h6 className="mt-2 mb-5 font-semibold text-xl">About</h6>
            <ul>
              <div>
                <Link href={"#"}>About 1</Link>
              </div>
              <div>
                <Link href={"#"}>About 1</Link>
              </div>
              <div>
                <Link href={"#"}>About 1</Link>
              </div>
            </ul>
          </div>
          <div className="h-40">
            <h6 className="mt-2 mb-5 font-semibold text-xl">Features</h6>
            <ul>
              <div>
                <Link href={"#"}>About 1</Link>
              </div>
              <div>
                <Link href={"#"}>About 1</Link>
              </div>
              <div>
                <Link href={"#"}>About 1</Link>
              </div>
            </ul>
          </div>
          <div className="h-40">
            <h6 className="mt-2 mb-5 font-semibold text-xl">Pricing</h6>
            <ul>
              <div>
                <Link href={"#"}>About 1</Link>
              </div>
              <div>
                <Link href={"#"}>About 1</Link>
              </div>
              <div>
                <Link href={"#"}>About 1</Link>
              </div>
            </ul>
          </div>
          <div className="h-40">
            <h6 className="mt-2 mb-5 font-semibold text-xl">Contact</h6>
            <ul className="space-y-2">
              <div className="flex flex-row space-x-3">
                <FaLocationArrow />
                <Link href={"#"}>hlalelegmail.com</Link>
              </div>
              <div className="flex flex-row space-x-3">
              <FaLocationArrow />
                <Link href={"#"}>Location : Maseru Lestho 1</Link>
              </div>
              <div className="flex flex-row space-x-3">
                <FaPhoneAlt />
                <Link href={"#"}>Phone : +266 78901234</Link>
              </div>
            </ul>
            {/* <div className="flex flex-row mt-4 space-x-10">
              <div className="text-2xl text-blue-500">
                <FaLocationArrow  />
              </div>
              <div className="text-2xl text-blue-500">
                <FaPhoneAlt />
              </div>
              <div className="text-2xl text-blue-500">
                <FaInbox />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
