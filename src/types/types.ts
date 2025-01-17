export type MenuType = {
  id: string,
  slug: string,
  title: string,
  desc?: string,
  img?: string,
  color: string,
}[];

export type ProductType = {
  id: string,
  title: string,
  desc?: string,
  img?: string,
  price: number,
  options?: { title: string; additionalPrice: number }
}[];

export type OrderType = {
  id: string,
  userEmail: string,
  price: number,
  products: CartItemType[],
  status: string,
  createdAt: string,
  intent_id?: string,
};

export type CartItemType = {
  id: string,
  title: string,
  img?: string,
  price: number,
  optionTitle?: string,
  quantity: number,
};