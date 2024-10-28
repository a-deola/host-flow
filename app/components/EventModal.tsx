import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
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
      <DialogContent className="w-full h-full fixed lg:w-1/2 lg:h-96 rounded dark:border-none">
        <div className="p-4">
          <DialogHeader>
            <DialogTitle className="flex justify-between font-bold ">
              <h2 className="py-2"> {rowData.name} </h2>
              <Button
                onClick={onClose}
                size="sm"
                className="border bg-transparent text-xs text-black rounded-full dark:bg-white dark:border-none"
              >
                x
              </Button>
            </DialogTitle>
            <DialogDescription className=" text-xs text-muted-foreground">
              {rowData.date}
            </DialogDescription>
          </DialogHeader>
          <p>{rowData.status}</p>
          <div className="py-5 flex flex-col justify-center">
            <Image src="/images/avatar-group.png" alt="avatar" width={16} />
            <p className="w-1/2 py-3">
              Guest Speakers: Dr Friday Onodu, Prof Wobidi and, Dr Linda
              Oghenekaro
            </p>
          </div>
        </div>
        <DialogFooter className="bg-muted p-4">
          <div className="flex flex-col w-full items-center justify-center gap-3 lg:flex-row lg:justify-between">
            <span className="w-full">
              <Button
                variant="secondary"
                className=" w-full text-black lg:w-20 border-muted-foreground rounded-none dark:border-none"
                onClick={onClose}
              >
                Edit
              </Button>
            </span>
            <div className="flex flex-col gap-3 w-full lg:flex-row">
              <Button
                variant="destructive"
                className="w-full rounded-none lg:w-32"
              >
                Delete
              </Button>
              <Button className="w-full text-white rounded-none">
                Mark as completed
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EventModal;
