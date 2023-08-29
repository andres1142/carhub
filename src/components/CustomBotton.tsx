"use client"
import Image from 'next/image'
import { CustomButtonProps } from '../types'

function CustomBotton({ title, btnType, containerStyles, handleClick }: CustomButtonProps) {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType}
      onClick={handleClick}
    >
      <span className={'flex-1'}>
        {title}
      </span>
    </button>

  )
}

export default CustomBotton