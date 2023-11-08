import { memo, useCallback } from 'react'
import { Input } from '@shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '@features/loginUser/model/slice/loginSlice'
import { getLoginUser } from '../../model/selectors/getLoginState/getLoginState'

export const LoginForm = memo(() => {
    const dispatch = useDispatch()
    const { email, password } = useSelector(getLoginUser)
    
    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginCLick = () => {

    }

    return (
        <div className={cls.form}>
            <div className={cls.form_input}>
                <Input 
                    type='text' 
                    labelName={'email'} 
                    onChange={onChangeEmail}
                    value={email}
                />
                <br />
                <br />
                <Input
                    type='text'
                    labelName={'пароль'} 
                    onChange={onChangePassword}
                    value={password}
                />
            </div>
            <div className={cls.form_submit}>
                <button 
                    className={cls.form_submit_button}
                    onClick={onLoginCLick}
                >
                    Войти
                </button>
            </div>
        </div>
    )
})
