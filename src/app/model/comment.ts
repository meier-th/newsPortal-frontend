import { Article } from './article';
import { User } from './user';

export class Comment {

    id : Number;
    text : String;
    article : Article;
    author : User;
    upVotes : Number;
    downVotes : Number;
    date : Date;

}
