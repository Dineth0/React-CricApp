

interface User {
    id:string
    name: string
    email:string
}

interface AuthContextType{
    isAuthenticated:boolean
    user: User | null
    token: string | null
    login: (email: string, password:string)=> Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}