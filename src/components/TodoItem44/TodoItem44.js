import React, { useEffect } from 'react'
import env from 'env'
import System from '../../System'

export const TodoItem44 = (props) => {
  console.log(props, 'gh')
  const [system, setSystem] = React.useState(undefined)
  function setLayout() {
    setSystem({
      url: `${env.BLOCK_ENV_URL_todoItem44}/remoteEntry.js`,
      scope: 'todoItem44',
      module: './todoItem44',
    })
  }
  useEffect(() => {
    setLayout()
  }, [])
  return <System system={system} {...props} />
}
