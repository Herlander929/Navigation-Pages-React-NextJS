import React from 'react'
import './Content.css'
import {Routes, Switch, Route} from "react-router-dom"
import About from '../../vews/examples/About'
import Home from './../../vews/examples/Home';
import Param from '../../vews/examples/Param';
import NotFound from '../../vews/examples/NotFound';

const Content = props => (
<main className='Content'>
<Routes>
    <Route path="/about" element={<About />}/>
    <Route path="/param/:id" element={<Param />}/>
    <Route exact path="/" element={<Home />}/>
    <Route path="*" element={<NotFound />}/>
</Routes>
</main>
)

export default Content
