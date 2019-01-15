/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationPickerRow_item$ref: FragmentReference;
export type LocationPickerRow_item = {
  +type: ?string,
  +name: ?string,
  +country: ?{
    +name: ?string,
    +code: ?string,
  },
  +code: ?string,
};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "LocationPickerRow_item",
  "type": "Location",
  "metadata": {
    "mask": false
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "country",
      "storageKey": null,
      "args": null,
      "concreteType": "LocationArea",
      "plural": false,
      "selections": [
        v0,
        v1
      ]
    },
    v1
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '55c7a6007080c8d8d83697bfccf100ad';
module.exports = node;
