# FOREIGN RATE CARD DOCUMENTATION

## API

| Property | Description | Type | Default | Required |
| -------- | ----------- | ---- | ------- | -------- |
| base | set selected currency  | `object` | - | - |
| baseChange | set the handler to handle base change dropdown | `function` | - | Yes |
| value | set default value of input | `number` | `0` | - |
| valueChange | set the handler to handle input value change | `function` | - | Yes |
| currencyList | array of available currency | `array` | - | - |

## EXAMPLE

```javascript
const CURRENCY_LIST = [
  {code: 'USD', name: 'United State Dollar'},
  {code: 'IDR', name: 'Indonesia Rupiah'}
]

<ForeignRateCard
  baseCode='USD'
  currency={{[{code: 'CAD', name: 'Canadian Dollar'}], code: 'CAD', rate: '1.33'}}
  value={value}
  deleteExchangeRate={this.deleteExchange(item)}
/>
```
