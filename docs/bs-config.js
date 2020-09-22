module.exports = {
	// By default we proxy all requests to the remote server
	//proxy: 'staging.ourawesomewebsite.tld',
	server: {
		baseDir: "./"
	},
	// But we still ask BrowserSync to watch changes in our local files
	files: [
		"css/*.css",
		"js/*.js",
		"*.html"
	],
	// Now when a file is changed, BrowserSync in the browser updates the
	// corresponding src/href (which it finds through SHEER MAGIC as far as
	// I know) to include a new query string, which prompts the browser to
	// request the file again.

	// By default that request would be proxied to the remote server,
	// but let pipe it through a middleware first.
	//middleware: require('serve-static')('public'),

	// Now we have asked serve-static to serve the requested file if it can
	// find it in the local `public` folder. If it doesn't find it, it
	// gives the control back to BrowserSync's proxy, so we end up looking
	// for an updated version of the file on the remote server (not good,
	// because in this workflow the file won't have our local changes).

	// Simple situation: if the URLs for static files look like
	// `/assets/css/styles.css` (for example) and in your `public` folder
	// you have `public/assets/css/styles.css`, perfect! You can stop here.

	// But if the URLs are constructed differently, you will need to
	// rewrite them first. So we use rewriteRules, and the execution
	// order becomes: 1) browser-sync rewrites URLs, 2) serve-static looks
	// for the rewritten URLs in your local folder, 3) falls back to proxy
	// if (2) fails.


	// WE'RE DONE! update the paths, and run with:
	// $ browser-sync --config bs-config.js

}