import React from "react";
import { AppProps } from "next/app";

const WrappedApp = (props: AppProps) => {
	const { Component, pageProps } = props;

	return <Component {...pageProps} />;
};

export default WrappedApp;
