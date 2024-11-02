"use client";

import { Suspense, use } from "react";

const mockingEnabledPromise =
  typeof window !== "undefined" && process.env.NODE_ENV === "development"
    ? import("../mocks/browser").then(async ({ worker }) => {
        await worker.start({
          serviceWorker: {
            url: "/hoge/mockServiceWorker.js",
            options: { scope: "/" },
          },
        });
      })
    : Promise.resolve();

const MSWProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
};

export default MSWProvider;
const MSWProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  use(mockingEnabledPromise);
  return children;
};
