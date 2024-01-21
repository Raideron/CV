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
import { Home, Share } from "@mui/icons-material";
import { useRouter } from "next/router";
import { projects } from "@root/constants/projects";

const theme = createTheme();

const App = (props: AppProps) => {
	const { Component, pageProps } = props;
	const router = useRouter();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Link href={`/`} passHref>
				<Typography variant="h6" sx={{ my: 2 }}>
					<Home />
				</Typography>
			</Link>
			<Divider />
			<List>
				<Link href={`/projects`} passHref>
					<ListItem disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={"Portfolio"} />
						</ListItemButton>
					</ListItem>
				</Link>
				{projects.map((project) => (
					<Link
						key={project.name}
						href={`/projects/${project.name}`}
						passHref
					>
						<ListItem disablePadding>
							<ListItemButton sx={{ textAlign: "center" }}>
								<ListItemText primary={project.displayName} />
							</ListItemButton>
						</ListItem>
					</Link>
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
						sx={{ mr: 2, display: { md: "none" } }}
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
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							<Home />
						</Typography>
					</Link>
					<Box sx={{ display: { xs: "none", md: "inherit" } }}>
						<Link href={`/projects`} passHref>
							<Button sx={{ color: "#fff" }}>Portfolio</Button>
						</Link>

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
						display: { xs: "block", md: "none" },
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
			<Box sx={{ bgcolor: "grey.100", p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					Contact
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					// component="p"
				>
					<address>
						Email:{" "}
						<a href="mailto:alex.poley14@gmail.com">
							alex.poley14@gmail.com
						</a>
						<br />
						Telefoon: <a href="tel:+3126616567">+3126616567</a>
						<br />
						Website:{" "}
						<Link href="/">
							<a>
								{typeof window !== "undefined" &&
									window.location.origin + router.basePath}
									{router.route}
							</a>
						</Link>
						<br />
						<Button
							variant="contained"
							color="inherit"
							sx={{
								display: "flex",
								alignItems: "center",
								margin: "auto",
								marginTop: 1,
							}}
							onClick={() => {
								if (typeof window !== undefined) {
									const url =
										window.location.origin +
										router.basePath;
									window.navigator?.share({
										title: "Alex Poley",
										url,
									});
								}
							}}
						>
							Delen
							<Share sx={{ ml: 1 }} />
						</Button>
					</address>
				</Typography>
			</Box>
		</ThemeProvider>
	);
};

export default App;
