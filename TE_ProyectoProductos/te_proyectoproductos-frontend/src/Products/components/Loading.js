import React from 'react'
import { Loader } from 'react-bulma-components'

const Loading  = () => {
    return (
        <div className="columns is-centered">
        <Loader style={{
            width: 75,
            height: 75
        }}/>
        </div>
    )
}

export default Loading