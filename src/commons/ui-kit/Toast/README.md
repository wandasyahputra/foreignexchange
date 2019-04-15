# TOAST DOCUMENTATION

## API

| Property | Description | Type | Default | Required |
| -------- | ----------- | ---- | ------- | -------- |
| msg | message will be displayed when success or failed | `string` | - | `Yes` |
| type | defines the toast success or failed | `"success" or "failed"` | - | `Yes` |

## EXAMPLE

```javascript
this.state = {
  msg: null,
  type: null
}

toggleShowToast = (msg, type) => {
  this.setState({
    showToast: true,
    msg,
    type
  }, () => {
    setTimeout(() => {
      this.setState({
        showToast: false,
        msg: null,
        type: null,
      })
    }, 3000)
  })
}

handleOnChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

<Toast type="success" msg="Success! Users are have been added" />
```