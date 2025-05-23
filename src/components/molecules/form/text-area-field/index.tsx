import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

interface Props extends React.ComponentProps<"textarea"> {
  label?: string;
  description?: string;
}

const TextAreaField = ({ name, label, description, ...props }: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name ?? "input"}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea {...field} {...props} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextAreaField;
