import * as React from 'react'

interface ICopyrightProps {}

const Copyright: React.FC<ICopyrightProps> = (props) => {
  return (
    <div className="text-center text-secondary py-10 border-t text-sm">
      Copyright &copy; Carland 2023. All rights reserved.
    </div>
  )
}

export default Copyright
