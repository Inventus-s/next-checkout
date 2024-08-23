// Common Checkout Functions

export const campaignQuery = async () => {
  // fetch campaign data
  const response = await fetch("/CampaignQuery", {
    method: "POST",
    headers: { cache: "no-store" },
  }).then((res) => res.json());

  // check if response is successful
  if (response.result === "SUCCESS") {
    // destruct data
    const campaignId = process.env.NEXT_PUBLIC_CC_CAMPAIGN_ID;
    const data = await response.message.data[campaignId!];
    const { products, countries, currencies, taxes, coupons, shipProfiles } = data;
    return data;
  } else {
    console.error("Failed to fetch campaign data", response.message);
    return "";
  }
};
