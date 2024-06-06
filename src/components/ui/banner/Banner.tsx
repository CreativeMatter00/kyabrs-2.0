import Image from "next/image";

function Banner({ image, name }: { image: string; name: string }) {
  return (
    <div
      style={{ background: "linear-gradient( #313639 80%, #414A50 20%)" }}
      className="pt-8"
    >
      <div className="container mx-auto">
        <div className="relative">
          <Image
            src={image}
            height={460}
            width={1024}
            className="w-full h-auto rounded-lg"
            alt="about-us"
          />
          <p className="text-4xl font-bold text-bgPrimary absolute bottom-0 left-0 bg-brandColorLs1 py-8 px-8 opacity-90 rounded-bl-lg rounded-tr-lg w-[260px] capitalize">
            {name}
          </p>
          <div className="h-12 absolute bottom-0 right-0 bg-brandColorLs1 w-[calc(100%-260px)] opacity-90 rounded-br-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
