import { useEffect, useState } from 'react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from './ui/navigation-menu'

type NavMenuProps = {
    currentPath: string
}

const styleLinks = [
    { href: '/styles', label: 'Style Guide' },
    { href: '/styles#type', label: 'Typography' },
    { href: '/styles#color', label: 'Color' },
    { href: '/styles#utilities', label: 'Utilities' },
    { href: '/styles#layout', label: 'Layout' },
]

const pageLinks = [
    { href: '/components', label: 'Components' },
    { href: '/basic-layouts', label: 'Basic Layouts' },
    { href: '/inspired-layouts', label: 'Inspired Layouts' },
]

function normalizePath(path: string) {
    return path === '/' ? path : path.replace(/\/$/, '')
}

export function NavMenu({ currentPath }: NavMenuProps) {
    const [currentUrl, setCurrentUrl] = useState(normalizePath(currentPath))

    useEffect(() => {
        const updateCurrentUrl = () => {
            setCurrentUrl(
                normalizePath(window.location.pathname) + window.location.hash
            )
        }

        updateCurrentUrl()
        window.addEventListener('hashchange', updateCurrentUrl)
        window.addEventListener('popstate', updateCurrentUrl)

        return () => {
            window.removeEventListener('hashchange', updateCurrentUrl)
            window.removeEventListener('popstate', updateCurrentUrl)
        }
    }, [])

    const currentPathname = currentUrl.split('#')[0]
    const isStylesPage = currentPathname === '/styles'

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        data-active={isStylesPage || undefined}
                        className={
                            isStylesPage
                                ? 'bg-primary/10 font-semibold text-primary'
                                : undefined
                        }
                    >
                        Styles
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {styleLinks.map((link) => {
                            const isActive = currentUrl === link.href

                            return (
                                <NavigationMenuLink
                                    key={link.href}
                                    href={link.href}
                                    active={isActive}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={
                                        isActive
                                            ? 'bg-primary/10 font-semibold text-primary'
                                            : undefined
                                    }
                                >
                                    {link.label}
                                </NavigationMenuLink>
                            )
                        })}
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {pageLinks.map((link) => {
                    const isActive = currentPathname === link.href

                    return (
                        <NavigationMenuItem key={link.href}>
                            <NavigationMenuLink
                                href={link.href}
                                active={isActive}
                                aria-current={isActive ? 'page' : undefined}
                                className={`${navigationMenuTriggerStyle()} ${
                                    isActive
                                        ? 'bg-primary/10 font-semibold text-primary'
                                        : ''
                                }`}
                            >
                                {link.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
