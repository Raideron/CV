import React, { useMemo } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper, makeStore } from "../redux/store";
import "../styles/style.scss";
import { Setup } from "../utils/pageSetup";

const WrappedApp = (props: AppProps) => {
	const { Component, pageProps } = props;
	const store = useMemo(() => makeStore(), []);
	const isClient = typeof window !== "undefined";

	if (isClient) {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistStore(store)}>
					<Setup store={store} />
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		);
	}

	return (
		<Provider store={store}>
			<Setup store={store} />
			<Component {...pageProps} />
		</Provider>
	);
};

export default wrapper.withRedux(WrappedApp);
