// Common Checkout Functions

export const campaignQuery = async (products: string[]) => {
  // fetch campaign data
  const response = await fetch("/CampaignQuery", {
    method: "POST",
    headers: { cache: "no-store" },
  }).then( res => res.json());

  // check if response is successful
  if(response.result === "SUCCESS"){
    // destruct data
    const campaignId = process.env.NEXT_PUBLIC_CC_CAMPAIGN_ID
    console.log(campaignId);
    
    const data = await response.message.data
    // const { products, countries, currencies, taxes, coupons, shipProfiles } = data;
    console.log("data", JSON.stringify(data, null, 2));
    // console.log(products.length);
    
  } else {
    console.error("Failed to fetch campaign data", response.message);
  }
};
