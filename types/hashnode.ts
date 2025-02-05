import { ReadTimeResults } from "reading-time";

interface HashnodePost {
  id: string;
  slug: string;
  title: string;
  brief: string;
  coverImageUrl: string;
  publishedAt: string;
  readingTime: ReadTimeResults;
  wordCount: number;
}

interface HashnodePostWithPlaceHolderImage extends HashnodePost {
  placeholderImage: string;
}

export type { HashnodePost, HashnodePostWithPlaceHolderImage };
