/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // No ESLint dependency is shipped with this project, so skip linting during builds.
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        // Serve the CV as a download with a clean file name
        source: "/Mohammed-Shabeer-E-CV.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: 'attachment; filename="Mohammed-Shabeer-E-CV.pdf"' },
        ],
      },
    ];
  },
};

export default nextConfig;
