import { useAuth } from "../context/auth/useAuth"


export function ProtectedLayout({ children }: { children: JSX.Element }){
    const auth = useAuth();

    if(!auth.login){
        return <h1>Access denied!</h1>
    };

    return children;
}