import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    tecnologias: z.array(z.string()),
    año: z.number(),
  })
})

export const collections = { proyectos }