# CURRENCY INPUT DOCUMENTATION

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

<CurrencyInput
  base={CURRENCY_LIST[0]}
  currencyList={CURRENCY_LIST}
  baseChange={this.baseChange}
  value='10'
  valueChange={this.valueChange}
/>
```
