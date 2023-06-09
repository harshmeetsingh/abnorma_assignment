import React, { useEffect, useMemo, useState } from "react";

import DataCard from "../../components/DataCard";
import DataTable from "../../components/DataTable";

import "./index.css";
import DropDown from "../../components/DropDown";
import {
  HIGH_SEVERITY_TITLE,
  PLACE_HOLDER_TEXT,
  SPAM_ATTACK_TITLE,
} from "../../utils/datautils";
import { getTop5MaliciousWebsites } from "../../utils/helperutils";
import { useGetCustomerData, useGetSecurityDataForCustomer } from "../../api";
import Loader from "../../components/Loader";

Dashboard.propTypes = {};

function Dashboard(props) {
  const [customer, setCustomer] = useState({});
  const {
    isLoading: isSecurityDataLoading,
    error: securityApiError,
    data: securityData,
  } = useGetSecurityDataForCustomer(customer.id);

  const {
    isLoading: isCustomerDataLoading,
    error: customerFetchError,
    data: customerData,
  } = useGetCustomerData();

  const severityAttacksCount = useMemo(() => {
    if (securityData) {
      return securityData.filter((it) => it.attackScore > 0.7).length;
    }
  }, [securityData]);

  const spamAttackCount = useMemo(() => {
    if (securityData)
      return securityData.filter((it) => it.attackType === "SPAM").length;
  }, [securityData]);

  const top5MaliciousWebsites = useMemo(() => {
    if (securityData) {
      return getTop5MaliciousWebsites(securityData);
    }
  }, [securityData]);

  const handleCustomerNameSelect = (value) => {
    setCustomer(value);
  };

  if (customerFetchError || securityApiError) {
    return <div className="error-msg">Error while Fetching Data</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dropdown-container">
        {isCustomerDataLoading ? (
          <Loader />
        ) : (
          <DropDown
            dropDownList={customerData}
            selectHandler={handleCustomerNameSelect}
            selectedValue={customer}
            placeHolderText={PLACE_HOLDER_TEXT}
          />
        )}
      </div>
      <div className="card-container">
        {isSecurityDataLoading ? (
          <Loader />
        ) : (
          <DataCard
            fontColor="#f0000f"
            value={severityAttacksCount}
            labelText={HIGH_SEVERITY_TITLE}
          />
        )}
      </div>
      <div className="card-container">
        {isSecurityDataLoading ? (
          <Loader />
        ) : (
          <DataCard
            fontColor="#e87000"
            value={spamAttackCount}
            labelText={SPAM_ATTACK_TITLE}
          />
        )}
      </div>
      <div className="table-container">
        {isSecurityDataLoading ? (
          <Loader />
        ) : (
          <DataTable top5MaliciousWebsites={top5MaliciousWebsites} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
