import React from 'react'
import TemplateEditor from '../components/TemplateEditor'
import { useParams } from 'react-router-dom'

const Create = () => {
    const {id} =useParams()

  return (
      <div>
          <TemplateEditor id={ id} />
    </div>
  )
}

export default Create