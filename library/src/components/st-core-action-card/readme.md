# st-core-action-card



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                     | Default |
| -------- | --------- | ----------- | ------------------------ | ------- |
| `action` | --        |             | `SubCategoriActionModel` | `{}`    |


## Events

| Event            | Description | Type                                    |
| ---------------- | ----------- | --------------------------------------- |
| `actionAccepted` |             | `CustomEvent<ActionGoalSuggestedModel>` |
| `actionInfo`     |             | `CustomEvent<string>`                   |
| `actionRejected` |             | `CustomEvent<ActionGoalSuggestedModel>` |
| `editAction`     |             | `CustomEvent<SubCategoriActionModel>`   |


## Dependencies

### Used by

 - [st-core-board](../st-core-board)

### Graph
```mermaid
graph TD;
  st-core-board --> st-core-action-card
  style st-core-action-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
