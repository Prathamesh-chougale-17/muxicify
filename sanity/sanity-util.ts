import { client } from "./client";
import { groq } from "next-sanity";
import { buildQuery } from "./buildQuery";

export interface Games {
    title: string;
    image: string;
    slug: string;
    logo: string;
}

export interface Tournament {
    eventname: string;
    event: string;
    countdown: number;
    startdate: string;
    player: number;
    prizepool: number;
    organizer: string;
    participationfee: string;
    location: string;
    gametype: string;
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

export async function getGames(): Promise<Games[]> {
    return client.fetch(groq`*[_type == "events"]{
        title,
        "slug":slug.current,
          "image": games.asset->url,
          "logo": logo.asset->url
      }`)
}

export async function getGamesBySlug(slug: string): Promise<Games> {
    return client.fetch(groq`*[_type == "events" && slug.current == "${slug}"][0]{
        title,
        "slug":slug.current,
          "image": games.asset->url,
          "logo": logo.asset->url
      }`,
        { slug }
    )
}
export async function getTournament(): Promise<Tournament[]> {
    return client.fetch(groq`*[_type == "upcomingevents"]{
        eventname,
        "event":slug.current,
        countdown,
        startdate,
        player,
        prizepool,
        organizer,
        participationfee,
        location,
        gametype
      }`)
}

export async function getTournamentBySlug(slug: string): Promise<Tournament> {
    return client.fetch(groq`*[_type == "upcomingevents" && slug.current == "${slug}"][0]{
        eventname,
        "event":slug.current,
        countdown,
        startdate,
        player,
        prizepool,
        organizer,
        participationfee,
        location,
        gametype
      }`,
        { slug }
    )
}