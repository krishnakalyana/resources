"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  return (
    <div className="bg-secondary h-full rounded-lg p-2">
      <button onClickAction={signIn("google")}>hello</button>
      <h2>All</h2>
      <div className="flex gap-2 flex-col">
        {[1, 2, 3].map((item, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
