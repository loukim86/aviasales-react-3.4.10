import React from 'react'
import PropTypes from 'prop-types'

import { getTimeFromMins, formatPrice, formatStops, getFlyTime } from '../../functions'

import style from './Ticket.module.scss'

const Ticket = (props) => {
  const { data } = props
  return (
    <li className={style.ticket}>
      <div className={style.ticket__header}>
        <span className={style['ticket__header-price']}>{formatPrice(data.price)} Р</span>
        <span className={style['ticket__header-logo']}>
          <img src={`//pics.avs.io/99/36/${data.carrier}.png`} width="110px" height="36px" alt="avia-company-logo" />
        </span>
      </div>
      <ul className={style.ticket__list}>
        <li className={style['ticket__list-item']}>
          <span className={style['ticket__list-description']}>
            {data.segments[0].origin} – {data.segments[0].destination}
          </span>
          <span className={style['ticket__list-text']}>
            {getFlyTime(data.segments[0].date, data.segments[0].duration)}
          </span>
        </li>
        <li className={style['ticket__list-item']}>
          <span className={style['ticket__list-description']}>В пути</span>
          <span className={style['ticket__list-text']}>{getTimeFromMins(data.segments[0].duration)}</span>
        </li>
        <li className={style['ticket__list-item']}>
          <span className={style['ticket__list-description']}>{formatStops(data.segments[0].stops.length)}</span>
          <span className={style['ticket__list-text']}>{data.segments[0].stops.join(', ')}</span>
        </li>
      </ul>
      <ul className={style.ticket__list}>
        <li className={style['ticket__list-item']}>
          <span className={style['ticket__list-description']}>
            {data.segments[1].origin} – {data.segments[1].destination}
          </span>
          <span className={style['ticket__list-text']}>
            {getFlyTime(data.segments[1].date, data.segments[1].duration)}
          </span>
        </li>
        <li className={style['ticket__list-item']}>
          <span className={style['ticket__list-description']}>В пути</span>
          <span className={style['ticket__list-text']}>{getTimeFromMins(data.segments[1].duration)}</span>
        </li>
        <li className={style['ticket__list-item']}>
          <span className={style['ticket__list-description']}>{formatStops(data.segments[1].stops.length)}</span>
          <span className={style['ticket__list-text']}>{data.segments[1].stops.join(', ')}</span>
        </li>
      </ul>
    </li>
  )
} 

Ticket.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape),
}

Ticket.defaultProps = {
  data: {},
}

export default Ticket