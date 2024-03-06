import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Spinner from '../Spinner/Spinner'
import ShowMoreTickets from '../ShowMoreTickets/ShowMoreTickets'
import Ticket from '../Ticket/Ticket'
import { tabsSorter, stopsFilter } from '../../functions'


import style from './TicketList.module.scss'

const TicketList = (props) => {
  const { renderedTickets, tickets, sorting, filters, isLoading } = props

  const spinner = isLoading && <Spinner />
  const displayData = stopsFilter(filters, tickets).sort(tabsSorter[sorting])
  const buttonMoreTickets = displayData.length > 5 && !isLoading && <ShowMoreTickets />
  const noTickets = !displayData.length && !isLoading && (
    <div className={style.ticketlist__alert}>Рейсов, подходящих под заданные фильтры, не найдено!</div>
  )
  const cards = displayData.length ? (
    <ul className={style.ticketlist__list}>
      {displayData.slice(0, renderedTickets).map((item) => (
        <Ticket data={item} key={`ticket_p_${item.price}_c_${item.carrier}_d_${item.duration}`} />
      ))}{' '}
      {buttonMoreTickets}
    </ul>
  ) : null
  return (
    <>
      {cards}
      {noTickets}
      {spinner}
    </>
  )
}

TicketList.propTypes = {
  renderedTickets: PropTypes.number,
  sorting: PropTypes.string,
  isLoading: PropTypes.bool,
  tickets: PropTypes.arrayOf(PropTypes.shape),
}
TicketList.defaultProps = {
  renderedTickets: 5,
  sorting: 'Самый быстрый',
  isLoading: true,
  tickets: [],
}

const mapStateToProps = (state) => ({
  renderedTickets: state.uiReducer.renderedTickets,
  sorting: state.uiReducer.sorting.filterName,
  filters: state.uiReducer.filters,
  isLoading: state.uiReducer.isLoading,
  tickets: state.dataReducer.tickets,
})

export default connect(mapStateToProps)(TicketList)