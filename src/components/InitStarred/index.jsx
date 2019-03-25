// @flow strict
import * as React from "react";
import * as R from "ramda";

import { load, remove, save } from "../../services/session/storage";
import type { StarredItem } from "../../records/Starred";
import { SESSION } from "../../consts/storage";

type State = {|
  starred: { [key: string]: StarredItem },
|};

type Args = {|
  starredList: StarredItem[],
  onRemove: (arg: number, e: SyntheticEvent<HTMLDivElement>) => void,
  onAdd: (arg: StarredItem) => void,
  lang: string,
  onClear: (e: SyntheticEvent<HTMLDivElement>) => void,
|};

type Props = {|
  children: (args: Args) => React.Node,
|};

class StarredProvider extends React.Component<Props, State> {
  state = {
    starred: JSON.parse(JSON.stringify(load(SESSION))),
  };

  onAdd = (trip: StarredItem) => {
    const { starred } = this.state;

    this.setState({
      starred: { ...starred, trip },
    });

    save(SESSION, JSON.stringify({ starred }));
  };

  onClear = (e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    remove(SESSION);

    this.setState({
      starred: {},
    });
  };

  onRemove = (key: number, e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    const { starred } = this.state;

    this.setState({
      starred: R.filter(item => item.id !== key, starred),
    });

    save(SESSION, JSON.stringify(R.filter(item => item.id !== key, starred)));
  };

  render() {
    const { children } = this.props;
    const { starred } = this.state;

    return children({
      starredList: R.values(starred),
      onRemove: this.onRemove,
      lang: "en",
      onAdd: this.onAdd,
      onClear: this.onClear,
    });
  }
}

export default StarredProvider;
