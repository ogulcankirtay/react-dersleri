import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket"))
    return JSON.parse(localStorage.getItem("basket"));

  return [];
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmoumt: 0,
};

const writeBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id == action.payload.id);
      if (findProduct) {
        // daha önceden var
        const extractedProducts = state.products.filter(
          (product) => product.id != action.payload.id
        );

        findProduct.count += action.payload.count;
        state.products = [...extractedProducts, findProduct];

        writeBasketToStorage(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeBasketToStorage(state.products);
      }
    },
    removeBasket: (state, action) => {
      const exrectedProducts =
        state.products &&
        state.products.filter((product) => product.id != action.payload.id);

      state.products = [...exrectedProducts];
        writeBasketToStorage(state.products);
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    calculateTotalAmount: (state) => {
      state.totalAmoumt = 0;
      state.products &&
        state.products.map((product) => {
          state.totalAmoumt += product.price * product.count;
        });
    },
  },
  extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function
export const { addToBasket, setDrawer, calculateTotalAmount, removeBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
