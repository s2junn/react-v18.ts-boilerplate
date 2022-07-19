import { RecoilRoot } from 'recoil'

import Meta from '@/components/meta'
import BSLRouter from '@/routes/index'
import GlobalStyles from '@/assets/styles/global'

const App = () => {
  return (
    <>
      <Meta />
      <GlobalStyles />
      <RecoilRoot>
        <BSLRouter />
      </RecoilRoot>
    </>
  )
}
export default App
