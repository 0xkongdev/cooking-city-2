import Lottie from "lottie-react";
import groovyWalkAnimation from "@/animations/logo.json";
import TextLogo from "@/images/text-logo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Logo = () => {
  return (
    <>
      <Lottie
        animationData={groovyWalkAnimation}
        loop={true}
        className={cn("h-full w-auto")}
      />
      <Image src={TextLogo} alt="Logo" className={cn("h-full w-auto")} />
    </>
  );
};


export default Logo;
