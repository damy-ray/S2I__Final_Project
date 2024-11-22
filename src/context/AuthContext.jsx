import { createContext, useEffect, useState } from "react";
import { userObserver } from "auth/Firebase";
import Loader from "Components/core/Loader";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userObserver((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  console.log(currentUser)

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;