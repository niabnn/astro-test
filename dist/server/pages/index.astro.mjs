import { e as createComponent, k as renderHead, h as addAttribute, u as unescapeHTML, l as renderComponent, r as renderTemplate, n as Fragment } from '../chunks/astro/server_KnDSl5-i.mjs';
import 'kleur/colors';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(
    "https://wp.tusanagustin.com/wp/wp-json/wp/v2/posts?_embed"
  );
  const posts = await res.json();
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>Regular Raspberry Blog</title><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body style="font-family: sans-serif; margin: 0; background: #faf6f2;"> <header style="background: #E6A4F7FF; color: #fff; padding: 2rem 0; text-align: center;"> <h1>Regular Raspberry Blog</h1> <p>${posts[2].title?.rendered}</p> </header> <main style="max-width: 700px; margin: 2rem auto; padding: 1rem;"> <section> <!-- Display featured image using _embedded -->
-
${posts.map((post) => renderTemplate`<article> <img${addAttribute(
    post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium?.source_url,
    "src"
  )} alt=""> <h2> <a${addAttribute(`/posts/${post.slug}/`, "href")}>${unescapeHTML(post.title.rendered)}</a> </h2> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(post.content.rendered)}` })} </article>`)} </section> <section style="margin-top: 2rem;"> <h2>About</h2> <p>
Regular Raspberry Blog is your source for thoughtful articles,
          tutorials, and stories. Join us as we explore technology, creativity,
          and more.
</p> </section> <section style="margin-top: 2rem;"> <h2>About</h2> <p>
Regular Raspberry Blog is your source for thoughtful articles,
          tutorials, and stories. Join us as we explore technology, creativity,
          and more.
</p> </section> </main> <footer style="background: #eee; text-align: center; padding: 1rem;">
&copy; 2024 Regular Raspberry Blog
</footer> </body></html>`;
}, "C:/Users/tefit/regular-raspberry/src/pages/index.astro", void 0);

const $$file = "C:/Users/tefit/regular-raspberry/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
