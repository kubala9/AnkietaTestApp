import React, { useState } from "react";
import { FlexBox, Title, Form, Radio, Button, OneLineSpan } from "../../_components";
import i18n from "i18next";
import k from "../../i18n/keys";
import { CreatorContainer } from "./styles";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { FaUsersCog } from "react-icons/fa";
import { OperatorDict } from "../../_utils";
import { RuleItem } from "./RuleItem";
import { useRules } from "../../_context/rulesContext";
import { useNavigate } from "react-router";

export const Creator = () => {
  const radioOptions = { All: "all", Restrict: "restrict" };

  const { rulesData, setRulesData } = useRules();

  const { control, ...methods } = useForm({
    defaultValues: { ...rulesData, operator: rulesData?.operator ?? "or" },
  });

  const [indexes, setIndexes] = React.useState(rulesData?.rules?.length > 0 ? [...Array(rulesData.rules.length).keys()] : [0]);
  const [counter, setCounter] = React.useState(rulesData?.rules?.length ?? 1);
  const [visitorsOption, setVisitorsOption] = useState(radioOptions.Restrict);
  const navigate = useNavigate();

  const operator = useWatch({
    control,
    name: "operator",
  });

  const addRule = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeRule = index => () => {
    if (counter > 1) {
      setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const onSubmit = (data) => {
    setRulesData({ ...data, rules: data.rules.filter(x => indexes.includes(data.rules.indexOf(x))) });
    navigate("/summary");
  }
  return (
    <CreatorContainer>
      <Title>{i18n.t(k.WHO_DISPLAY)} <FaUsersCog /></Title>
      <FlexBox>
        <Radio id="all" register={methods.register} name="name" value={radioOptions.All} onChange={(e) => setVisitorsOption(e.target.value)} checked={visitorsOption === radioOptions.All} />
        <label htmlFor="all">{i18n.t(k.ALL_VISITORS_RULES)}</label>
      </FlexBox>
      <FlexBox>
        <Radio id="restrict" name="name" value={radioOptions.Restrict} onChange={(e) => setVisitorsOption(e.target.value)} checked={visitorsOption === radioOptions.Restrict} />
        <label htmlFor="restrict">{i18n.t(k.ALL_MEETING_RULES)}</label>
      </FlexBox>
      {visitorsOption === radioOptions.Restrict &&
        <FormProvider {...methods} >
          <Form onSubmit={onSubmit}>
            {indexes?.map((index, i) => {
              const fieldName = `rules[${index}]`;
              return (
                <React.Fragment key={fieldName}>
                  <RuleItem fieldName={fieldName} handleAdd={addRule} handleRemove={removeRule(index)} index={index} key={fieldName} control={methods.control} />
                  {i < indexes.length - 1 && <OneLineSpan>{`${OperatorDict()[operator]}`}</OneLineSpan>}
                </React.Fragment>
              );
            })}

            <FlexBox justify="space-around">
              <label htmlFor="or">
                <Radio type="radio"
                  {...methods.register(`operator`)}
                  id="or"
                  value="or" />
                {i18n.t(k.MEET_SOME_RULES)}</label>
              <label htmlFor="and">
                <Radio type="radio"
                  {...methods.register(`operator`)}

                  id="and"
                  value="and" />
               {i18n.t(k.MEET_ALL_RULES)} </label>
            </FlexBox>
            <Button type="submit">{i18n.t(k.SAVE)}</Button>
          </Form>
        </FormProvider>}
    </CreatorContainer>
  );
};

