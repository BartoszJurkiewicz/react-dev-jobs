import { connect } from 'react-redux'
import Home from '../views/Home'

const mapStateToProps = state => ({
  jobs: state.jobs
})

export default connect(mapStateToProps)(Home)