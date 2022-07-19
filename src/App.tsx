import { RecoilRoot } from 'recoil'

import Meta from '@/components/meta'
import BSLRouter from '@/routes/index'

const App = () => {
  return (
    <RecoilRoot>
      <Meta />
      <BSLRouter />
    </RecoilRoot>
  )
}
export default App
