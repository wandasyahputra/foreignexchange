# NEW EXCHANGE CURRENCY DOCUMENTATION

## API

| Property | Description | Type | Default | Required |
| -------- | ----------- | ---- | ------- | -------- |
| renderOption | set option is rendered or not| `bool` | false | - |
| changeRenderOption | turn option rendered or not | `function` | - | Yes |
| restExchangeCurrency | list of currency to add | `array` | [] | - |
| addExchangeCurrency | set the handler to handle input new currency | `function` | - | Yes |

## EXAMPLE

```javascript
const CURRENCY_LIST = [
  {code: 'USD', name: 'United State Dollar'},
  {code: 'IDR', name: 'Indonesia Rupiah'}
]

<NewExchangeCurrency
  renderOption={false}
  changeRenderOption={this.changeRenderOption}
  restExchangeCurrency={CURRENCY_LIST}
  addExchangeCurrency={this.addExchangeCurrency}
/>
```
