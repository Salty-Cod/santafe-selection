import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: Implement actual newsletter subscription API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      console.error("Newsletter subscription failed:", error);
    }
  };

  return (
    <div className={`p-6 rounded-lg bg-card ${className}`}>
      <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <p className="text-muted-foreground mb-6">
        Get the latest updates on Santa Fe's events, attractions, and special offers.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          required
        />

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>

        {status === "success" && (
          <p className="text-green-500 text-sm">Thank you for subscribing!</p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-sm">
            There was an error subscribing. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
