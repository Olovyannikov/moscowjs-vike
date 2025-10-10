import type { PropsWithChildren } from "react";

import { EffectorProvider, ScopeProvider } from "@/shared/lib";

export default function Wrapper({ children }: PropsWithChildren) {
  return (
    <ScopeProvider>
      <EffectorProvider>{children}</EffectorProvider>
    </ScopeProvider>
  );
}
