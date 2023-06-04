
import { defineComponent, ref } from "vue";
import TestButton from "../../components/TestButton";
export default defineComponent({
  name:"hello",
  setup(){
    const name = ref("测试hellopage title")
    const content = ref("")
    return ()=>{
      return <view>hello {name.value}<nut-button type="primary" onClick={()=>{
        name.value = Math.random().toFixed(3)+"button"
      }}>hello1111</nut-button>
      <TestButton><div>我是slot</div></TestButton>
      <TestButton>
      {{
        default:()=><div>多个-默认的slot<div style={{color:"red"}}>rend</div></div>,
        header:()=>"多个Header Slot"
      }}
      </TestButton>
      <view >名称{content.value}</view>
      <input v-model={content.value} style={{border:"1px solid red"}}></input>
      </view>
    }
  },
  
})