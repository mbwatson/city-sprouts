import PropTypes from 'prop-types'
import logo from '@images/logo.svg'

const SIZES = {
  small: 80,
  medium: 200,
  large: 400,
}

export const Brand = ({ size = 'medium' }) => {

  return (
    <img
      src={ logo }
      width={ SIZES?.[size] || SIZES.large }
    />
  )  
}

Brand.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
}
