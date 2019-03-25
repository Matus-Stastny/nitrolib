// @flow strict

import type { AuthUser } from "../../../records/Auth";

type RelayInput = {|
  +token: ?string,
  +identity: ?{|
    +id: string,
    +email: ?string,
    +firstName: ?string,
    +lastName: ?string,
    +emailVerified: ?boolean,
  |},
  +bookingIdentity: ?{|
    +affiliateId: ?string,
  |},
|};

const toUser = (user: RelayInput): AuthUser => ({
  type: "user",
  token: user.token || "",
  user: {
    id: user.identity?.id || "",
    email: user.identity?.email || "",
    verified: user.identity?.emailVerified || false,
    firstname: user.identity?.firstName || "",
    lastname: user.identity?.lastName || "",
    affiliateId: user.bookingIdentity?.affiliateId || "",
  },
});

export default toUser;
