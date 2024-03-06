import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../store/actions'

import style from './SortTickets.module.scss'

const SortTickets = ({ filterName, sortChanged }) => {
  const cEvent = (ev) => {
    if (ev.currentTarget.textContent) {
      const sortingValue = ev.currentTarget.textContent
      sortChanged(sortingValue)
    }
  }

  return (
    <ul className={style.sort__list}>
      <button
        type="button"
        className={
          filterName === 'Самый дешевый'
            ? `${style['sort__list-item']} ${style['sort__list-item--active']}`
            : `${style['sort__list-item']}`
        }
        onClick={cEvent}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={
          filterName === 'Самый быстрый'
            ? `${style['sort__list-item']} ${style['sort__list-item--active']}`
            : `${style['sort__list-item']}`
        }
        onClick={cEvent}
      >
        Самый быстрый
      </button>
    </ul>
  )
}

SortTickets.propTypes = {
  filterName: PropTypes.string,
  sortChanged: PropTypes.func,
}

SortTickets.defaultProps = {
  filterName: 'Самый быстрый',
  sortChanged: () => {},
}

const mapStateToProps = (state) => ({
  filterName: state.uiReducer.sorting.filterName,
})

const mapDispatchToProps = (dispatch) => {
  const { sortChanged } = bindActionCreators(actions, dispatch)
  return { sortChanged }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortTickets)