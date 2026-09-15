import { createClient } from '@sanity/client';
import { FALLBACK_PROJECTS, FALLBACK_SITE_CONTENT, FALLBACK_TECHNOLOGIES, ProjectData, SiteContentData, TechnologyData } from '../data/fallbackData';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder_project_id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01';

export const isSanityConfigured = !!(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder_project_id'
);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

export async function fetchProjects(): Promise<ProjectData[]> {
  if (!sanityClient) {
    return FALLBACK_PROJECTS;
  }
  try {
    const query = `*[_type == "project"] | order(order asc) {
      "id": _id,
      title,
      "slug": slug.current,
      tagline,
      category,
      problem,
      architecture,
      solution,
      features,
      technologies,
      githubUrl,
      liveUrl,
      featured,
      order
    }`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : FALLBACK_PROJECTS;
  } catch (error) {
    console.warn("Sanity fetch failed for projects, falling back to local dataset:", error);
    return FALLBACK_PROJECTS;
  }
}

export async function fetchTechnologies(): Promise<TechnologyData[]> {
  if (!sanityClient) {
    return FALLBACK_TECHNOLOGIES;
  }
  try {
    const query = `*[_type == "technology"] {
      name,
      category,
      iconName,
      highlight
    }`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : FALLBACK_TECHNOLOGIES;
  } catch (error) {
    console.warn("Sanity fetch failed for technologies, falling back to local dataset:", error);
    return FALLBACK_TECHNOLOGIES;
  }
}

export async function fetchSiteContent(): Promise<SiteContentData> {
  if (!sanityClient) {
    return FALLBACK_SITE_CONTENT;
  }
  try {
    const query = `*[_type == "siteContent"][0]`;
    const data = await sanityClient.fetch(query);
    return data ? { ...FALLBACK_SITE_CONTENT, ...data } : FALLBACK_SITE_CONTENT;
  } catch (error) {
    console.warn("Sanity fetch failed for site content, falling back to local dataset:", error);
    return FALLBACK_SITE_CONTENT;
  }
}
