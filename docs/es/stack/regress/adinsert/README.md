# Mobile adinsert (WIP)

So you were asked to make some changes on the adinsert for mobile (msite), and you don't know where to start? I got you covered!

The first thing to know about the adinsert is that everything builds on top of a **Nodes** and the **Draft**. The first one are small portions of the adinsert like Adinfo or UserInfo, the second one holds all the Nodes, manages their lifecycle, takes care of the data storage, and data cleaning. The file, at `msite/www/js/new_ai_draft.js`, actually doesn't shares so much info about, so i will do for you:

:::tip
While its true that the current implementations uses pure JS, i will do the examples and definitions using TS for more clarity.
:::

## Globals
Before digging into the `Nodes` and the `Draft`, there are some global variables and methods that are not neccesarily defined in our `Draft` file, but are used by it.

### appl

* Type: `'li'|'vi'|'newad'|'editad'`
* Description: A string that references what part of the site we are currently in:
    * `'li'`: listing
    * `'vi'`: ad view
    * `'newad'`: ad insert
    * `'editad'`: edit ad

### showDraft
```ts
showDraft(): void
```
* Type: `function`
* Description: Hides or show the draft bar (the one that puts 'Tienes un aviso guardado. Publicalo ahora' and 'Limpiar formulario'). When the value of `yapoDraft.' + location.host + '/mai/form/.showDraft` on the session storage is equal to `1` **and** the appl is not `editad` (i.e., user is not editing an ad) it will show the bar, in any other case it will hide it.


## Node

A Node is a subsection of the adinsert, like Adinfo, UserInfo or GeoPosition. Each Node has its `value`, which is usually an object or an array of objects that contains info about that subsection, for example, the UserInfo Node values looks like this: 

```js
[
    { "id":"user_type",           "value":"0" },
    { "id":"#name",               "value":"" },
    { "id":"#email",              "value":"" },
    { "id":"#rut",                "value":"" },
    { "id":"#phone",              "value":"" },
    { "id":"#area_code",          "value":"2" },
    { "id":"#switch",             "value":false },
    { "id":"#phoneInputTypeHome", "value":false },
    { "id":"#is_company_c",       "value":false }
]
```

Generally speaking, a Node should look like this:

```ts
type Node = {
    id: string;
    initDraft(): void;
    clear(): void;
    getValue(): any;
    setValue(): void;
}
```

Is worth mentioning that some of the methods wont't make much sense on their own unless you understand how the Draft works. Also, while is true that each Node could implement each method on its own way, there are some common things that are present in every implementation, we will  define those in the following section.

### id

* Type: `string`
* Description: An unique identificator of the Node.

### initDraft
```ts
initDraft(): void
```
* Type: `function`
* Description: In this part the `Node` calls the `draftMe` method from the `Draft` so the `Node` gets initialized. Some Nodes adds behaviors that need to happen before and just after its initialization. Is also common that the `nodeOnChange` method gets tied to an event in this section.

### clear
```ts
clear(): void
```
* Type: `function`
* Description: Describes what to do when the `Draft` gets cleared for whatever reason.

### getValue
```ts
getValue(): any
```
* Type: `function`
* Description: Returns the current value of the Node. The value is specific to each Node, but typically it holds a group of values.

:::tip
Usually the value is retrieved directly from the HTML because it is not saved in the JS.
:::

### setValue
```ts
setValue(value: any): void
```
* Type: `function`
* Description: Sets the value of the node.

:::tip
Usually the value is changed directly on the HTML and is not saved in the JS.
:::

## Draft
The Draft holds all the Nodes, and manages their lifecycles and the communication between the values and the session storage (this means saving, retrieving and deleting data from it). 

:::tip
The saved data on the session storage is generally the `value` of each `node` and the `.showDraft` and `.hasDraft` current values.
:::

### _available

* Type: `boolean | undefined`
* Default: `undefined`
* Description: Can be set manually to `true`or `false`, but by default tells whether we are visiting the adinsert or not.

