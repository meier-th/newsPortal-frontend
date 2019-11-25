import { User } from './user';
import { Theme } from './theme';
import { Comment } from './comment';

export class Article {

    id : number;
    heading: string;
    text : string;
    author : User;
    dateTime : Date; 
    views : number;
    upVotes : number;
    downVotes : number;
    theme : Theme;
    comments : Comment[];

}
