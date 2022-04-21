import React, { useEffect } from "react";
import { Input, Select, CircleButton, CircleButtonsWrapper, OneLineSpan } from "../../_components";
import i18n from "i18next";
import k from "../../i18n/keys";
import { RuleItemWrapper } from "./styles";
import { useFormContext } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ComparisonDict, RuleTypeDict, RuleTypeEnum } from "../../_utils";

export const RuleItem = ({ fieldName, handleAdd, handleRemove, index }) => {
  const { register, formState: { errors }, watch } = useFormContext();

  const type = watch(`${fieldName}.type`)

  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <RuleItemWrapper name={fieldName}>
      <Select
        {...register(`${fieldName}.type`, {
          required: true
        })}>
        {Object.keys(RuleTypeDict()).map((x) => (
          <option key={x} value={x}>{RuleTypeDict()[x]}</option>
        ))}
      </Select>
      {type === RuleTypeEnum.COOKIE && <Input
        {...register(`${fieldName}.settings.name`, {
          required: true
        })}
        placeholder="Wpisz..."
        aria-invalid={errors?.rules && errors?.rules[index]?.settings?.name ? "true" : "false"} />}
      {type !== RuleTypeEnum.TIME && <Select
        {...register(`${fieldName}.settings.comparison`, {
          required: true
        })}>
        {Object.keys(ComparisonDict()).map((x) => (
          <option key={x} value={x}>{ComparisonDict()[x]}</option>
        ))}
      </Select>}

      {type === RuleTypeEnum.TIME && <OneLineSpan> {i18n.t(k.IS_AT_LEAST)}</OneLineSpan>}
      <Input
        {...register(`${fieldName}.settings.value`, {
          required: true
        })}
        placeholder="Wpisz..."
        aria-invalid={errors?.rules && errors?.rules[index]?.settings?.value ? "true" : "false"}
      />
      {type === RuleTypeEnum.TIME && <OneLineSpan> {i18n.t(k.SECONDS)}</OneLineSpan>}

      <CircleButtonsWrapper>
        <CircleButton onClick={() => handleAdd()}><FaPlus /></CircleButton>
        <CircleButton onClick={() => handleRemove(index)}><FaMinus /></CircleButton>
      </CircleButtonsWrapper>
    </RuleItemWrapper>
  );
};

