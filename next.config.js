/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // Serve root HTML
        { source: '/', destination: '/index.html' },
        // Map /route index variants to root index to dedupe
        { source: '/route', destination: '/index.html' },
        { source: '/route/', destination: '/index.html' },
        { source: '/route/index.html', destination: '/index.html' },
      ],
      afterFiles: [
        // Proxy endpoints (specific first)
        { source: '/secureproxy.php', destination: '/route/secureproxy' },
        { source: '/route/secureproxy.php', destination: '/route/secureproxy' },
        // Route all /route/* requests to root equivalents to avoid duplicate assets
        { source: '/route/:path*', destination: '/:path*' },
      ],
      fallback: [],
    };
  },
};

module.exports = nextConfig;
