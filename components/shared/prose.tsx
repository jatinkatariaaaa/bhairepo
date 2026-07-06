import { cn } from "@/lib/utils";

/**
 * Lightweight prose styling for long-form content (legal pages, etc.)
 * without pulling in the full typography plugin.
 */
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-prose text-body [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2",
        "[&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-h3 [&_h2]:font-semibold [&_h2]:text-ink",
        "[&_h2:first-child]:mt-0",
        "[&_p]:mt-4 [&_p]:leading-relaxed",
        "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
        "[&_li]:leading-relaxed",
        className,
      )}
    >
      {children}
    </div>
  );
}
