import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

interface Props extends React.ComponentProps<"input"> {
  label?: string;
  description?: string;
}

const InputField = ({ name, label, description, ...props }: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name ?? "input"}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
