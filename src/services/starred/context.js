// @flow strict
import * as React from "react";

import type { StarredItem, ShareDialog } from "../../records/Starred";

export type Context = {|
  starredList: StarredItem[],
  onAdd: () => void,
  isMobile: boolean,
  lang: string,
  goToJourneyNitro: StarredItem => void,
  onRemove: () => void,
  shareUrl: StarredItem => string,
  onClear: () => void,
  setNotice: () => void,
  ShareDialog: ShareDialog => React.Node,
|};

const contextDefault: Context = {
  starredList: [],
  shareUrl: () => "some string",
  goToJourneyNitro: () => {},
  isMobile: false,
  lang: "en",
  onAdd: () => {},
  onRemove: () => {},
  onClear: () => {},
  ShareDialog: () => [],
  setNotice: () => {},
};

const context: React.Context<Context> = React.createContext(contextDefault);

export const { Consumer, Provider } = context;
