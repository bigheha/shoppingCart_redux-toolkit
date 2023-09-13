import { createAction } from "@reduxjs/toolkit";

const confirmPurchase = createAction<number>("confirmPurchase");

export { confirmPurchase };
