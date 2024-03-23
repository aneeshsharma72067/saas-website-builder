import { getAuthUserDetails } from "@/lib/queries";
import React from "react";

type Props = {
  id: string;
  type: "agency" | "subaccount";
};

const Sidebar = async ({ id, type }: Props) => {
  const user = await getAuthUserDetails();
  if (!user) {
    return null;
  }
  if (!user.Agency) return;
  const details =
    type === "agency"
      ? user.Agency
      : user.Agency.SubAccount.find((subaccount) => subaccount.id === id);

  const isWhiteLabelledAgency = user.Agency.whiteLabel;
  if (!details) return;

  let sidebarLogo = user.Agency.agencyLogo || "/assets/plura-logo.svg";

  if (!isWhiteLabelledAgency) {
    if (type === "subaccount") {
      sidebarLogo =
        user.Agency.SubAccount.find((subaccount) => subaccount.id === id)
          ?.subAccountLogo || user.Agency.agencyLogo;
    }
  }

  const sideBarOptions =
    type === "agency"
      ? user.Agency.SidebarOption || []
      : user.Agency.SubAccount.find((subaccount) => subaccount.id === id)
          ?.SidebarOption || [];

  return <div>Sidebar</div>;
};

export default Sidebar;