### _draftedNodes
* Type: `{ [key: string]: Node }`
* Default: `{}`
* Description: Object that stores all the nodes of the current draft. The keys are the nodes IDs. 

### _draftStoreUri
* Type: `string`
* Default: `'yapoDraft.' + location.host + '/mai/form/'`
* Description: Contains the URI for the draft, which is usually used for saving, retrieveing and removing data from the session storage.

### available
```ts
available(value?: boolean): boolean | undefined
```
* Type: `function`
* Description: The method has three behaviors
    * When called with `undefined` or no params, returns the current value of the `_avaliable` variable.
    * When called with a `boolean`, overrides the `_available` variable with `value` and returns it.
    * When called with `null`, returns whether the current location is on the adinsert or not (based on the value of the `appl` global variable)

### draftMe
```ts
draftMe(node: Node): void
```
* Type: `function`
* Description: If the draft is available (checking with the `available` method), adds `node` to the `_draftedNodes` object, and calls `node.setValue` (if it is defined) with its corresponding data stored at session storage.

### reset
```ts
reset(soft?: boolean): ?
```
* Type: `function`
* Description: this method does four different things:
    * Loops all the nodes in `_draftedNodes` and: 
        * If `soft == true`, calls the `node.clear` method (if it is defined).
        * Removes its stored `value` with `removeValueFromStorage` (except if the key (AKA node ID) of the node is `userInfo`). 
    * Removes the draft flags with `removeDraftFlag` 
    * Refreshes the visibility of the draftbar with  `showDraft`. 
    * Returns a `xt_click` call.

### nodeOnChange
```ts
nodeOnChange(node: Node): void
```
* Type: `function`
* Description: If the draft is available (checking with the `available` method), saves the node value on the storage with `setValueToStorage` and refreshes the visibility of the draftbar with  `showDraft`. Its important to note that this method needs to be called manually by each `Node` when there is a `value` change.

### getValueFromStorage
```ts
getValueFromStorage(node: Node): any;
```
* Description: Returns the `value` of the input `node`stored in the session storage.

### setValueToStorage

```ts
setValueToStorage(node: Node): void;
```
* Description: Saves the `value` of the input `node` on the session storage. It only works if the node has implemented the method `node.getValue`. Also calls the method `setDraftFlag`.

###  removeValueFromStorage(node) 
```ts
removeValueFromStorage(node: Node): void;
```
* Description: Removes the `value` of the input `node` stored in the session storage.

### setDraftFlag
```ts
setDraftFlag(): void
```
* Type: `function`
* Description: Find the keys`_draftStoreUri + .showDraft` and `_draftStoreUri + .hasDraft` on the session storage and asigns the value `1` to them.

### removeDraftFlag
```ts
removeDraftFlag(): void
```
* Type: `function`
* Description: Find the keys `_draftStoreUri + .showDraft` and `_draftStoreUri + .hasDraft` on the session storage and removes them.

## AdParams Node

On the file at `msite/www/js/new_ai.cats.js`, we can find an insteresting `Node` called `AdParamsNode`. Also in the same file there are three custom implementations to existing HTML elements: `AdParamSelect`, `AdParamInput` and `AdParamCheckbox`. The Node looks like this:

```ts
type AdParams = {
    id: string;
    initDraft(): void;
    clear(): void;
    getValue(): any;
    setValue(value: any): void;
    init(): void;
    create(parentSelect ??, childs ??): void;
    reset(index: number): void;
    load(category ??): void;
    next(): void;
    selectTheOnlyValue(element: ?): void;
    createAdType(): void;
    push(element ??): void;
    labelKeyLookup(key: string): ??;
    getLabelFor(param ??): string;
    afterSelect(name: string): string | undefined;
    afterSelectCategory(): void;
    afterSelectType(): void;
    afterSelectEstateType(): void;
    setOptionalInputs(): void;
    focusUtil(event: any): void;
    afterSelectFootwearGender(): void;
```