import * as React from "react"
import { cn } from "@/lib/utils"

function ExampleWrapper({ className, children, ...props }: React.ComponentProps<"div">) {
  const [firstExample] = React.Children.toArray(children)

  return (
    <div className="w-full">
      <div
        data-slot="example-wrapper"
        className={cn(
          "grid w-full min-w-0",

          className
        )}
        {...props}
      >
        {firstExample}
      </div>
    </div>
  )
}

function Example({
  title,
  children,
  className,
  containerClassName,
  ...props
}: React.ComponentProps<"div"> & {
  title?: string
  containerClassName?: string
}) {
  return (
    <div
      data-slot="example"
      className={cn(
        "mx-auto flex w-full max-w-lg min-w-0 flex-col gap-1 self-stretch lg:max-w-none",
        containerClassName
      )}
      {...props}
    >
      {title && (
        <div className="px-1.5 py-2 text-xs font-medium text-muted-foreground">
          {title}
        </div>
      )}
      <div
        data-slot="example-content"
        className={cn(
          "flex min-h-44 min-w-0 flex-1 flex-col items-start justify-center gap-4 overflow-hidden rounded-lg bg-card p-5 text-foreground *:[div:not([class*='w-'])]:w-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export { ExampleWrapper, Example }
