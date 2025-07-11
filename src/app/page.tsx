"use client";

import { useMutation } from "@tanstack/react-query";
import { Button } from "../components/ui/button";
import { useTRPC } from "../trpc/client";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "../components/ui/input";

const Page = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background job invoked successfully!");
    }
  }));
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={value} onChange={(e) => setValue(e.target.value)}></Input>
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({ value: value })}>
        Invoke background job
      </Button>
    </div>
  );
};

export default Page;
