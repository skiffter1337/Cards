import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Input, InputPropsType } from '../input'

type ControlledInputPropsType<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValue'
> &
  Omit<InputPropsType, 'onChange' | 'value'>
export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledInputPropsType<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return <Input {...field} {...rest} errorMessage={error?.message} />
}
