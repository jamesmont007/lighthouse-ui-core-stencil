# core-paginator



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type     | Default     |
| ------------ | ------------- | ----------- | -------- | ----------- |
| `page`       | `page`        |             | `number` | `1`         |
| `pageSize`   | `page-size`   |             | `number` | `5`         |
| `totalItems` | `total-items` |             | `number` | `undefined` |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `changePage`     |             | `CustomEvent<any>` |
| `changePageSize` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [st-core-select-template](../select-template)

### Depends on

- [st-core-selector](../core-selector)

### Graph
```mermaid
graph TD;
  st-core-paginator --> st-core-selector
  st-core-select-template --> st-core-paginator
  style st-core-paginator fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
