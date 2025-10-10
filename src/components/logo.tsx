import Lottie from "lottie-react";
import groovyWalkAnimation from "@/animations/logo.json";
import TextLogo from "@/images/text-logo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Lottie
        animationData={groovyWalkAnimation}
        loop={true}
        className={cn("h-full w-auto flex-shrink-0")}
      />
      <Image 
        src={TextLogo} 
        alt="City Protocol Logo" 
        className={cn("h-full w-auto flex-shrink-0")} 
      />
    </div>
  );
};

export default Logo;
