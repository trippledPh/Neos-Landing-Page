import { InputHTMLAttributes } from "react";

export interface IComboBoxField extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
}
