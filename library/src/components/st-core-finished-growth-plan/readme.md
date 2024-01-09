# st-core-finished-growth-plan



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description | Type        | Default     |
| -------------- | --------- | ----------- | ----------- | ----------- |
| `finishedPlan` | --        |             | `PlanModel` | `undefined` |


## Events

| Event            | Description | Type                                                                                |
| ---------------- | ----------- | ----------------------------------------------------------------------------------- |
| `filters`        |             | `CustomEvent<{ goal: string; state: string; startDate: string; endDate: string; }>` |
| `showActionInfo` |             | `CustomEvent<string>`                                                               |
| `showGoalInfo`   |             | `CustomEvent<string>`                                                               |
| `sort`           |             | `CustomEvent<SortEvent>`                                                            |


## Dependencies

### Depends on

- [st-core-sort](../st-core-sort)
- [st-core-date-picker](../st-core-date-picker)

### Graph
```mermaid
graph TD;
  st-core-finished-growth-plan --> st-core-sort
  st-core-finished-growth-plan --> st-core-date-picker
  style st-core-finished-growth-plan fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
