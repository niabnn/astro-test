const domain = import.meta.env.VITE_WP_DOMAIN;
const api = `${domain}/wp-json/wp/v2`;

export const getPageInfo = async (slug: string) => {
  const res = await fetch(`${api}/pages?slug=${slug}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch page info');
  }
  const data = await res.json();
  return data[0];
}