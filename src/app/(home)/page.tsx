import { HomeProvider } from "@/features/home/context";
import { HomeContainer } from "@/features/home/container";

export default function Home() {
  return (
    <HomeProvider>
      <HomeContainer />
    </HomeProvider>
  );
}
