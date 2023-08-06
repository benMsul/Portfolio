import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useRef } from "react";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();


  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={1.50}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          attach='material'
          ref={meshRef}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isAboutSectionVisible, setIsAboutSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const { top, bottom } = aboutSection.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom > 0;
        setIsAboutSectionVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div id="about">
        {isAboutSectionVisible && (
        <Canvas
          frameloop='always'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
        )}
      </div>
    </div>
  );
};

export default BallCanvas;


