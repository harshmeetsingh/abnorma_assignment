import { useQuery } from "react-query";
import { DEFAULT_CUSTOMER_ID } from "../utils/datautils";

export function useGetSecurityDataForCustomer(customerId) {
  return useQuery(
    ["vulnerable_data", customerId],
    () =>
      fetch(
        `https://abnormalsecurity-public.s3.amazonaws.com/fe_dashboard/${customerId}/messages.json`
      ).then((res) => res.json()),

    {
      enabled: !!customerId,
    }
  );
}
export function useGetCustomerData() {
  return useQuery(["customer_data"], () =>
    fetch(
      `https://abnormalsecurity-public.s3.amazonaws.com/fe_dashboard/customers.json`
    ).then((res) => res.json())
  );
}
