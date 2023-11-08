import cls from './Navbar.module.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <div className={cls.navbar}>
            <div className={cls.container}>
                <div className={cls.navbar_logo}>icon</div>
                <h1 className={cls.navbar_name}>
                    Cloud Storage
                </h1>
                <div className={cls.navbar_links}>
                    <Link className={cls.link} to={'/login'}>Войти</Link>
                    <Link className={cls.link} to={'/register'}>Зарегистрироваться</Link>
                </div>
            </div>
        </div>

    )
}
