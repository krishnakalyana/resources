"use client";
import { GiRamProfile } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCallback, useEffect, useState } from "react";

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-primary from-80% to-secondary to-4% rounded-md p-2 flex items-center justify-between">
      <h2 className="text-secondary">REF.</h2>
      <div className="flex gap-2 items-center ">
        <Dialog>
          <DialogTrigger>
            {/* <Button className="bg-transparent first:text-primary hover:first:text-secondary"> */}
            <AiOutlineSearch className="text-xl  " />
            {/* </Button> */}
          </DialogTrigger>
          <DialogContent className="p-0 last:hidden ">
            <Input />
          </DialogContent>
        </Dialog>

        <HoverCard>
          <HoverCardTrigger>
            <GiRamProfile className="text-primary" />
          </HoverCardTrigger>
          <HoverCardContent>Hey User !</HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};
export default Topbar;
