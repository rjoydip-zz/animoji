import {h, Color} from 'ink'
import PropTypes from 'prop-types'

const PoweredBy = ({url}) => (
    h(
        <div>
            Powered By
            <Color green>{url}</Color>
        </div>
    )
)

PoweredBy.propTypes = {
    url: PropTypes.any.isRequired
}

export default PoweredBy
