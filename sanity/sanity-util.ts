import { client } from "./client";
import { groq } from "next-sanity";
import { buildQuery } from "./buildQuery";

export interface MusicProps {
    artist: string
    slug: string
    genre: string
    music: string
    _id: string
    image: string
    name: string
    moodid: string
}
export interface MoodProps {
    _id: string
    name: string
    image: string
    slug: string
}
export interface GenreProps {
    _id: string
    name: string
    image: string
    slug: string
}
export interface AuthProps {
    _id: string
    image: string
    name: string
    biography: string
}
// export async function getProject({ query, category, page }: GetResourcesParams): Promise<Project[]> {

//     return client.fetch(groq`${buildQuery({
//         type: 'projects',
//         query,
//         category,
//         page: parseInt(page),
//     })}{
//         title,
//         _id,
//         githubLink,
//         subtitle,
//         "image": projectImage.asset->url,
//         views,
//         "slug":slug.current,
//         category,
//         description,
//         techStack,
//         liveLink
//       }`
//     )
// }

// export async function getProjectBySlug(slug: string): Promise<Project> {
//     return client.fetch(groq`*[_type == "projects" && slug.current == "${slug}"][0]{
//         title,
//         _id,
//         githubLink,
//         subtitle,
//         "image": projectImage.asset->url,
//         views,
//         "slug":slug.current,
//         category,
//         description,
//         techStack,
//         liveLink
//       }`,
//         { slug }
//     )
// }

// export async function getGames(): Promise<Games[]> {
//     return client.fetch(groq`*[_type == "events"]{
//         title,
//         "slug":slug.current,
//           "image": games.asset->url,
//           "logo": logo.asset->url
//       }`)
// }

// export async function getGamesBySlug(slug: string): Promise<Games> {
//     return client.fetch(groq`*[_type == "events" && slug.current == "${slug}"][0]{
//         title,
//         "slug":slug.current,
//           "image": games.asset->url,
//           "logo": logo.asset->url
//       }`,
//         { slug }
//     )
// }
// export async function getTournament(): Promise<Tournament[]> {
//     return client.fetch(groq`*[_type == "upcomingevents"]{
//         eventname,
//         "event":slug.current,
//         countdown,
//         startdate,
//         player,
//         prizepool,
//         organizer,
//         participationfee,
//         location,
//         gametype
//       }`)
// }

// export async function getTournamentBySlug(slug: string): Promise<Tournament> {
//     return client.fetch(groq`*[_type == "upcomingevents" && slug.current == "${slug}"][0]{
//         eventname,
//         "event":slug.current,
//         countdown,
//         startdate,
//         player,
//         prizepool,
//         organizer,
//         participationfee,
//         location,
//         gametype
//       }`,
//         { slug }
//     )
// }

export async function getMusic(): Promise<MusicProps[]> {
    return client.fetch(groq`*[_type=='music']{
        "image": image.asset->url,
        name,
        "moodid": mood[0]._ref,
        "artist": artist[0]._ref,
          "slug": slug.current,
        "genre" : genre[0]._ref,
         "music": music.asset->url,
        _id
      }
      `)
}
export async function getMood(): Promise<MoodProps[]> {
    return client.fetch(groq`*[_type=='mood']{
        "image": image.asset->url,
          name,
        "slug": slug.current,
        _id
      }
      `)
}

export async function getMoodBySlug(slug: string): Promise<MoodProps> {
    return client.fetch(groq`*[_type=='mood' && slug.current == "${slug}"][0]{
        "image": image.asset->url,
          name,
        "slug": slug.current,
        _id
      }
      
      `,
        { slug })
}
export async function getGenre(): Promise<GenreProps[]> {
    return client.fetch(groq`*[_type=='genre']{
        "image": image.asset->url,
        name,
        "slug": slug.current,
        _id
      }
      `)
}
export async function getGenreBySlug(slug: string): Promise<GenreProps> {
    return client.fetch(groq`*[_type=='genre' && slug.current == "${slug}"][0]{
        "image": image.asset->url,
        name,
        "slug": slug.current,
        _id
      }
      `, {
        slug
    })
}
export async function getAuth(): Promise<AuthProps[]> {
    return client.fetch(groq`*[_type=='author']{
        "image": image.asset->url,
        name,
        biography,
        _id
      }
      `)
}