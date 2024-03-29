import "~/styles/globals.css";

import { cookies } from "next/headers";

import { MainLayout } from "~/components/layouts/MainLayout";
import { getServerAuthSession } from "~/server/auth";
import { TRPCReactProvider } from "~/trpc/react";
import { PHProvider } from "./providers";
import dynamic from "next/dynamic";

export const metadata = {
  title: "SMURF Radio",
  description: "SMURF Radio",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
    ssr: false,
  });

  return (
    <html lang="en">
      <head>
        <link
          href="https://use.fontawesome.com/releases/v6.5.1/css/svg-with-js.css"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <PHProvider>
          <TRPCReactProvider cookies={cookies().toString()}>
            <PostHogPageView />
            <MainLayout session={session}>{children}</MainLayout>
          </TRPCReactProvider>
        </PHProvider>
      </body>
    </html>
  );
}
