import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavItem } from "types";
import { Textarea } from "@/components/ui/textarea";
import { Close } from "@radix-ui/react-dialog";

export interface ContactDialogProps {
  item: NavItem;
}

export function ContactDialog({ item }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a
          href={item.href}
          className={
            "flex items-center text-lg font-medium transition-colors hover:text-foreground sm:text-sm text-foreground/80"
          }
        >
          {item.title}
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" id="contact">
        <form
          className="w-auto"
          action="https://formspree.io/f/mwkdkvld"
          method="POST"
        >
          <DialogHeader>
            <DialogTitle>Contact</DialogTitle>
            <DialogDescription>
              Get in touch with me. I&apos;m always open to new opportunities.
              You can also send me an email at:
              norbert.blaszczyk@student.po.edu.pl
              <br />
              or find me on{" "}
              <a
                href={"https://linkedin.com/in/norbertbla"}
                className="underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/norbertbla/
              </a>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Your name
              </Label>
              <Input
                type="text"
                name="name"
                required={true}
                id="name"
                placeholder="John Smith"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Message
              </Label>
              <Textarea
                name="message"
                required={true}
                id="username"
                placeholder="Hello, I'm ..."
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex">
            <Close
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mr-4"
            >
              Send your message
            </Close>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
