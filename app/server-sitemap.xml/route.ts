import { getServerSideSitemap } from 'next-sitemap';

export async function GET() {
  const posts: { id: number }[] = [];
  const newsSitemaps = posts.map((id) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}${id}`,
    lastmod: new Date().toISOString()
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(fields);
}
