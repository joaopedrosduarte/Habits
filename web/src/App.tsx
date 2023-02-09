import { AuthProvider } from './context/auth';
import { Router } from './Router';
import "./styles/global.css";

export function App() {

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}
