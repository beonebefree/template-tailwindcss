import { configureStore } from "@reduxjs/toolkit";
import { clientsApi } from "../services/getClients";
import { user } from "../services/user";


export const store = configureStore({
	reducer: {
        user: user,
        [clientsApi.reducerPath]: clientsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([clientsApi.middleware]),
})