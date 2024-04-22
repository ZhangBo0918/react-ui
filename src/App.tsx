import { IconAdd, IconEmail, Space, Portal } from './ui';
import './App.css'
import { ConfigProvider } from './ui/Space/ConfigProvider';
function App() {

  return (
    <div className='app'>
      <div>
        <IconAdd />
        <IconEmail spin={true} />
      </div>
      <ConfigProvider space={{ size: 40 }}>
        <Space
          className='container' 
          direction="horizontal"
          align="start" 
          wrap={true}
          // size={['large', 'small']}
        >
          <div className='box'>111</div>
          <div className='box'>222</div>
          <div className='box'>333</div>
        </Space>
      </ConfigProvider>
      <div className='portal'>
        <Portal attach={document.body}>
          <button  onClick={checkIsPop}>按钮</button>
        </Portal>
      </div>
    </div> 
  )
}

function checkIsPop(e: any) {
  console.log('冒泡了', e);
}

export default App
