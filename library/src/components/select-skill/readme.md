# Select Skill

## Use

```xml
<st-core-select-skill name="John Doe" data={dataArray} onSendSkillId={e => this.myFunc(e)}>
</st-core-select-skill>
```

@data structure:

```js
const dataArray = [
  {
    skillId: 'string',
    displayName: 'string',
  },
];
```

## non-JSX

```html
<st-core-select-skill name="John Doe"></st-core-select-skill>
<script>
  const myComp = document.querySelector('st-core-select-skill');
  myComp.data = dataArray;
  myComp.addEventListener('sendSkillId', (e) => {
    console.log(e.detail);
    // ...
  });
</script>
```

## React

To pass object/array data and listen events in React:

```jsx
el = useRef();

useEffect(() => {
  el.current.data = dataArray;
  el.current.addEventListener('sendSkillId', (e) => {
    console.log(e.detail);
    // ...
  });
});

// render
<st-core-select-skill ref={el} name="John Doe" />;
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type          | Default |
| -------- | --------- | ----------- | ------------- | ------- |
| `data`   | --        |             | `SkillItem[]` | `[]`    |
| `name`   | `name`    |             | `string`      | `''`    |


## Events

| Event         | Description | Type                  |
| ------------- | ----------- | --------------------- |
| `sendSearch`  |             | `CustomEvent<string>` |
| `sendSkillId` |             | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
