import Link from "next/link";

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
            <ul>
            <div>
                <Link href={"#"}>Email : hlalelegmail.com</Link>
              </div>
              <div>
                <Link href={"#"}>Location : Maseru Lestho  1</Link>
              </div>
              <div>
                <Link href={"#"}>Phone : +266 78901234</Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
