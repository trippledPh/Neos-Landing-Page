import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Filter, SortAsc } from "lucide-react";
import ComboBoxField from "../../form/combo-box-field";

const LaunchPadSortModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <SortAsc />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sort by:</DialogTitle>
        </DialogHeader>

        <div>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between items-center">
              <Label>Date Range</Label>
              <Button variant="ghost" className="text-primary font-light">
                Reset
              </Button>
            </div>
            <ComboBoxField
              options={[
                { value: "newest", label: "Newest" },
                { value: "oldest", label: "Oldest" },
              ]}
              placeholder="Newest first"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between items-center">
              <Label>Username</Label>
              <Button variant="ghost" className="text-primary font-light">
                Reset
              </Button>
            </div>
            <ComboBoxField
              options={[
                { value: "newest", label: "Newest" },
                { value: "oldest", label: "Oldest" },
              ]}
              placeholder="A-Z (ascending)"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between items-center">
              <Label>Impressions</Label>
              <Button variant="ghost" className="text-primary font-light">
                Reset
              </Button>
            </div>
            <ComboBoxField
              options={[
                { value: "newest", label: "Newest" },
                { value: "oldest", label: "Oldest" },
              ]}
              placeholder="Highest to lowest"
            />
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

export default LaunchPadSortModal;
