/** Site statique : `next build` produit le dossier `out/`, publié par Netlify. */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
