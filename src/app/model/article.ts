import { User } from './user';
import { Theme } from './theme';
import { Comment } from './comment';

export class Article {

    id : Number;
    text : String;
    author : User;
    dateTime : Date;
    views : Number;
    upVotes : Number;
    downVotes : Number;
    theme : Theme;
    comments : Comment[];

    getPreview() : String {
        return this.text.substr(0, 350);
    }

}
