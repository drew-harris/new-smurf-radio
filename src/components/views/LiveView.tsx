"use client";

import { type RouterOutputs } from "~/trpc/shared";
import { ShowInfo } from "../ShowInfo";
import { SlimShowInfo } from "../SlimShowInfo";
import { Player } from "../Player";
import { useViewportSize } from "@mantine/hooks";

import { Chat } from "../chat/Chat";
import { Card } from "../Card";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

interface LiveViewProps {
  payload: NonNullable<RouterOutputs["live"]["getLivePayload"]>;
}

export const LiveView = ({ payload }: LiveViewProps) => {
  const { width } = useViewportSize();

  const ChatComponent =
    width > 500 ? (
      <Card className="flex flex-col justify-between gap-3 md:min-w-[350px]">
        <Chat showId={payload.currentShow.id} />
      </Card>
    ) : (
      <Drawer preventScrollRestoration>
        <DrawerTrigger>
          <div className="w-screen border border-border bg-card-bg py-4 focus:ring-transparent">
            Open Chat
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col gap-3">
            <Chat showId={payload.currentShow.id} />
          </div>
        </DrawerContent>
      </Drawer>
    );

  return (
    <div className="flex max-h-full flex-1 flex-col gap-6 overflow-y-auto sm:flex-row md:h-full">
      <div className="LEFT flex-grow md:flex md:flex-col md:justify-between">
        <div className="TOP ">
          <ShowInfo show={payload.currentShow}></ShowInfo>
          {payload.nextShows.length > 0 && (
            <div className="my-4 text-center text-xs text-white/50">
              Next Up...
            </div>
          )}
          <div className="flex flex-col gap-2">
            {payload.nextShows.map((show) => (
              <SlimShowInfo key={show.id} show={show} />
            ))}
          </div>
        </div>
        <Player title={"SMURF Radio - " + payload.currentShow.djName} />
      </div>
      {ChatComponent}
    </div>
  );
};
