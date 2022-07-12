import { RecoilRoot } from 'recoil'

import BSLRouter from '@/routes/index'

const App = () => {
  return (
    <RecoilRoot>
      <div>BSL USER FRONT APP</div>
      <BSLRouter></BSLRouter>
    </RecoilRoot>
  )
}
export default App
