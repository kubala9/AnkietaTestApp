import React from "react";
import i18n from "i18next";
import k from "../../i18n/keys";
import { SummaryContainer } from "./styles";
import { FaUsersCog } from "react-icons/fa";
import { ResultRow } from "./ResultRow";
import { Row } from "reactstrap";
import { useRules } from "../../_context/rulesContext";
import { Button, EmptyListMask, ErrorMessage, Title } from "../../_components";
import { useNavigate } from "react-router-dom";

export const Summary = () => {
  const { rulesData, loading, hasError, reFetch } = useRules();
  const navigate = useNavigate();

  return (
    <SummaryContainer>
      {loading ? <span>Loading...</span>
        : (rulesData ?
          <Row>
            <Title>{i18n.t(k.WHO_DISPLAY)} <FaUsersCog /></Title>
            {rulesData.rules?.map((item, i) => {
              return <ResultRow key={`rule-${i}`} rule={item} operator={i < rulesData.rules.length - 1 ? rulesData.operator : null} />
            })}

            <Button onClick={() => navigate("/creator")}>{i18n.t(k.EDIT)}</Button>
          </Row >
          : hasError ? <ErrorMessage message={`${i18n.t(k.SOMETHING_WENT_WRONG)}`} refreshAction={() => reFetch("")} />
            : <EmptyListMask title={`${i18n.t(k.NO_RULES)}`} />)}
    </SummaryContainer >
  );
};

