import React, { useEffect } from 'react'
import env from 'env'
import System from '../../System'

export const TodoInput44 = (props) => {
  const [system, setSystem] = React.useState(undefined)
  function setLayout() {
    setSystem({
      url: `${env.BLOCK_ENV_URL_todoInput44}/remoteEntry.js`,
      scope: 'todoInput44',
      module: './todoInput44',
    })
  }
  useEffect(() => {
    setLayout()
  }, [])
  return <System system={system} {...props} />
}
