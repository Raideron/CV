/* eslint-disable @typescript-eslint/no-var-requires */
const bundleAnalyzer = require("@next/bundle-analyzer");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	eslint: {
		ignoreDuringBuilds: true,
	},
	webpack: (config) => {
		if (process.env.ANALYZE === "true") {
			config.plugins.push(new DuplicatePackageCheckerPlugin());
		}
		return config;
	},
});
