import { Canvas } from "@react-three/fiber";
import { 
    Ring
} from "./ring";

export function Scene() {
  return (
      <Canvas className="bg-black">
        <Ring
          text="X X X X X X X X X X X X X X X X X X X X X X X X X X X X "
          radius={2}
          height={6}
          segments={32}
        />
      </Canvas>
  );
}
