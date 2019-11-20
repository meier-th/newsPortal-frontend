import { Article } from './article';
import { Theme } from './theme';

export class User {

    login : String;
    signupDate : Date;
    enabled : Boolean;
    subscribers : User[];
    email : String;
    userSubscriptions : User[];
    articles : Article[];
    rating : Number;
    themeSubscriptions : Theme[];

}
