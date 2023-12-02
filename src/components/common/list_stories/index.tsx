import { Story, User } from "../models";

export type UserStory =  User & Story  
export const listStories: UserStory[] = [
    {
        id: 1,
        userName: "bruno",
        displayName: "bruno",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        haveSeenBefore: false
    },
    {
        id: 2,
        userName: "ronaldo",
        displayName: "ronaldo",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        haveSeenBefore: false
    },
    {
        id: 3,
        userName: "messi",
        displayName: "messi",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        haveSeenBefore: false
    },
    {
        id: 4,
        userName: "halland",
        displayName: "halland",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        haveSeenBefore: false
    },
    {
        id: 5,
        userName: "mbapple",
        displayName: "mbapple",
        avatar: "https://randomuser.me/api/portraits/men/40.jpg",
        haveSeenBefore: true
    },
]