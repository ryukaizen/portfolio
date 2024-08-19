import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h3 className="header-mini">
        Hey there, <span className="header-italic">you've stumbled upon the portfolio of...</span>
      </h3>

      <span className="header-name"> <Image
        src="https://i.imgur.com/nrUuS3F.jpeg"
        alt="Akash Dalvi"
        width={170}
        height={170}
        className="rounded-full"
      /> <h1>Akash Dalvi</h1></span>

      <div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
				</div>
			</div>
    </main>
  );
}
