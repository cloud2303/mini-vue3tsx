import { defineComponent, onMounted } from "vue";

interface Props{
}

export default defineComponent<Props>({
  name:"TestButton",
  setup(props,{emit,slots}){
    
    onMounted(()=>{
      console.log(props)
      emit('text')
      
    })
    return ()=>{
      return <div>我是testButton component
    {slots.header?.()}
    {slots.default?.()}
        </div>
    }
  },
  
})