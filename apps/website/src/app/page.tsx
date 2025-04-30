import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className=" font-medium text-[4vw]">
          ➡️{" "}
          <span className=" text-green-600">
            {" "}
            <Link
              href={
                "https://massive-dodo-f8e.notion.site/MANOJ-SIR-CLASS-1e576887e01a80bbb228f33850ae2b74"
              }
            >
              {" "}
              CLICK HERE TO OPEN DOC !
            </Link>
          </span>
        </h1>
      </div>
    </div>
  );
}
