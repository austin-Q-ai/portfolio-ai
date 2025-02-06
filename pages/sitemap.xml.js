import { allProjects } from "contentlayer/generated";

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export const getServerSideProps = async ({ res }) => {
  const sitemap = `<xml version="1.0" encoding="UTF-8">
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
      <loc>https://${process.env.NEXT_PUBLIC_DOMAIN}/</loc>
      <changefreq>weekly</changefreq>
     </url>
     <url>
      <loc>https://${process.env.NEXT_PUBLIC_DOMAIN}/blog</loc>
      <changefreq>weekly</changefreq>
     </url>
     <url>
      <loc>https://${process.env.NEXT_PUBLIC_DOMAIN}/projects</loc>
      <changefreq>weekly</changefreq>
     </url>
     <url>
      <loc>https://${process.env.NEXT_PUBLIC_DOMAIN}/guestbook</loc>
      <changefreq>daily</changefreq>
     </url>
      ${allProjects.map(project => {
        return `<url>
        <loc>https://${process.env.NEXT_PUBLIC_DOMAIN}/projects/${project.slug}</loc>
        <changefreq>weekly</changefreq>
        </url>`;
      })}
   </urlset>
   </xml>
  `;

  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
