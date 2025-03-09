import { Canvas } from "@react-three/fiber";
import { 
    Ring
} from "./ring";

export function Scene() {
  return (
    <div className="mx-auto flex flex-row items-center sm:flex-col sm:items-start max-w-2xl h-auto  gap-x-8 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-100 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <Canvas className="bg-black">
        <Ring
          text="X X X X X X X X X X X X X X X X X X X X X X X X X X X X "
          radius={2}
          height={6}
          segments={32}
        />
      </Canvas>
    </div>
  );
}
