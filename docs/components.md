# Components

Located in `@kiwicom/nitro/lib/components/<component>`.

**Features:**

* [CookiesConsent](#cookiesconsent)
* [Currency](#currency)
* [DatePicker](#datepicker)
* [Footer](#footer)
* [HeaderLinks](#headerlinks)
* [LocationPicker](#locationpicker)
* [MagicLogin](#magiclogin)
* [NavBar](#navbar)
* [SideBar](#sidebar)

**Utilities:**

* [BookingSavingsBanner](#bookingsavingsbanner)
* [Button](#button)
* [ClickOutside](#clickoutside)
* [ClientOnly](#clientonly)
* [CloseByKey](#closebykey)
* [Desktop](#desktop)
* [InitAuth](#initauth)
* [InitCurrency](#initcurrency)
* [InitIntl](#initintl)
* [InitLog](#initlog)
* [Mobile](#mobile)
* [Price](#price)
* [Text](#text)
* [TextNode](#textnode)
* [Toggle](#toggle)
* [Translate](#translate)
* [TranslateNode](#translatenode)
* [Value](#value)
* [ValueBind](#valuebind)

## Features

Actual components that do stuff. See [storybook](https://nitro-storybook-master.fe.staging.kiwi.com) for a live example.

### CookiesConsent

**Import:**
```js
import CookiesConsent from "@kiwicom/nitro/lib/components/CookiesConsent";
```

**Types:**
```js
type Props = {|
  onAccept: () => void,
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=CookiesConsent).

**Context needs:**
* [intl](./services#intl)

**Selectors `data-test`:**
* ```"CookiesConsent"```

Closeable cookies thingie.

### Currency

**Import:**
```js
import Currency from "@kiwicom/nitro/lib/components/Currency";
```

**Types:**
```js
type Props = {|
  positionMenuTablet?: number,
  positionMenuDesktop?: number,
  inverted?: boolean,
  onSetModal?: (modal: ModalType) => void,
  // defaulted
  native?: boolean,
  loading?: React.Node,
|};
```

See types:
* [modals](./consts#modals)

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Currency).

**Context needs:**
* [currency](./services#currency)
* [log](./services#log)

**Selectors `data-test`:**
* ```"Currency"```
* ```"Currency-Open"```
* ```{`Currency-Item-${item.id}`}```

A currency picker.

### DatePicker

**Import:**
```js
import DatePicker from "@kiwicom/nitro/lib/components/DatePicker";
```

**Types:**
```js
type Props = {|
  value: Date,
  onChange: (date: Date) => void,
  label: string,
  icon?: React.Node,
  min: Date,
  max: Date,
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=DatePicker).

**Context needs:**
* [intl](./services#intl)

_TODOs_
- [ ] DI `new Date()` into components for tests

### Footer

**Import:**
```js
import Footer from "@kiwicom/nitro/lib/components/Footer";
```

**Types:**
```js
type Props = {||};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Footer).

**Context needs:**
* [intl](./services#intl)

### HeaderLinks

**Import:**
```js
import HeaderLinks from "@kiwicom/nitro/lib/components/HeaderLinks";
```

**Types:**
```js
type Splitster = {
  // FIXME add a firm structure
  [key: string]: string,
};

type Response = {|
  splitster: Splitster,
  items: HeaderLink[],
|};

type Props = {|
  languageId: string,
  currencyId: string,
  searchForm: SearchForm | null,
  splitster: Splitster,
  active?: string, // TODO maybe add specific if ids are also specified
  inverted?: boolean,
  onFetch?: (services: Response) => void,
  testResponse?: Response, // TODO DI actual API call
|};
```

See types:
* [HeaderLink](./records#headerlink)

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=HeaderLinks).

**Context needs:**
* [intl](./services#intl)
* [log](./services#log)

### LocationPicker

**Import:**
```js
import LocationPicker from "@kiwicom/nitro/lib/components/LocationPicker";
```

**Types:**
```js
type Props = {|
  value: Location | null,
  onChange: (loc: Location) => void,
  label: string,
  icon?: React.Node,
  // defaulted
  environment?: Environment,
|};
```

See types:
* [Location](./records#location)

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=LocationPicker).

**Context needs:**
* [intl](./services#intl)

### MagicLogin

**Import:**
```js
import MagicLogin from "@kiwicom/nitro/lib/components/MagicLogin";
```

**Types:**
```js
type Props = {|
  initialScreen: "intro" | "signUp",
  type: "mmb" | "help" | "refer",
  disableSocialLogin?: boolean,
  onClose: () => void,
  onSignIn: (user: AuthUser) => void,
  onSocialLogin: (provider: SocialProvider) => Promise<void>,
|};
```

See types:
* [Auth](./records#auth)

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=MagicLogin).

**Context needs:**
* [brand](./services#brand)
* [intl](./services#intl)
* [log](./services#log)

**Selectors `data-test`:**
* ```"MagicLogin"```

**User login flow**

[WIKI - New login flow with magic link](https://kiwi.wiki/frontend/wiki/#/general/magic-link-login)

### NavBar

**Import:**
```js
import NavBar from "@kiwicom/nitro/lib/components/NavBar";
```

**Types:**
```js
type Props = {|
  starred: React.Node,
  subscription: React.Node,
  portal: string,
  onOpenFaq: ?() => void,
  onSetModal: (modal: Modal) => void,
  onSaveLanguage: (lang: string) => void,
  onSelectTrip: (bid: string) => void,
  onLogoClick: (ev: SyntheticMouseEvent<HTMLAnchorElement>) => void,
  // defaulted
  headerLinks?: React.Node, // null
  debug?: React.Node, // null
  inverted?: boolean, // false
|};
```

See types:
* [modals](./consts#modals)

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=NavBar).

**Context needs:**
* [auth](./services#auth)
* [brand](./services#brand)
* [currency](./services#currency)
* [fetched](./services#fetched)
* [intl](./services#intl)
* [log](./services#log)
* [modal](./services#modal)

**Selectors `data-test`:**
* ```"NavBar"```
* ```"NavBar-Help"```
* ```"NavBar-SideNav"```
* ```"NavBar-SideNav-Close"```
* ```"NavBar-SideNav-Open"```

### SideBar

**Import:**
```js
import SideBar from "@kiwicom/nitro/lib/components/SideBar";
```

**Types:**
```js
type Props = {|
  shown: boolean,
  inverted?: boolean, // opens from the other side
  unmasked?: boolean, // removes outer mask and disables onClick
  onClick: () => void,
  children: React.Node,
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=SideBar).

A container for a sidebar sliding from the _right_ (_left_ in RTL). It is appended to `document.body`.

## Utilities

Things that help in development.

### BookingSavingsBanner

**Import:**
```js
import BookingSavingsBanner from "@kiwicom/nitro/lib/components/BookingSavingsBanner";
```

**Types:**
```js
type Props = {|
  amount: number,
  currency: string,
  onLearnMoreClick: (e: SyntheticEvent<HTMLButtonElement>) => void, // Triggers redirection to learn more article
  onMoreTripsClick: (e: SyntheticEvent<HTMLButtonElement>) => void, // Triggers modal with alternative trips
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=BookingSavingsBanner).

**Context needs:**
* [intl](./services#intl)

**Selectors `data-test`:**
* ```"BookingSavingsBanner"```
* ```"BookingSavingsBanner-LearnMore"```
* ```"BookingSavingsBanner-MoreTrips"```

Throw-away ticket banner indicating savings in €.

### Button

**Import:**
```js
import Button from "@kiwicom/nitro/lib/components/Button";
```

**Types:**
```js
type Props = {|
  ...$Diff<PropsOrbit, { children: ?React.Node }>,
  t: string,
  values?: { [key: string]: string | number },
  html?: boolean,
  transform?: (value: string) => string,
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Button).

**Context needs:**
* [intl](./services#intl)

Our `Translate` wrapped in _Orbit_ `Button`. Accepts both our and their props.

Button component shorter and nicer!

### ClickOutside

**Import:**
```js
import ClickOutside from "@kiwicom/nitro/lib/components/ClickOutside";
```

**Types:**
```js
type Props = {|
  onClickOutside: (ev: MouseEvent) => void,
  children: React.Node | React.Node[],
  // defaulted
  active?: boolean, // true
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=ClickOutside).

Fires a callback whenever a user clicks outside of this component.

**Example:**
```js
const MyComponent = ({ open, onCloseModal }: Props) => (
  <ClickOutside active={open} onClickOutside={onCloseModal}>
    <MyModal open={open} />
  </ClickOutside>
);
```

### ClientOnly

**Import:**
```js
import ClientOnly from "@kiwicom/nitro/lib/components/ClientOnly";
```

**Types:**
```js
type Props = {|
  children: React.Node,
  // defaulted
  loader?: React.Node, // null
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=ClientOnly).

Renders only on the client, useful for wrapping components that break **server-side rendering**.

**Example:**
```js
const MyComponent = () => (
  <ClientOnly>
    <>
      <ComponentWithSideEffects />
      <ComponentUsingTheWindowObject />
    </>
  </ClientOnly>
);
```

### CloseByKey

**Import:**
```js
import CloseByKey from "@kiwicom/nitro/lib/components/CloseByKey";
```

**Types:**
```js
type Props = {|
  onClose: (ev: KeyboardEvent) => void,
  children: React.Node,
  // defaulted
  closeKey?: string, // Escape
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=CloseByKey).

Fires a callback whenever a user presses the close button (_Escape_ by default).

### Desktop

**Import:**
```js
import Desktop from "@kiwicom/nitro/lib/components/Desktop";
```

**Types:**
```js
type Props = {|
  children: React.Node | React.Node[],
  // defaulted
  display?: "block" | "inline" | "inline-block" | "flex", // block
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Desktop).

Renders only above **tablet** width.

**Example:**
```js
const NavBar = () => (
  <>
    <Desktop>
      <Button>A desktop-only button</Button>
    </Desktop>
    <Menu />
  </>
);
```

### InitAuth

**Import:**
```js
import InitAuth from "@kiwicom/nitro/lib/components/InitAuth";
```

**Types:**
```js
type MyBookingInput = {|
  bid: string,
  email: string,
  iata: string,
  departure: Date,
|};

type RegisterInput = {|
  firstName: string,
  lastName: string,
  email: string,
  password: string,
|};

type Arg = {|
  auth: Auth | null,
  loading: boolean,
  environment: Environment,
  onMyBooking: (input: MyBookingInput) => Promise<void>,
  onRegister: (input: RegisterInput) => Promise<void>,
  onSocialAuth: (provider: SocialProvider) => Promise<void>,
  onSignIn: (email: string, password: string) => Promise<void>,
  onSignOut: () => void,
|};

type Props = {|
  token: string | null,
  brand: Brand,
  redirectURL: string,
  onMyBooking: (token: string) => void,
  onRegister: () => void,
  onSocialAuth: (authURL: string) => void,
  onSignIn: (token: string) => void,
  onSignOut: () => void,
  children: (arg: Arg) => React.Node,
|};
```

See types:
* [Auth](./records#auth)
* [Brand](./records#brand)

Calls APIs for you, handles loading state and supplies context with _Relay_ environment with the auth token. Supplied callbacks are only there for the side effects:
* saving token to cookies on **login**
* removing token from cookies on **logout**
* redirecting the user on **social login**
* popping a note to check email on **register**
* redirecting the user to MMB on **my booking**

It also logs the user in on mount if you supply the `token` prop.

Saves or removes the `AFFILIATE_ID` cookie on sign in.

### InitCurrency

**Import:**
```js
import InitCurrency from "@kiwicom/nitro/lib/components/InitCurrency";
```

**Types:**
```js
type Arg = {|
  currency: Currency,
  available: Currencies,
  recommended: Currency[],
  onChange: (code: string) => void,
|};

type Props = {|
  brand: Brand,
  countries: Countries,
  affiliate: string,
  ip: string,
  initialCurrency: string,
  langCurrency: string,
  children: (arg: Arg) => React.Node,
  onChange: (currency: string) => void,
  // defaulted
  mostUsed?: string[],
  // DI
  getCurrencies?: () => Promise<Currencies>,
  getGeoCountry?: (ip: string) => Promise<string>,
|};
```

See types:
* [Brand](./records#brand)
* [Currency](./records#currency)
* [Country](./records#country)

_TODO_

### InitIntl

**Import:**
```js
import InitIntl from "@kiwicom/nitro/lib/components/InitIntl";
```

**Types:**
```js
type Props = {|
  raw: IntlRaw,
  children: (arg: Context) => React.Node,
  // defaulted
  getLocale?: Promise<$FlowFixMe>, // resolves en-US by default
|};
```

See types:
* [Intl](./records#intl)

**Context needs:**
* [intl](./services#intl)

Useful for initiating the **intl** context from raw intl data.

```js
import type { IntlRaw } from "@kiwicom/nitro/lib/records/Intl";

const raw: IntlRaw = window.__INTL__; // intl data from the server

const App = () => (
  <InitIntl raw={raw}>
    {intl => (
      <IntlProvider value={intl}>
        <Root />
      </IntlProvider>
    )}
  </InitIntl>
)

const node = document.getElementById("root");
if (node) {
  ReactDOM.hydrate(<App />, node);
}
```

On the server:

```js
import type { IntlRaw } from "@kiwicom/nitro/lib/records/Intl";

import { locales } from "./data";

export default function render(locale: string) {
  const raw: IntlRaw = locales[locale];

  const markup = ReactDOM.renderToString(
    <InitIntl raw={raw}>
      {intl => (
        <IntlProvider value={intl}>
          <Root />
        </IntlProvider>
      )}
    </InitIntl>
  );

  // <Html /> puts the raw intl data into window.__INTL__
  return ReactDOM.renderToStaticNodeStream(<Html intl={raw} />);
}
```

### InitLog

**Import:**
```js
import InitLog from "@kiwicom/nitro/lib/components/InitLog";
```

**Types:**
```js
type Props = {|
  globals: Globals,
  onLog: (ev: EventPayload, globals: Globals) => void,
  children: (ctx: Context) => React.Node,
|};
```

See types:
* [Event](./records#event)
* [Loglady](./records#loglady)

**Context needs:**
* [log](./services#log)

Initializes the [log](./services#log) context.

**Example:**
```js
import type { EventPayload } from "@kiwicom/nitro/lib/records/Event";
import type { Globals } from "@kiwicom/nitro/lib/records/Loglady";
import { Provider as LogProvider } from "@kiwicom/nitro/lib/services/log/context";
import InitLog from "@kiwicom/nitro/lib/components/InitLog";

const globals: Globals = {
  userId: window.__SESSION__.userId,
  langId: window.__INTL__.id,
  // ...etc
};

function log(ev: EventPayload, globals: Globals) {
  // do side effects
}

ReactDOM.render(
  <InitLog globals={globals} onLog={log}>
    {ctx => (
      <LogProvider value={ctx}>
        <App />
      </LogProvider>
    )}
  </InitLog>,
  node,
);
```

### Mobile

**Import:**
```js
import Mobile from "@kiwicom/nitro/lib/components/Mobile";
```

**Types:**
```js
type Props = {|
  children: React.Node | React.Node[],
  // defaulted
  display?: "block" | "inline" | "inline-block" | "flex", // block
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Mobile).

Renders only below **tablet** width.

**Example:**
```js
const NavBar = () => (
  <>
    <Mobile>
      <Button>A mobile-only button</Button>
    </Mobile>
    <Menu />
  </>
);
```

### Price

**Import:**
```js
import Price from "@kiwicom/nitro/lib/components/Price";
```

**Types:**
```js
type Props = {|
  value: number,
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Price).

**Context needs:**
* [currency](./services#currency)

Renders a formatted price.

**Example:**
```js
const Pay = ({ value }: Props) => (
  <Button>
    <TextNode
      t="Pay __x__"
      values={
        { x: <Price value={value} /> }
      }
    />
  </Button>
);
```

### Text

**Import:**
```js
import Text from "@kiwicom/nitro/lib/components/Text";
```

**Types:**
```js
type Props = {|
  ...$Diff<PropsOrbit, { children: React.Node }>,
  t: string,
  values?: { [key: string]: string | number },
  html?: boolean,
  transform?: (value: string) => string,
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Text).

**Context needs:**
* [intl](./services#intl)

Our `Translate` wrapped in _Orbit_'s `Text`. Accepts both our and their props.

Useful for both translating and making text nicer!

### TextNode

**Import:**
```js
import TextNode from "@kiwicom/nitro/lib/components/TextNode";
```

**Types:**
```js
type Props = {|
  ...$Diff<PropsOrbit, { children: React.Node }>,
  t: string,
  values: { [key: string]: React.Node },
  transform?: (value: string) => string,
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=TextNode).

**Context needs:**
* [intl](./services#intl)

Our `TranslateNode` wrapped in _Orbit_'s `Text`. Accepts both our and their props.

Useful for both translating and making text nicer!

### Toggle

**Import:**
```js
import Toggle from "@kiwicom/nitro/lib/components/Toggle";
```

**Types:**
```js
type Data = {|
  open: boolean,
  onToggle: () => void,
|};

type Props = {|
  children: (data: Data) => React.Node,
  // defaulted
  initial?: boolean, // false
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Toggle).

A container that holds state of something being open.

**Example:**
```js
const MyComponent = () => (
  <Toggle>
    {({ open, onToggle }) => (
      <>
        <h3>{open ? "Open" : "Closed"}</h3>
        <Button onClick={onToggle}>Toggle</Button>
      </>
    )}
  </Toggle>
);
```

### Translate

**Import:**
```js
import Translate from "@kiwicom/nitro/lib/components/Translate";
```

**Types:**
```js
type Props = {|
  t: string,
  // defaulted
  values?: { [key: string]: string | number }, // {}
  html?: boolean, // false
  transform?: (value: string) => string, // identity
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Translate).

**Context needs:**
* [intl](./services#intl)

Translates the supplied key.

> The text output can be transformed using the `transform` function. You can use arrow functions - the component does not implement pure render.

**Example:**
```js
const Submit = () => (
  <Button>
    <Translate t="Submit" />
  </Button>
);
```

### TranslateNode

**Import:**
```js
import TranslateNode from "@kiwicom/nitro/lib/components/TranslateNode";
```

**Types:**
```js
type Props = {|
  t: string,
  values: { [key: string]: React.Node },
  // defaulted
  transform?: (value: string) => string, // identity
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=TranslateNode).

**Context needs:**
* [intl](./services#intl)

The same as `Translate`, except values are `React.Node`. Useful when you need to inject elements with event handlers!

> The text output can be transformed using the `transform` function. You can use arrow functions - the component does not implement pure render.

Example:
```js
const MyComponent = () => (
  <TranslateNode
    t="Click this: __x__"
    values={
      { x: <button onClick={() => alert("Clicked")}>Yo</button> }
    }
  />
);
```

### Value

**Import:**
```js
import Value from "@kiwicom/nitro/lib/components/Value";
```

**Types:**
```js
type Data = {|
  value: string,
  onChange: (value?: string) => void, // 'value' defaults to ""
|};

type Props = {|
  children: (data: Data) => React.Node,
  // defaulted
  initial?: string, // ""
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=Value).

A render props container component that holds a string value. Useful for modals, for example.

> Super useful when combined with the [ValueBind](#valuebind) component!

**Example:**
```js
const AuthModals = ({ query }: Props) => (
  <Value initial={query.modal || ""}>
    {({ value, onChange }) => (
      <>
        <ModalLogin open={value === "login"} onClose={onChange} />
        <ModalRegister open={value === "register"} onClose={onChange} />
        
        <ValueBind value="login" onChange={onChange}>
          {({ onClick }) => <Button onClick={onClick}>Login</Button>}
        </ValueBind>
        <ValueBind value="register" onChange={onChange}>
          {({ onClick }) => <Button onClick={onClick}>Register</Button>}
        </ValueBind>
      </>
    )}
  </Value>
)
```

### ValueBind

**Import:**
```js
import ValueBind from "@kiwicom/nitro/lib/components/ValueBind";
```

**Types:**
```js
type Data = {|
  onClick: () => void,
|};

type Props = {|
  value: string,
  onChange: (value: string) => void,
  children: (data: Data) => React.Node,
|};
```

[Storybook](https://nitro-storybook-master.fe.staging.kiwi.com/?selectedKind=ValueBind).

Binds a value to a callback, that's it. Useful for changing `onChange` callbacks to `onClick` ones.

```js
const OpenLogin = ({ onChange }: Props) => (
  <ValueBind value="login" onChange={onChange}>
    {({ onClick }) => (
      <Button onClick={onClick} />
    )}
  </ValueBind>
)
```
