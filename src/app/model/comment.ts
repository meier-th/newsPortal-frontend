import { Article } from './article';
import { User } from './user';

export class Comment {

    id : number;
    text : string;
    article : Article;
    author : User;
    upVotes : number;
    downVotes : number;
    date : Date;

}
