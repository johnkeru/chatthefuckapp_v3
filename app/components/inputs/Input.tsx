import React from 'react'
import clsx from 'clsx'
import {UseFormRegister, FieldErrors, FieldValues} from 'react-hook-form'

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean
}


const Input:React.FC<InputProps> = ({
    id,
    errors,
    label,
    register,
    disabled,
    required,
    type
}) => {
  return (
    <div>
        <label 
            htmlFor={id}
            className='
                block
                text-sm
                font-medium
                leading-6
                text-gray-900
            '
        >
            {label}
        </label>

        <div className='mt-2'>
            <input  
                id={id}
                type={type}
                autoComplete={id}
                placeholder={label}
                disabled={disabled}
                {...register(id, {required})}
                className={
                    clsx(`
                        form-input
                        block
                        w-full
                        rounded-md
                        border-0
                        py-1.5
                        text-gray-900
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-gray-300
                        placeholder:text-gray-400
                        focus:ring-2
                        focus:ring-inset
                        ${!errors[id] ? 'focus:ring-sky-600' : 'focus:ring-rose-500'}
                        sm:text-sm
                        sm:leading-6`,
                        disabled && 'opacity-50 cursor-default'
                    )
                }
            />
        </div>
    </div>
  )
}

export default Input