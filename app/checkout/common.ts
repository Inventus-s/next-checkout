// Common Checkout Functions

export const campaignQuery = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const url = new URL("/api/campaigns", baseUrl); // This creates an absolute URL
  // fetch campaign data
  const response = await fetch(url.toString(), {
    method: "POST",
    headers: { cache: "no-store" },
    redirect: "follow",
  }).then((res) => res.json());

  // check if response is successful
  if (response.result === "SUCCESS") {
    // destruct data
    const campaignId = process.env.NEXT_PUBLIC_CC_CAMPAIGN_ID;
    const data = await response.message.data[campaignId!];
    return data;
  } else {
    console.error("Failed to fetch campaign data", response.message);
    return "";
  }
};
