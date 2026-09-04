import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowSquareOutIcon,
    CodeIcon,
    DownloadSimpleIcon,
    EnvelopeSimpleIcon,
    GithubLogoIcon,
    LinkIcon,
    QrCodeIcon,
    type Icon,
    type IconProps,
} from '@phosphor-icons/react'
import type { VariantProps } from 'class-variance-authority'

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const linkButtonIcons = {
    'arrow-left': ArrowLeftIcon,
    'arrow-right': ArrowRightIcon,
    'arrow-square-out': ArrowSquareOutIcon,
    code: CodeIcon,
    download: DownloadSimpleIcon,
    email: EnvelopeSimpleIcon,
    github: GithubLogoIcon,
    link: LinkIcon,
    'qr-code': QrCodeIcon,
} satisfies Record<string, Icon>

export type LinkButtonIconName = keyof typeof linkButtonIcons
export type LinkButtonIcon = LinkButtonIconName | Icon

type AnchorProps = Omit<
    ComponentPropsWithoutRef<'a'>,
    'children' | 'className' | 'href'
>

export interface LinkButtonProps
    extends AnchorProps, VariantProps<typeof buttonVariants> {
    /** The destination URL. */
    href: string
    /** The visible button label. */
    text: ReactNode
    /** Tailwind classes or any other CSS classes applied to the button. */
    className?: string
    /** A registered Phosphor name or a Phosphor icon component. */
    leftIcon?: LinkButtonIcon
    /** A registered Phosphor name or a Phosphor icon component. */
    rightIcon?: LinkButtonIcon
    /** Props shared by both icons, such as weight, size, or color. */
    iconProps?: Omit<IconProps, 'children'>
    /** Prevents navigation and removes the link from the tab order. */
    disabled?: boolean
}

function resolveIcon(icon: LinkButtonIcon | undefined) {
    return typeof icon === 'string' ? linkButtonIcons[icon] : icon
}

function getSafeRel(target: string | undefined, rel: string | undefined) {
    if (target !== '_blank') return rel

    return Array.from(
        new Set([
            ...(rel?.split(/\s+/).filter(Boolean) ?? []),
            'noopener',
            'noreferrer',
        ])
    ).join(' ')
}

export function LinkButton({
    href,
    text,
    variant = 'default',
    size = 'default',
    className,
    leftIcon,
    rightIcon,
    iconProps,
    disabled = false,
    target,
    rel,
    tabIndex,
    onClick,
    ...anchorProps
}: LinkButtonProps) {
    const LeftIcon = resolveIcon(leftIcon)
    const RightIcon = resolveIcon(rightIcon)
    const safeRel = getSafeRel(target, rel)

    return (
        <Button
            variant={variant}
            size={size}
            className={cn(
                disabled && 'pointer-events-none opacity-50',
                className
            )}
            disabled={disabled}
            nativeButton={false}
            render={
                <a
                    href={href}
                    target={target}
                    rel={safeRel}
                    aria-disabled={disabled || undefined}
                    tabIndex={disabled ? -1 : tabIndex}
                    onClick={(event) => {
                        if (disabled) {
                            event.preventDefault()
                            return
                        }

                        onClick?.(event)
                    }}
                    {...anchorProps}
                />
            }
        >
            {LeftIcon && (
                <LeftIcon
                    aria-hidden="true"
                    data-icon="inline-start"
                    {...iconProps}
                />
            )}
            <span>{text}</span>
            {RightIcon && (
                <RightIcon
                    aria-hidden="true"
                    data-icon="inline-end"
                    {...iconProps}
                />
            )}
        </Button>
    )
}

export { linkButtonIcons }
