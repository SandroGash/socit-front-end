import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "small" | "medium" | "large";
  src: string;
  alt: string;
}

export const Avatar = ({ size = "medium", src, alt }: Props) => {
  let sizeStyle: string;

  switch (size) {
    case "small":
      sizeStyle = "w-[24px] h-[24px]";
      break;
    case "medium":
      sizeStyle = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeStyle = "w-[50px] h-[50px]";
      break;
  }

  return (
    <div className={clsx(sizeStyle, "bg-gray-400 rounded-full relative")}>
      <Image
        fill
        src={src ? src : "/assets/images/unsplash.jpg"}
        alt={alt}
        className="object-cover object-center rounded-full"
      />
    </div>
  );
};
