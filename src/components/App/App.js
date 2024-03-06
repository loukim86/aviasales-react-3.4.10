import React from 'react'

import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import SortTickets from '../SortTickets/SortTickets'
import TicketList from '../TicketList/TicketList'

import style from './App.module.scss'

const App = () => (
  <div className={style.app}>
    <Header />
    <div className={style.app__container}>
      <Filter />
      <div className={style['app__container-content']}>
        <SortTickets />
        <TicketList />
      </div>
    </div>
  </div>
)

export default App