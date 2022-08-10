import React, { useMemo } from "react";
import { AppProps } from "next/app";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import {
	AppBar,
	Box,
	createTheme,
	CssBaseline,
	Toolbar,
	Typography,
} from "@mui/material";

const theme = createTheme();

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Curriculum Vitae
					</Typography>
				</Toolbar>
			</AppBar>
			<Component {...pageProps} />
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Something here to give the footer a purpose!
				</Typography>
			</Box>
		</ThemeProvider>
	);
};

export default App;
