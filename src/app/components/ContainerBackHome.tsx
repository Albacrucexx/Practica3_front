"use client";

import { useRouter } from "next/navigation";

const ContainerBackHome = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="backWrapper">
      <button className="backButton" onClick={() => router.push("/")}>
        ← Volver
      </button>
      {children}
    </div>
  );
};

export default ContainerBackHome;