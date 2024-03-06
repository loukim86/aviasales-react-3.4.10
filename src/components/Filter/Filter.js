import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../store/actions'
import filterOptions from '../../functions'
import style from './Filter.module.scss'

const Filter = (props) => {
  const { filtersChanged, filters } = props
  const checkBox = []

  const checkBoxEvent = (e) => {
    if (e.target.labels !== null) {
      if (e.target.labels[0].textContent !== null) {
        const newFilters = filterOptions(filters, e.target.checked, e.target.labels[0].textContent)
        filtersChanged(newFilters)
      }
    }
  }

  for (const key in filters) {
    if (typeof filters[key] === 'boolean') {
      const specialKey = typeof key[0] === 'number' ? key[0] : key.charCodeAt(0)
      checkBox.push(
        <label htmlFor={`checkBox${key}`} key={specialKey} className={style['filter__list-item']}>
          <input
            id={`checkBox${key}`}
            className={style['filter__list-input']}
            type="checkbox"
            checked={filters[key]}
            onChange={checkBoxEvent}
          />
          <span className={style.filter__checkbox} />
          {key}
        </label>
      )
    }
  }

  return (
    <div className={style.filter}>
      <p className={style.filter__transfers}>Количество пересадок</p>
      <ul className={style.filter__list}>{checkBox}</ul>
    </div>
  )
}

Filter.propTypes = {
  filtersChanged: PropTypes.func,
}

Filter.defaultProps = {
  filtersChanged: () => {},
}

const mapStateToProps = (state) => ({
  filters: state.uiReducer.filters,
})

const mapDispatchToProps = (dispatch) => {
  const { filtersChanged } = bindActionCreators(actions, dispatch)
  return { filtersChanged }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)