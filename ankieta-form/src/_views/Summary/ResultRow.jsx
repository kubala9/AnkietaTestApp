import React from "react";
import i18n from "i18next";
import k from "../../i18n/keys";
import { ComparisonDict, OperatorDict, RuleTypeDict, RuleTypeEnum } from "../../_utils";

export const ResultRow = ({ rule, operator }) => {

  const resultText = () => {
    switch (rule.type) {
      case RuleTypeEnum.COOKIE:
        return <p><b>{`${RuleTypeDict()[rule.type]}`}</b> {rule.settings.name} <b>{`${ComparisonDict()[rule.settings.comparison]}`}</b> {rule.settings.value}</p>;
      case RuleTypeEnum.URL:
        return <p><b>{`${RuleTypeDict()[rule.type]}`} {`${ComparisonDict()[rule.settings.comparison]}`}:</b> {rule.settings.value}</p>;
      case RuleTypeEnum.TIME:
        return <p><b>{`${RuleTypeDict()[rule.type]}`}:</b> {i18n.t(k.IS_AT_LEAST)} {rule.settings.value} {i18n.t(k.SECONDS)}</p>;
      default:
        return <p> {i18n.t(k.NO_RULES)} </p>;
    }

  }
  return (
    <>
      {rule.settings && resultText()}
      {operator && <p>{OperatorDict()[operator]}</p> }
    </>
  );
};

