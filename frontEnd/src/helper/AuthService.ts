import { type CognitoUser } from "@aws-amplify/auth";
import { Amplify, Auth } from "aws-amplify";
import { config } from "../constants/config";
import { User } from "./types";

Amplify.configure({
  Auth: {
    region: config.REGION,
    userPoolId: config.USER_POOL_ID,
    userPoolWebClientId: config.APP_CLIENT_ID,
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
});

export class AuthService {
  public async confirmSignUp(
    username: string,
    code: string
  ): Promise<any | undefined> {
    try {
      const result = await Auth.confirmSignUp(username, code);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public async signUp(
    username: string,
    password: string,
    email: string
  ): Promise<CognitoUser | undefined> {
    try {
      const result = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      return result.user;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    try {
      const user = (await Auth.signIn(userName, password)) as CognitoUser;
      return {
        cognitoUser: user,
        userName: user.getUsername(),
        isAdmin: false,
      };
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async logOut() {
    return await Auth.signOut();
  }
}
