import { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    labelName?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        labelName,
        type = 'text',
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        // <div className={cls.input}>
        //     <input
        //         type={type}
        //         value={value}
        //         onChange={onChangeHandler}
        //     />
        // </div>
        <div className={cls.input_container}>
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                name="text"
            />
            <label className={cls.label} htmlFor='input'>{labelName}</label>
            <div className={cls.topline}></div>
            <div className={cls.underline}></div>
        </div>
    )
})
