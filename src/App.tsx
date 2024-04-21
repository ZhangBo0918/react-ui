import { IconAdd, IconEmail, Space } from './ui';
import './App.css'
import { ConfigProvider } from './ui/Space/ConfigProvider';
function App() {

  return (
    <>
      <IconAdd />
      <IconEmail spin={true} />
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
    </> 
  )
}

export default App
