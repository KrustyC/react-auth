import _ from 'lodash'
import React from 'react'
import { graphql } from 'react-apollo'
import { Loader } from 'UiKit/elements'
import { popularRepositoryQuery } from '../../../services/ApiSingleton2'

const RepostioryList = ({ data: { loading, error, search } }) => {
  if (loading) {
    return <Loader size="20px" duration="1s" />
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <ul>
      { _.map(search.edges, row => (
        <li key={`${row.node.owner.login}-${row.node.name}`}>
          {row.node.owner.login} / {row.node.name}: {' '}
          <strong>
            {row.node.stargazers.totalCount}
          </strong>
        </li>
      ))}
    </ul>
  )
}

export default graphql(popularRepositoryQuery)(RepostioryList)
