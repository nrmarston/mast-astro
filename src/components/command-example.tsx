import * as React from "react"

import {
  Example,
  ExampleWrapper,
} from "@/components/example"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { CalendarBlankIcon, SmileyIcon, CalculatorIcon, UserIcon, CreditCardIcon, GearIcon, HouseIcon, TrayIcon, FileTextIcon, FolderIcon, PlusIcon, FolderPlusIcon, CopyIcon, ScissorsIcon, ClipboardIcon, TrashIcon, GridFourIcon, ListIcon, MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon, BellIcon, QuestionIcon, ImageIcon, CodeIcon } from "@phosphor-icons/react"

export default function CommandExample() {
  return (
    <ExampleWrapper>
      <CommandInline />
      <CommandBasic />
      <CommandWithShortcuts />
      <CommandWithGroups />
      <CommandManyItems />
    </ExampleWrapper>
  )
}

function CommandInline() {
  const [value, setValue] = React.useState("__no_initial_selection__")

  return (
    <Example title="Inline">
      <Card className="w-full p-0">
        <CardContent className="p-0">
          <Command value={value} onValueChange={setValue}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarBlankIcon
                  />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <SmileyIcon
                  />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <CalculatorIcon
                  />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserIcon
                  />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon
                  />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <GearIcon
                  />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CardContent>
      </Card>
    </Example>
  )
}

function CommandBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <Example title="Basic">
      <div className="flex flex-col gap-4">
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="w-fit"
        >
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </Example>
  )
}

function CommandWithShortcuts() {
  const [open, setOpen] = React.useState(false)

  return (
    <Example title="With Shortcuts">
      <div className="flex flex-col gap-4">
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="w-fit"
        >
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserIcon
                  />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon
                  />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <GearIcon
                  />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </Example>
  )
}

function CommandWithGroups() {
  const [open, setOpen] = React.useState(false)

  return (
    <Example title="With Groups">
      <div className="flex flex-col gap-4">
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="w-fit"
        >
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarBlankIcon
                  />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <SmileyIcon
                  />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <CalculatorIcon
                  />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserIcon
                  />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon
                  />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <GearIcon
                  />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </Example>
  )
}

function CommandManyItems() {
  const [open, setOpen] = React.useState(false)

  return (
    <Example title="Many Groups & Items">
      <div className="flex flex-col gap-4">
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="w-fit"
        >
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem>
                  <HouseIcon
                  />
                  <span>Home</span>
                  <CommandShortcut>⌘H</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <TrayIcon
                  />
                  <span>Inbox</span>
                  <CommandShortcut>⌘I</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FileTextIcon
                  />
                  <span>Documents</span>
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FolderIcon
                  />
                  <span>Folders</span>
                  <CommandShortcut>⌘F</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem>
                  <PlusIcon
                  />
                  <span>New File</span>
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FolderPlusIcon
                  />
                  <span>New Folder</span>
                  <CommandShortcut>⇧⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CopyIcon
                  />
                  <span>Copy</span>
                  <CommandShortcut>⌘C</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <ScissorsIcon
                  />
                  <span>Cut</span>
                  <CommandShortcut>⌘X</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <ClipboardIcon
                  />
                  <span>Paste</span>
                  <CommandShortcut>⌘V</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <TrashIcon
                  />
                  <span>Delete</span>
                  <CommandShortcut>⌫</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="View">
                <CommandItem>
                  <GridFourIcon
                  />
                  <span>Grid View</span>
                </CommandItem>
                <CommandItem>
                  <ListIcon
                  />
                  <span>List View</span>
                </CommandItem>
                <CommandItem>
                  <MagnifyingGlassPlusIcon
                  />
                  <span>Zoom In</span>
                  <CommandShortcut>⌘+</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <MagnifyingGlassMinusIcon
                  />
                  <span>Zoom Out</span>
                  <CommandShortcut>⌘-</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Account">
                <CommandItem>
                  <UserIcon
                  />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon
                  />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <GearIcon
                  />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <BellIcon
                  />
                  <span>Notifications</span>
                </CommandItem>
                <CommandItem>
                  <QuestionIcon
                  />
                  <span>Help & Support</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Tools">
                <CommandItem>
                  <CalculatorIcon
                  />
                  <span>Calculator</span>
                </CommandItem>
                <CommandItem>
                  <CalendarBlankIcon
                  />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <ImageIcon
                  />
                  <span>Image Editor</span>
                </CommandItem>
                <CommandItem>
                  <CodeIcon
                  />
                  <span>Code Editor</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </Example>
  )
}
