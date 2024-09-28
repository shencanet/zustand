"use client"

import { useBeastStore } from "@/stores/bear.store";
import IncreaseBear from "@/stores/increasebears";
const HomePage = () => {
  const bears = useBeastStore((state) => state.bears);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Bears: {bears}</p>
      <IncreaseBear />
    </div>
  )
};

export default HomePage;