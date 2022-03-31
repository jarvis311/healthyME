import React, { useEffect, useState } from 'react'

export const Logout = () => {
    const [email, setemail] = useState('')


    useEffect(() => {

        setemail(localStorage.getItem('abcd'))

    }, [])
    const logout = () => {
        setemail(localStorage.clear(email))
        window.location.reload();
        
      }
      const role = localStorage.getItem('Role');
      
    return (
        <div className="Showusername">
            {
                
                email ? <>  <span>Welcome {email.split('@', [1])} </span> <br /> <p className='RoleClass'><span>your Role is {role} </span></p>  <div className='logout'><button onClick={logout} className="btn btn-primary"><i class="fas fa-sign-out-alt"></i>Logout</button></div>  </>: <span>You are not login</span>
            }
        </div>
    )
}
