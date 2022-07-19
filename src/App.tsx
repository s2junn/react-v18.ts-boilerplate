import { RecoilRoot } from 'recoil'

import BSLRouter from '@/routes/index'
import GlobalStyles from '@/assets/styles/global'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <BSLRouter></BSLRouter>
      </RecoilRoot>
    </>
  )
}
export default App
