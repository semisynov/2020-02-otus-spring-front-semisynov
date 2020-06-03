import {Author} from "@/model/Author";
import {Genre} from "@/model/Genre";

export interface Book {
    id: number;
    title: string;
    authors: Author[];
    genres: Genre[];
    comments: Comment[];
}