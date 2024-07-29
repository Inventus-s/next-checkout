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
  products?.forEach((item:any) => {
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
  const data = await axios.post("/api/campaigns", campaignProductId);
  let campaignProducts = await data.data.products;
  //filter products by variant
  campaignProduct.forEach((product) => {
    console.log("campaignProducts", campaignProducts);
    campaignProducts.forEach((p) => {
      if (p.campaignProductId == product.productId) {
        product.baseProductName = p.baseProductName;
      }

      if (product.variantID) {
        p.variants.forEach((v) => {
          if (v.variantDetailId == product.variantID) {
            product.imageUrl = v.imageUrl;
            product.price = v.price;
            product.title = v.title;
          }
        });
      } else {
        product.imageUrl = p.imageUrl;
        product.price = p.price;
      }
    });
  });
  console.log("campaignProduct", campaignProduct);
};
