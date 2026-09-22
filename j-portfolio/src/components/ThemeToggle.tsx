import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

type Props = { theme: "dark" | "light"; onToggle: () => void };

export function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <Button
      variant="outline"
      className="w-11 px-0"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      data-testid="theme-toggle"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  );
}