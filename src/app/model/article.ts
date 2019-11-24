import { User } from './user';
import { Theme } from './theme';
import { Comment } from './comment';

export class Article {

    id : Number;
    heading: String;
    text : String;
    author : User;
    dateTime : Date; 
    views : Number;
    upVotes : Number;
    downVotes : Number;
    theme : Theme;
    comments : Comment[];

}
