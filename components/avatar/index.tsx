import Image from "next/image";
import clsx from "clsx";
import classes from "./classes.module.css";

interface IAvatarProps {
  src?: string;
  alt: string;
  fallback_text: string;
}

export default function Avatar({ src, alt, fallback_text }: IAvatarProps) {
  if (!src) {
    return (
      <div className={clsx(classes.root, classes.fallback)}>
        {fallback_text}
      </div>
    );
  }
  return <Image src={src} alt={alt} className={classes.root} />;
}
