import axios from "axios";

interface Product {
  productId: string;
  variantID?: string;
  productQty: string;
  baseProductName?: string;
  imageUrl?: string;
  price?: string;
  title?: string;
}

export const checkUrlProduct = async (searchParams: any) => {
  //   console.log("Working");
  let campaignProduct: Product[] = [];
  let campaignProductId: string[] = [];

  const products = searchParams.get("products")?.split(";");
  products?.forEach((item: any) => {
    const items = item.split(":");

    let variantID;
    let pos = items[0].indexOf(".");
    if (pos > 0) {
      let item = items[0].split(".");
      variantID = item[1];
      items[0] = item[0];
    }
    campaignProduct.push({
      productId: items[0],
      variantID: variantID ? variantID : "",
      productQty: items[1],
    });
    campaignProductId.push(items[0]);
  });

  //getCampaignData
  try {
    const data = await axios.post("/CampaignQuery", campaignProductId);
    let campaignProducts = await data.data.products;
    
    //filter products by variant
    campaignProduct.forEach((product) => {
      campaignProducts.forEach((p: any) => {
        if (p.campaignProductId == product.productId) {
          product.baseProductName = p.baseProductName;
          product.imageUrl = p.imageUrl;
          product.price = p.price;
        }

        if (product.variantID) {
          p.variants.forEach((v: any) => {
            if (v.variantDetailId == product.variantID) {
              product.imageUrl = v.imageUrl;
              product.price = v.price;
              product.title = v.title;
            }
          });
        }
      });
    });
  } catch (error) {
    console.log("Error aaya");
  }

  return await campaignProduct;
};
