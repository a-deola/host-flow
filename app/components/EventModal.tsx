import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogTitle,
  DialogHeader,
} from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

function EventModal({
  isOpen,
  selectedRow,
  onClose,
}: {
  isOpen: boolean;
  selectedRow: any;
  onClose: () => void;
}) {
  if (!selectedRow) return null;
  const rowData = selectedRow.original;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full h-full fixed md:w-1/3 md:h-96 rounded dark:border-none">
        <div className="p-4">
          <DialogHeader>
            <DialogTitle className="flex justify-between font-bold ">
              {rowData.name}{" "}
              <Button
                onClick={onClose}
                size="sm"
                className="border bg-transparent text-xs px- text-black rounded-full"
              >
                x
              </Button>
            </DialogTitle>
            <DialogDescription className=" text-xs text-muted-foreground">
              {rowData.date}
            </DialogDescription>
          </DialogHeader>
          <p>{rowData.status}</p>
          <div className="py-2 flex flex-col justify-center">
            <img src="/images/avatar-group.png" alt="avatar" className="w-16" />
            <p className="w-1/2">
              Guest Speakers: Dr Friday Onodu, Prof Wobidi and, Dr Linda
              Oghenekaro
            </p>
          </div>
        </div>
        <DialogFooter className="bg-muted items-center justify-center gap-2 p-3">
          <span className="w-full">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={onClose}
            >
              Close
            </Button>
          </span>
          <div className="flex flex-col gap-3 w-full">
            <Button variant="destructive" className="w-full">
              Delete
            </Button>
            <Button className="w-full">Mark as completed</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EventModal;
