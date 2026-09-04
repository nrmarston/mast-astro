import AccordionExample from "@/components/accordion-example"
import AlertExample from "@/components/alert-example"
import AlertDialogExample from "@/components/alert-dialog-example"
import AspectRatioExample from "@/components/aspect-ratio-example"
import AttachmentExample from "@/components/attachment-example"
import AvatarExample from "@/components/avatar-example"
import BadgeExample from "@/components/badge-example"
import BreadcrumbExample from "@/components/breadcrumb-example"
import BubbleExample from "@/components/bubble-example"
import ButtonExample from "@/components/button-example"
import ButtonGroupExample from "@/components/button-group-example"
import CalendarExample from "@/components/calendar-example"
import CardExample from "@/components/card-example"
import CarouselExample from "@/components/carousel-example"
import ChartExample from "@/components/chart-example"
import CheckboxExample from "@/components/checkbox-example"
import CollapsibleExample from "@/components/collapsible-example"
import ComboboxExample from "@/components/combobox-example"
import CommandExample from "@/components/command-example"
import ContextMenuExample from "@/components/context-menu-example"
import DialogExample from "@/components/dialog-example"
import DrawerExample from "@/components/drawer-example"
import DropdownMenuExample from "@/components/dropdown-menu-example"
import EmptyExample from "@/components/empty-example"
import FieldExample from "@/components/field-example"
import HoverCardExample from "@/components/hover-card-example"
import InputExample from "@/components/input-example"
import InputGroupExample from "@/components/input-group-example"
import InputOtpExample from "@/components/input-otp-example"
import ItemExample from "@/components/item-example"
import KbdExample from "@/components/kbd-example"
import LabelExample from "@/components/label-example"
import MarkerExample from "@/components/marker-example"
import MenubarExample from "@/components/menubar-example"
import NativeSelectExample from "@/components/native-select-example"
import NavigationMenuExample from "@/components/navigation-menu-example"
import PaginationExample from "@/components/pagination-example"
import PopoverExample from "@/components/popover-example"
import ProgressExample from "@/components/progress-example"
import QuestionnaireExample from "@/components/questionnaire-example"
import RadioGroupExample from "@/components/radio-group-example"
import ResizableExample from "@/components/resizable-example"
import ScrollAreaExample from "@/components/scroll-area-example"
import SelectExample from "@/components/select-example"
import SeparatorExample from "@/components/separator-example"
import SheetExample from "@/components/sheet-example"
import SkeletonExample from "@/components/skeleton-example"
import SliderExample from "@/components/slider-example"
import SonnerExample from "@/components/sonner-example"
import SpinnerExample from "@/components/spinner-example"
import SwitchExample from "@/components/switch-example"
import TableExample from "@/components/table-example"
import TabsExample from "@/components/tabs-example"
import TextareaExample from "@/components/textarea-example"
import ToastExample from "@/components/toast-example"
import ToggleExample from "@/components/toggle-example"
import ToggleGroupExample from "@/components/toggle-group-example"
import TooltipExample from "@/components/tooltip-example"
import { Button } from "@/components/ui/button"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { DirectionProvider } from "@/components/ui/direction"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

function DirectionExample() {
  return (
    <DirectionProvider direction="rtl">
      <div className="w-full rounded-lg border p-4 text-sm" dir="rtl">
        <p className="font-medium">مرحبا بالعالم</p>
        <p className="mt-1 text-muted-foreground">Right-to-left direction</p>
      </div>
    </DirectionProvider>
  )
}

function FormExample() {
  return (
    <form className="w-full space-y-3" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-1.5">
        <Label htmlFor="showcase-email">Email</Label>
        <Input id="showcase-email" type="email" placeholder="you@example.com" />
      </div>
      <Button type="submit" size="sm">Subscribe</Button>
    </form>
  )
}

function MessageExample() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Message align="start">
        <MessageContent>
          <Bubble variant="muted"><BubbleContent>How can I help?</BubbleContent></Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble><BubbleContent>Show me the latest release.</BubbleContent></Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}

