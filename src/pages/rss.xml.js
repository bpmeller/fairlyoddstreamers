import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const sorted = blog.sort(
    (a, b) =>
      new Date(b.data.publishDate || 0).getTime() -
      new Date(a.data.publishDate || 0).getTime()
  );

  return rss({
    title: 'Fairly Odd Streamers Blog',
    description: 'Tips, guides, and insights for livestreamers.',
    site: context.site || 'https://fairlyoddstreamers.com',
    items: sorted.map((post) => ({
      title: post.data.name,
      pubDate: post.data.publishDate ? new Date(post.data.publishDate) : new Date(),
      description: post.data.postSummary || post.data.metaDescription || '',
      link: `/blog/${post.slug}/`,
      author: post.data.author || 'Fairly Odd Streamers',
    })),
    customData: '<language>en-us</language>',
  });
}
