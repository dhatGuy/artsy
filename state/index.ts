import { proxy } from "valtio";
import { devtools } from "valtio/utils";
import { itemsData } from "~/DATA/items";

export type Item = (typeof itemsData)[number];
export type CartItem = (typeof itemsData)[number] & { quantity: number };
export type Cart = CartItem[];
type State = { cart: Cart; total: number };

export const state = proxy<State>({
  cart: [],
  get total() {
    return this.cart.reduce(
      (acc: number, item: { price: number; quantity: number }) => {
        return acc + item.price * item.quantity;
      },
      0
    );
  },
});

export const addToCart = (item: Item, quantity = 1) => {
  const itemExists = state.cart.find((i) => i.id === item.id);

  if (itemExists) {
    itemExists.quantity = quantity;
  } else {
    state.cart.push({ ...item, quantity });
  }
};

export const incrementQuantity = (item: Item) => {
  const itemExists = state.cart.find((i) => i.id === item.id);

  if (itemExists) {
    itemExists.quantity += 1;
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

export const updateQuantity = (item: Item, quantity: number) => {
  const itemExists = state.cart.find((i) => i.id === item.id);

  if (itemExists) {
    itemExists.quantity = quantity;
  }
};

export const clearCart = () => {
  state.cart = [];
};

devtools(state, { name: "cart", enabled: true });
