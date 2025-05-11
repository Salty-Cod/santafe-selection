import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  className = ""
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused) {
      searchRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <div
      className={`relative ${className}`}
    >
      <Input
        ref={searchRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Button
        variant="ghost"
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() => {
          if (searchRef.current) {
            searchRef.current.focus();
          }
        }}
      >
        <SearchIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}
