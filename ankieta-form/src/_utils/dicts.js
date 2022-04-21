import i18n from "i18next";
import k from "../i18n/keys";
import { ComparisonEnum, OperatorEnum, RuleTypeEnum } from "./enums";




const RuleTypeDict = () => {
    return {
        [RuleTypeEnum.COOKIE]: i18n.t(k.COOKIE),
        [RuleTypeEnum.URL]: i18n.t(k.URL),
        [RuleTypeEnum.TIME]: i18n.t(k.TIME),
    }
};

const ComparisonDict = () => {
    return {
        [ComparisonEnum.CONTAIN]: i18n.t(k.CONTAIN),
        [ComparisonEnum.NOT_CONTAIN]: i18n.t(k.NOT_CONTAIN),
        [ComparisonEnum.EQUAL]: i18n.t(k.EQUAL),
        [ComparisonEnum.NOT_EQUAL]: i18n.t(k.NOT_EQUAL),
    }
};

const OperatorDict = () => {
    return {
        [OperatorEnum.AND]: i18n.t(k.AND),
        [OperatorEnum.OR]: i18n.t(k.OR),
    }
};


export {
    RuleTypeDict, ComparisonDict, OperatorDict
};
