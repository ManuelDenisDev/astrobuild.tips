import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
    const posts = await getCollection('tips')
    return rss ({
      title: 'AstroBuild.tips',
      description: 'Mi primera Pagina',
      site: context.site,
      items: posts.map((post) => ({
          ...post.data,
          link: `/posts/${post.slug}/`,
        })),
    })
}

// Me ayudo esta documentacion
// https://docs.astro.build/es/guides/rss/#usando-colecciones-de-contenido
// https://docs.astro.build/es/guides/content-collections/#usando-contenido-en-plantillas-de-astro