import React from "react";
import { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import {
	AppBar,
	Box,
	Button,
	createTheme,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { projects } from "@root/constants/projects";

const theme = createTheme();

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	// const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				CV
			</Typography>
			<Divider />
			<List>
				{projects.map((project) => (
					<ListItem key={project.name} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={project.displayName} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<AppBar component="nav" position="relative">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Link href="/" passHref>
						<Typography
							variant="h6"
							noWrap
							component="a"
							sx={{
								mr: 2,
								display: { xs: "none", sm: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							CV
						</Typography>
					</Link>
					<Box sx={{ display: { xs: "none", sm: "inherit" } }}>
						{projects.map((project) => (
							<Link
								key={project.name}
								href={`/projects/${project.name}`}
								passHref
							>
								<Button sx={{ color: "#fff" }}>
									{project.displayName}
								</Button>
							</Link>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={
						typeof window !== "undefined"
							? window.document.body
							: undefined
					}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: 240,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>

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
