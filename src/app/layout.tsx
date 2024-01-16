import "~/styles/globals.css";

import { cookies } from "next/headers";

import { MainLayout } from "~/components/layouts/MainLayout";
import { getServerAuthSession } from "~/server/auth";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "SMURF Radio",
  description: "Generated by create-t3-app",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <head>
        <link
          href="https://use.fontawesome.com/releases/v6.5.1/css/svg-with-js.css"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <TRPCReactProvider cookies={cookies().toString()}>
          <MainLayout session={session}>{children}</MainLayout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
