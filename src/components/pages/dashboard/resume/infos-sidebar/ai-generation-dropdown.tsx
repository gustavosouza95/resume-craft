import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export const AiGenerationDropdown = () => {
  return (
    <Button className="gap-2 text-xs px-2.5 py-1 h-9">
      <Bot size={20} />
      Inteligência Artificial
    </Button>
  );
};
