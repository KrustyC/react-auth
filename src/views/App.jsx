import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { authOperations } from '../redux/ducks/auth'

class App extends React.Component {
  componentWillMount() {
    this.props.login({ data: 'prova' })
  }

  render() {
    const { user } = this.props
    console.log(user)
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Welcome to the App</h2>
          {!_.isNull(user) && <p> {user.firstName} {user.lastName} </p>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

const mapDispatchToProps = {
  login: authOperations.login
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
