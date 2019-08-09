import {Input, Button} from 'antd'
import {connect} from 'dva'

const body = ({props}) => {
  console.log(JSON.stringify(props))
  return (
    <div>
      <Input placeholder="a" value = {props}></Input>
      <Input placeholder="b" value = {props}></Input>
      <Button>i++</Button>
    </div>
  )
}

export default connect(({props})=>({props}))(body)
