import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
      options,
      onChange, onChangeOption,
      ...restProps
  }
) => {
    const mappedOptions: any[] = options ? options.map((el, i) => <option value={el} key={i}>{el}</option>) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }
    /*{...restProps} - для чего и для чего onChange?*/
    return (
      <select onChange={onChangeCallback} {...restProps}>
          {mappedOptions}
      </select>
    )
}

export default SuperSelect
