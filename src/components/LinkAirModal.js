import React from 'react'

const LinkAirModal = ({isOpen, children}) => {
      return <> 
      <div className={`modal ${!isOpen ? 'modal-close' : 'modal-open'}`}>
          {children}
      </div>
        </>
}



export default LinkAirModal