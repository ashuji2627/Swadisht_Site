import React from 'react'

export default function Message({variant,children}) {
  return (
    <div className={'alert alert-$ {variant}'}>
      {children} {/* onent ke andar children hota hai,default*/}
    </div>
  )
}
//we have make this page because of some error will show,
//then this message we will show on the error to the user
