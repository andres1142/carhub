"use client"
import Image from 'next/image'
import { CustomButtonProps } from '../types'
import { text } from 'stream/consumers'

function CustomBotton({ title, btnType, textStyles, rightIcon, containerStyles, handleClick }: CustomButtonProps) {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className={'relative w-6 h-6'}>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className={'object-contain'}
          />
        </div>
      )}
    </button>

  )
}

export default CustomBotton