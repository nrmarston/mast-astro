import * as React from "react"

type ImageProps = Omit<React.ComponentProps<"img">, "src"> & {
  src: string
  fill?: boolean
  priority?: boolean
}

export default function Image({ fill, priority, className, ...props }: ImageProps) {
  return (
    <img
      className={`${fill ? "absolute inset-0 h-full w-full" : ""} ${className ?? ""}`.trim()}
      {...props}
    />
  )
}

