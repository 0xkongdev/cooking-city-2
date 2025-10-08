import Lottie from "lottie-react";
import groovyWalkAnimation from "@/animations/logo.json";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Lottie
      animationData={groovyWalkAnimation}
      loop={true}
      className={className}
    />
  );
};

export default Logo;
