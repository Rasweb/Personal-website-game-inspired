import { IGlobalImage } from "@/types/projectTypes";
import Image from "next/image";

export default function ImageCont(props: IGlobalImage) {
  return (
    <>
      <div>
        <Image
          src={props.src}
          alt={props.alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className={`image ${props.customCss}`}
          width={200}
          height={500}
        />
      </div>
    </>
  );
}
