import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
const query = `https://api.checkoutchamp.com/campaign/query/?loginId=${process.env.CC_LOGIN_ID}&password=${process.env.CC_PASSWORRD}&campaignId=${process.env.CC_CAMPAIGN_ID}`;
interface ApiResponse{
  products: object[];
  countries: object[];
  taxes: object[];
  coupons: object[];
  shipProfiles: object[];
}

export async function POST(request: NextRequest) {
  // const data = await request.json();
  // Request Methods
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  try {
    const response = await fetch(
      query + `&campaignProductId=101`, { cache: 'no-store' }
    ).then( res => res.json() );
    return NextResponse.json(response);
    // const responseData: ApiResponse = await response.data.message.data[process.env.CC_CAMPAIGN_ID!];
    // const {products, countries, taxes, coupons, shipProfiles } = responseData
    // console.log(products);
    // return NextResponse.json({products, countries, taxes, coupons, shipProfiles});
    
  } catch (error) {
    return NextResponse.json(error);
  }

//   console.log(response.data);
  // return NextResponse.json(response.data);
}
