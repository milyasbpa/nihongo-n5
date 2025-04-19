import { LevelProvider } from "@/features/level/context";
import { LevelContainer } from "@/features/level/container";

export default function Home() {
  return (
    <LevelProvider>
      <LevelContainer />
    </LevelProvider>
  );
}
