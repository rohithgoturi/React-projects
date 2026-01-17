import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className=' flex flex-wrap'>
      <Card user='Ram Kumar' img='https://i.pinimg.com/736x/7c/25/74/7c25747aa214fa6eedec7cd13bf06a64.jpg' salary="21 LPA"/>
      
      <Card user='Shyam Singh' img='https://i.pinimg.com/736x/db/c5/82/dbc582cb4a5ef9df9fc7e82e283947b2.jpg' salary="18 LPA"/>

      <Card user='Mohan Verma' img='https://i.pinimg.com/1200x/62/16/9f/62169fb4f961f71ff689f1d6a215dc6f.jpg' salary="25 LPA"/>

      <Card user='Sohan Gupta' img='https://i.pinimg.com/1200x/23/c3/6b/23c36b997f4facf89386e9674692b445.jpg' salary="22 LPA"/>

      
    </div>
  )
}

export default App