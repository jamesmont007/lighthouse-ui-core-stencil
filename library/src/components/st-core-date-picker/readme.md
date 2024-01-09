# st-core-date-picker



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default |
| ------------ | ------------- | ----------- | --------- | ------- |
| `classDate`  | `class-date`  |             | `string`  | `''`    |
| `isDisabled` | `is-disabled` |             | `boolean` | `false` |
| `max`        | `max`         |             | `string`  | `''`    |
| `min`        | `min`         |             | `string`  | `''`    |
| `value`      | `value`       |             | `string`  | `''`    |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `changeDate` |             | `CustomEvent<any>` |


## Methods

### `cleanInput() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [st-core-finished-growth-plan](../st-core-finished-growth-plan)
 - [st-core-goal](../st-core-goal)
 - [st-core-skill-evaluation](../skill-evaluation)

### Graph
```mermaid
graph TD;
  st-core-commitment-component --> st-core-date-picker
  st-core-finished-growth-plan --> st-core-date-picker
  st-core-goal --> st-core-date-picker
  st-core-goal-component --> st-core-date-picker
  st-core-skill-evaluation --> st-core-date-picker
  style st-core-date-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
