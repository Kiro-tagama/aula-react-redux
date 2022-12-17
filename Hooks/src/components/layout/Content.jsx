import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../view/examples/Home'
import NotFound from '../../view/examples/NotFound'
import UseState from '../../view/examples/UseState'
import UseEffect from '../../view/examples/UseEffect'
import UseRef from '../../view/examples/UseRef'
import UseCallback from '../../view/examples/UseCallback'
import UseMemo from '../../view/examples/UseMemo'
import UseContext from '../../view/examples/UseContext'
import UseReducer from '../../view/examples/UseReducer'
import UseCustom from '../../view/examples/UseCustom'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/useRef" element={<UseRef />} />
            <Route path="/useCallback" element={<UseCallback />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/useContext" element={<UseContext />} />
            <Route path="/useReducer" element={<UseReducer />} />
            <Route path="/useCustom" element={<UseCustom />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content