import { proxy } from "valtio";
import { devtools } from "valtio/utils";
import { itemsData } from "~/DATA/items";

type Item = (typeof itemsData)[number] & { quantity: number };
type Cart = Item[];
type State = { cart: Cart; total: number };

export const state = proxy<State>({
  cart: [],
  total: 0,
});

export const addToCart = (item: Item) => {
  const itemExists = state.cart.find((i) => i.id === item.id);

  if (itemExists) {
    itemExists.quantity += 1;
  } else {
    state.cart.push({ ...item, quantity: 1 });
  }
};

export const decrementQuantity = (item: Item) => {
  const itemExists = state.cart.find((i) => i.id === item.id);

  if (itemExists) {
    if (itemExists.quantity > 1) {
      itemExists.quantity -= 1;
    } else {
      removeFromCart(item);
    }
  }
};

export const removeFromCart = (item: Item) => {
  const itemExists = state.cart.find((i) => i.id === item.id);

  if (itemExists) {
    state.cart = state.cart.filter((i) => i.id !== item.id);
  }
};

export const calculateTotal = () => {
  state.total = state.cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
};

export const updateQuantity = (item: Item) => {
  const itemExists = state.cart.find((i) => i.id === item.id);

  if (itemExists) {
    itemExists.quantity = item.quantity;
  }
};

export const clearCart = () => {
  state.cart = [];
};

devtools(state, { name: "cart", enabled: true });
