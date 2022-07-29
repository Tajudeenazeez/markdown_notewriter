import React from 'react'
import './DeleteDoc.scss'

const DeleteDoc = () => {
  return (
    <div>
        <div className='modal'>
          <h2 className='modal--title'>Delete this document</h2>
          <p>Are you sure you want to delete docname document
            and its content?
          </p>
          <p>This action can not be reversed</p>
        </div>
       
    </div>
  )
}

export default DeleteDoc