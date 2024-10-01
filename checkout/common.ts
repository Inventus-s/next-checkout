// Common Checkout Functions

export const campaignQuery = async () => {
  const baseUrl = "http://localhost:3000";
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
    const campaignId = 8;
    const data = await response.message.data[campaignId];
    return data;
  } else {
    console.error("Failed to fetch campaign data", response.message);
    return "";
  }
};

export const calculateSubTotal = async (cartData: CartProduct[]) => {
  let subTotal = 0;
  cartData.map((item) => {
    subTotal += item.price;
  });
  return subTotal;
};

export function isSameCampaignAndVariant(
  cartData: CartItem[],
  product: Product,
  variants: Variant[]
): boolean {
  return cartData.some(
    (item) =>
      item.campaignProductId === product.campaignProductId &&
      item.variantId === variants[0].variantDetailId
  );
}

export function removeDuplicateProducts(cartData: CartProduct[]) {
  // Create a Set to store the unique keys (combination of campaignProductId and variantId)
  const uniqueProducts = new Set();

  // Filter cartData by checking if the unique key (productId + variantId) has been seen before
  const filteredCartData = cartData.filter((product) => {
    const uniqueKey = `${product.campaignProductId}-${product.variantId}`;

    // If the uniqueKey is already in the Set, it's a duplicate, so we skip it
    if (uniqueProducts.has(uniqueKey)) {
      return false; // Duplicate found, filter it out
    } else {
      // If not in the Set, add it and keep the product in the filtered array
      uniqueProducts.add(uniqueKey);
      return true;
    }
  });

  return filteredCartData;
}

export const updateSubTotal = (cartData: CartProduct[]) => {
  let subTotal = 0;
  cartData.map((item) => {
    subTotal += item.price * +item.productQty;
  });
  return subTotal;
};

interface CartProduct {
  campaignProductId: number;
  productName: string;
  productType: string;
  price: number;
  imageUrl: string;
  title: string;
  productQty: string;
}

interface CartItem {
  campaignProductId: string;
  productName: string;
  productType: string;
  variantId: string;
  price: number;
  imageUrl: string;
  title: string;
  productQty: number;
}

interface Product {
  campaignProductId: string;
  productName: string;
  productType: string;
  price: number;
  imageUrl: string;
}

interface Variant {
  variantDetailId: string;
  price: number;
  imageUrl: string;
  title: string;
}
