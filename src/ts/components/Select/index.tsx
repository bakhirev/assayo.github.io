import React, { ChangeEvent } from 'react';

interface IUiKitSelectProps {
  value: any;
  options: any[];
  className?: string;
  onChange: Function;
}

function UiKitSelect({
  value,
  className,
  options,
  onChange,
}: IUiKitSelectProps) {
  const items = (options || [])
    .map((option: any, index: number) => {
      const formattedOption = typeof option !== 'object'
        ? ({ id: option, title: option })
        : option;

      return (
        <option
          key={`${formattedOption?.id}_${index}`}
          value={formattedOption?.id ?? null}
          selected={value === formattedOption?.id}
        >
          {formattedOption?.title ?? formattedOption?.id ?? ''}
        </option>
      );
    });

  return (
    <select
      className={className || ''}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(event.target.value);
      }}
    >
      {items}
    </select>
  );
}

UiKitSelect.defaultProps = {
  className: '',
};

export default UiKitSelect;
