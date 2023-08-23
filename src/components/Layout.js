import HeaderAction from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <div style={{width: '100vw', height: '100vh', maxWidth: '100%'}}>
            <HeaderAction/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}