function MessageScrollerExample() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-44 w-full rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="space-y-3 p-4">
            {[
              ["start", "Welcome to the project."],
              ["end", "Thanks — what changed?"],
              ["start", "The full component library is ready."],
            ].map(([align, text], index) => (
              <MessageScrollerItem key={text} messageId={String(index)}>
                <Message align={align as "start" | "end"}>
                  <MessageContent>
                    <Bubble variant={align === "start" ? "muted" : "default"}>
                      <BubbleContent>{text}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  )
}

function SidebarExample() {
  return (
    <SidebarProvider className="min-h-0 rounded-lg border bg-sidebar p-2">
      <SidebarMenu>
        {["Overview", "Projects", "Settings"].map((item, index) => (
          <SidebarMenuItem key={item}>
            <SidebarMenuButton isActive={index === 0}>{item}</SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarProvider>
  )
}

const components = [
  ["Accordion", "Expand and collapse related content.", AccordionExample],
  ["Alert", "Call attention to an important message.", AlertExample],
  ["Alert Dialog", "Ask for confirmation before a consequential action.", AlertDialogExample],
  ["Aspect Ratio", "Keep media inside a consistent proportion.", AspectRatioExample],
  ["Attachment", "Present files and their actions.", AttachmentExample],
  ["Avatar", "Represent a person or account.", AvatarExample],
  ["Badge", "Label status or metadata.", BadgeExample],
  ["Breadcrumb", "Show location within a hierarchy.", BreadcrumbExample],
  ["Bubble", "Display compact conversational content.", BubbleExample],
  ["Button", "Trigger an action or navigation.", ButtonExample],
  ["Button Group", "Join related actions into one control.", ButtonGroupExample],
  ["Calendar", "Choose a date from a month view.", CalendarExample],
  ["Card", "Group related content and actions.", CardExample],
  ["Carousel", "Browse a horizontal set of items.", CarouselExample],
  ["Chart", "Visualize a small data series.", ChartExample],
  ["Checkbox", "Toggle one independent choice.", CheckboxExample],
  ["Collapsible", "Reveal optional supporting content.", CollapsibleExample],
  ["Combobox", "Search and select from a list.", ComboboxExample],
  ["Command", "Find and run an action quickly.", CommandExample],
  ["Context Menu", "Offer actions at the pointer location.", ContextMenuExample],
  ["Dialog", "Focus attention in a modal surface.", DialogExample],
  ["Direction", "Provide left-to-right or right-to-left context.", DirectionExample],
  ["Drawer", "Present a task from the edge of the viewport.", DrawerExample],
  ["Dropdown Menu", "Collect contextual actions behind a trigger.", DropdownMenuExample],
  ["Empty", "Explain an empty state and its next step.", EmptyExample],
  ["Field", "Compose labels, controls, and validation help.", FieldExample],
  ["Form", "Collect and submit structured user input.", FormExample],
  ["Hover Card", "Preview linked content on hover.", HoverCardExample],
  ["Input", "Accept a short line of text.", InputExample],
  ["Input Group", "Attach controls and adornments to an input.", InputGroupExample],
  ["Input OTP", "Enter a one-time passcode.", InputOtpExample],
  ["Item", "Render a reusable content row.", ItemExample],
  ["Kbd", "Represent a keyboard key or shortcut.", KbdExample],
  ["Label", "Name an associated form control.", LabelExample],
  ["Marker", "Highlight a compact state or location.", MarkerExample],
  ["Menubar", "Expose application-level menus.", MenubarExample],
  ["Message", "Structure a chat message.", MessageExample],
  ["Message Scroller", "Keep a message stream navigable.", MessageScrollerExample],
  ["Native Select", "Use the platform select control.", NativeSelectExample],
  ["Navigation Menu", "Organize primary navigation links.", NavigationMenuExample],
  ["Pagination", "Move through pages of results.", PaginationExample],
  ["Popover", "Show contextual content near a trigger.", PopoverExample],
  ["Progress", "Communicate task completion.", ProgressExample],
  ["Questionnaire", "Guide a user through sequential questions.", QuestionnaireExample],
  ["Radio Group", "Choose one option from a set.", RadioGroupExample],
  ["Resizable", "Resize adjacent content panels.", ResizableExample],
  ["Scroll Area", "Provide a styled overflow region.", ScrollAreaExample],
  ["Select", "Choose one option from a popup list.", SelectExample],
  ["Separator", "Visually divide related regions.", SeparatorExample],
  ["Sheet", "Open supporting content from an edge.", SheetExample],
  ["Sidebar", "Frame persistent application navigation.", SidebarExample],
  ["Skeleton", "Reserve space while content loads.", SkeletonExample],
  ["Slider", "Choose a value along a range.", SliderExample],
  ["Sonner", "Show concise toast feedback.", SonnerExample],
  ["Spinner", "Indicate indeterminate activity.", SpinnerExample],
  ["Switch", "Toggle a setting on or off.", SwitchExample],
  ["Table", "Present structured rows and columns.", TableExample],
  ["Tabs", "Switch between related panels.", TabsExample],
  ["Textarea", "Accept longer free-form text.", TextareaExample],
  ["Toast", "Surface temporary feedback.", ToastExample],
  ["Toggle", "Switch a pressed state.", ToggleExample],
  ["Toggle Group", "Choose one or more related toggle values.", ToggleGroupExample],
  ["Tooltip", "Label an unfamiliar control on hover or focus.", TooltipExample],
] as const

export default function ComponentsShowcase() {
  return (
    <TooltipProvider>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {components.map(([name, description, Demo], index) => {
          const id = name.toLowerCase().replaceAll(" ", "-")

          return (
            <article
              id={id}
              key={name}
              className="min-w-0 scroll-mt-24 overflow-hidden rounded-xl border bg-muted/35 shadow-xs"
            >
              <header className="border-b bg-background px-5 py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="m-0 text-base font-semibold tracking-tight">{name}</h2>
                  <span className="font-mono text-[0.6875rem] text-muted-foreground tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">{description}</p>
              </header>
              <div className="min-h-56 bg-muted/30 p-3 [&_[data-slot=example]>div:first-child]:hidden">
                <Demo />
              </div>
            </article>
          )
        })}
      </div>
    </TooltipProvider>
  )
}
