import { LoginForm } from "@features/loginUser/ui/LoginForm/LoginForm"
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
