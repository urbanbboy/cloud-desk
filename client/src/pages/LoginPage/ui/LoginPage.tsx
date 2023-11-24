import { LoginForm } from '@features/loginUser'
import cls from './LoginPage.module.scss'

export const LoginPage = () => {
    return (
        <div>
            <div className={cls.loginModal}>
                <LoginForm />
            </div>
        </div>
    )
}
