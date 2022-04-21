import React, { useEffect, useMemo, useState } from "react";

import { useFetch } from "../_utils";

const RulesContext = React.createContext();
RulesContext.displayName = "RulesContext";

function RulesProvider(props) {
    const [data, loading, hasError, setEndpoint] = useFetch("");

    const [rulesData, setRulesData] = useState(null);

    useEffect(() => {
        if (!rulesData)
            setRulesData(data)
    }, [data]);

    const value = useMemo(() => ({ rulesData, setRulesData, loading, hasError, reFetch: setEndpoint }), [rulesData, setRulesData, loading, hasError, setEndpoint]);

    return <RulesContext.Provider value={value} {...props} />;
}

function useRules() {
    const context = React.useContext(RulesContext);
    if (context === undefined) {
        throw new Error("useRules must be used within a RulesContext");
    }
    return context;
}

export { useRules, RulesProvider, RulesContext };