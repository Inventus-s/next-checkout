import { campaignData } from "@/app/checkout/data";
import { NextRequest, NextResponse } from "next/server";
const query = `https://api.checkoutchamp.com/campaign/query/?loginId=${process.env.CC_LOGIN_ID}&password=${process.env.CC_PASSWORRD}&campaignId=${process.env.CC_CAMPAIGN_ID}`;

export async function POST(request: NextRequest) {
  // const response = await fetch(query , {
  //   cache: "no-store",
  // }).then((res) => res.json());
  
  return NextResponse.json(campaignData);
}
