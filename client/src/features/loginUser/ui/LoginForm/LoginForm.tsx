import { memo, useCallback } from 'react'
import { Input } from '@shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginUser } from '../../model/selectors/getLoginState/getLoginState'
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail'
import { AppDispatch } from '@app/providers/StoreProvider/config/store'

export const LoginForm = memo(() => {
    const dispatch = useDispatch<AppDispatch>()
    const { email, password, isLoading, error } = useSelector(getLoginUser)

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByEmail({ email, password }))
    }, [dispatch, email, password])

    if(error) {
        console.log(error)
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
                {isLoading && (
                    <div>Загрузка</div>
                )}
                <button
                    className={cls.form_submit_button}
                    onClick={onLoginClick}
                >
                    Войти
                </button>
            </div>
        </div>
    )
})
