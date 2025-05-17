import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Filter } from "lucide-react";

const LaunchPadFilterModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Filter />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter by:</DialogTitle>
        </DialogHeader>

        <div>
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex justify-between items-center">
              <Label>Date Range</Label>
              <Button variant="ghost" className="text-primary font-light">
                Reset
              </Button>
            </div>

            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-2">
                <Label>From</Label>
                <Input type="date" placeholder="Enter date" />
              </div>

              <div className="flex flex-col gap-2">
                <Label>To</Label>
                <Input type="date" placeholder="Enter date" />
              </div>
            </div>

            <div className="flex gap-2 flex-wrap md:grid md:grid-cols-3">
              <Button variant="outline">Today</Button>
              <Button variant="outline">This Week</Button>
              <Button variant="outline">This Month</Button>
            </div>
          </div>
          <Separator className="mb-4" />

          <div className="flex flex-col mb-4 md:mb-16">
            <div className="flex justify-between items-center">
              <Label>User Name</Label>
              <Button variant="ghost" className="text-primary font-light">
                Reset
              </Button>
            </div>

            <div>
              <Input type="text" placeholder="Enter user name" />
            </div>
          </div>
        </div>

        <DialogFooter className="md:grid md:grid-cols-2 md:gap-4">
          <Button type="reset" variant="outline">
            Reset Filters
          </Button>
          <Button type="submit" className="text-white">
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LaunchPadFilterModal;
