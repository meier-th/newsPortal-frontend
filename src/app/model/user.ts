import { Article } from './article';
import { Theme } from './theme';

export class User {

    login : string;
    signupDate : Date;
    enabled : boolean;
    subscribers : User[];
    email : string;
    userSubscriptions : User[];
    articles : Article[];
    rating : number;
    themeSubscriptions : Theme[];

}
