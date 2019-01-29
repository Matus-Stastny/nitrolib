// @flow strict
import * as R from "ramda";

const linkArrayItems = (makeCircular: boolean) => (items: Array<any>) => {
  const result: Array<any> = items.map(current => ({ current, prev: [], next: [] }));
  const firstItem = R.head(items);
  const lastItem = R.last(items);

  /* eslint-disable no-param-reassign */
  result.forEach((item, i) => {
    if (item.current === firstItem) {
      item.prev = makeCircular ? lastItem : null;
    } else {
      item.prev = items[i - 1];
    }

    if (item.current === lastItem) {
      item.next = makeCircular ? firstItem : null;
    } else {
      item.next = items[i + 1];
    }
  });

  return result;
};

export default linkArrayItems;
