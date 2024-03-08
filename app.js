import React from "react"
import ReactDOM from "react-dom/client"
const heading=React.createElement("h1",{id:'heading'},"hello world!");

const root=ReactDOM.createRoot(document.getElementById('root'));
const parent=React.createElement('div',{id:'parent'},
            [React.createElement('h1',{id:'child'},'hello this is child'),React.createElement('h1',{id:'child2'},'hello from child 2 ')]);
root.render(parent);