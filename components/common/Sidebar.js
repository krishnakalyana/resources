"use client";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateCard from "./CreateCard";

const Sidebar = () => {
  return (
    <div className="h-full p-2 flex flex-col ">
      <div className="py-2 w-full">
        <Dialog className="w-full">
          <DialogTrigger className="w-full">
            <Button className="w-full">New Reference +</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Ref.</DialogTitle>
              <CreateCard />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <hr className="w-full" />
      <div className="flex py-2 gap-2">
        <Checkbox name="linkedinposts" />{" "}
        <Label htmlFor="linkedinposts">LinkedIn Posts</Label>
      </div>
    </div>
  );
};
export default Sidebar;
