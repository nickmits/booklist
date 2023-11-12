import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MuiCheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export interface FormSelectProps {
  onChange?: (value: string) => void;
  customValidation?: boolean | null | any;
  showAdornment?: Boolean;
}

export const FormTextField: React.FC<
  FormSelectProps & Omit<TextFieldProps, "onChange">
> = ({
  onChange,
  customValidation = true,
  showAdornment = false,
  ...props
}) => {
  return (
    <TextField
      placeholder='search book'
      label='searh'
      onChange={({ target: { value } }) =>
        onChange && onChange(value as string)
      }
      InputProps={{
        endAdornment:
          showAdornment && props.value && customValidation ? (
            <InputAdornment position='end'>
              <MuiCheckCircleOutlineIcon />
            </InputAdornment>
          ) : undefined,
        ...props.InputProps,
      }}
    />
  );
};

export default FormTextField;
