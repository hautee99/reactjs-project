import { UserStory } from "../list_stories";

export interface Post {
   id: number,
   user: UserStory,
   isLiked: Boolean,
   description: string,
   totalLike: number,
   totalComment: number,
   images: string
}
