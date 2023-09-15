import { CognitoUser } from "@aws-amplify/auth";

export interface User {
  userName: string;
  cognitoUser: CognitoUser;
  isAdmin: boolean;
}

export interface UserAttribute {
  Name: string;
  Value: string;
}
