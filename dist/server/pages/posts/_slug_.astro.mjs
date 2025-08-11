import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, r as renderTemplate } from '../../chunks/astro/server_KnDSl5-i.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let res = await fetch(`https://wp.tusanagustin.com/wp/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  let [post] = await res.json();
  return renderTemplate`${maybeRenderHead()}<article> <img${addAttribute(post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium?.source_url, "src")}> <h2>${unescapeHTML(post.title.rendered)}</h2> <div>${unescapeHTML(post.content.rendered)}</div> </article>`;
}, "C:/Users/tefit/regular-raspberry/src/pages/posts/[slug].astro", void 0);

const $$file = "C:/Users/tefit/regular-raspberry/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
