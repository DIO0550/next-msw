/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: "/hoge",
  async headers() {
    return [
      {
        // Append the "Service-Worker-Allowed" header
        // to each response, overriding the default worker's scope.
        source: "/(.*)",
        headers: [
          {
            key: "Service-Worker-Allowed",
            value: "/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
