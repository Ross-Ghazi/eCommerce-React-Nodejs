import { type CognitoUser } from "@aws-amplify/auth";
// import "crypto-js/lib-typedarrays";
import { Amplify, Auth } from "aws-amplify";

const awsRegion = "us-west-2";

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId: "us-west-2_xva90Wd18",
    userPoolWebClientId: "65t0o4sa61buvd9b5qektpiio0",
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
});

export class AuthService {
  public async login(userName: string, password: string) {
    const result = (await Auth.signIn(userName, password)) as CognitoUser;
    return result;
  }
}
