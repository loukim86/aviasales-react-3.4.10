import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../store/actions'

import style from './ShowMoreTickets.module.scss'

const ShowMoreTickets = (props) => {
    const { getMoreTickets } = props
    return (
        <button className={style.button} type="button" onClick={getMoreTickets}>
          Показать еще 5 билетов!
        </button>
    )
}

ShowMoreTickets.propTypes = {
  getMoreTickets: PropTypes.func,
}

ShowMoreTickets.defaultProps = {
  getMoreTickets: () => {},
}

const mapDispatchToProps = (dispatch) => {
  const { getMoreTickets } = bindActionCreators(actions, dispatch)
  return { getMoreTickets }
}

export default connect(null, mapDispatchToProps)(ShowMoreTickets)