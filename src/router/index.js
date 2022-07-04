import ProviderMaintenance from "../pages/ProviderMaintenance";
import MemberMaintenance from "../pages/MemberMaintenance";
import GroupRecords from "../pages/GroupRecords";
import ClaimsRecords from "../pages/ClaimsRecords";
import App from "../App";

export const RoutesNames = {
  PROVIDER_MAINTENANCE: "/provider-maintenance",
  MEMBER_MAINTENANCE: "/member-maintenance",
  GROUP_RECORDS: "/group-records",
  CLAIMS_RECORDS: "/claims-records",
};

export const mainRoutes = [
  {
    path: RoutesNames.PROVIDER_MAINTENANCE,
    component: <ProviderMaintenance />,
  },
  {
    path: RoutesNames.MEMBER_MAINTENANCE,
    component: <MemberMaintenance />,
  },
  {
    path: RoutesNames.GROUP_RECORDS,
    component: <GroupRecords />,
  },
  {
    path: RoutesNames.CLAIMS_RECORDS,
    component: <ClaimsRecords />,
  },
];
