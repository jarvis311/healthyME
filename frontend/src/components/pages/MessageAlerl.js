import React from 'react'

export const MessageAlerl = (props) => {
    
    return (
        
          props.alert &&  <div class="alert alert-warning alert-dismissible fade show" role="alert">
                 {props.alert.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    )
}
