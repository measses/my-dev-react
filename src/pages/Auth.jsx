import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null); // Kullanıcı bilgilerini saklamak için state

  // Sayfa yüklendiğinde Firebase'den kullanıcı bilgilerini al
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Kullanıcı giriş yapmışsa, kullanıcı bilgilerini state'e sakla
        setUser(authUser);
      } else {
        // Kullanıcı çıkış yapmışsa, kullanıcı bilgilerini temizle
        setUser(null);
      }
    });

    return () => {
      // Temizleme işlevi
      unsubscribe();
    };
  }, []);

  const buttonText = signUp ? "Kayıt Ol" : "Giriş Yap";
  const googleButtonText = signUp ? "Kayıt Ol" : "Google ile Giriş Yap";
  const githubButtonText = signUp ? "Kayıt Ol" : "Github ile Giriş Yap";

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = async () => {
    try {
      if (signUp) {
        const data = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const authUser = data.user;
        if (authUser) {
          // Kullanıcı bilgilerini state'e sakla
          setUser(authUser);

          // Diğer işlemleri yapabilirsiniz

          toast.success("Kayıt başarıyla tamamlandı!", { autoClose: 2500 });
          setTimeout(() => {
            window.location.href = "/";
          }, 2500);
        }
      } else {
        // Giriş işlemini aynı şekilde ele alabilirsiniz
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const authUser = data.user;
      if (authUser) {
        // Kullanıcı bilgilerini state'e sakla
        setUser(authUser);

        // Diğer işlemleri yapabilirsiniz

        toast.success("Giriş başarılı!");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (error) {
      const credential = GoogleAuthProvider.credentialFromError(error);
      toast.error(credential);
    }
  };

  const githubLogin = async () => {
    try {
      const data = await signInWithPopup(auth, githubProvider);
      const authUser = data.user;
      if (authUser) {
        // Kullanıcı bilgilerini state'e sakla
        setUser(authUser);

        // Diğer işlemleri yapabilirsiniz

        toast.success("Giriş başarılı!");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      const credential = GithubAuthProvider.credentialFromError(error);
      toast.error(credential);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {signUp ? "Kayıt Ol" : "Giriş Yap"}
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              name="email"
              value={authData.email}
              onChange={handleChange}
              type="email"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              name="password"
              value={authData.password}
              onChange={handleChange}
              type="password"
              id="password"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={googleLogin}
              className="flex items-center bg-white text-gray-700 rounded-md py-2 px-4 border border-gray-300 hover.bg-gray-100 focus:outline-none focus:ring focus.ring-gray-200"
            >
              <FcGoogle size={25} className="mr-2" />
              {`${signUp ? "Google ile" : ""} ${googleButtonText}`}
            </button>
            <button
              onClick={githubLogin}
              className="flex items-center bg-white text-gray-700 rounded-md py-2 px-4 border border-gray-300 hover.bg-gray-100 focus:outline-none focus:ring focus.ring-gray-200"
            >
              <BsGithub size={25} className="mr-2" />
              {`${signUp ? "Github ile" : ""} ${githubButtonText}`}
            </button>
          </div>

          <p onClick={() => setSignUp(!signUp)} className="mt-4 text-gray-600">
            {signUp
              ? "Daha önce kayıt oldunuz mu?"
              : "Kayıt olmak istiyor musunuz?"}{" "}
            <a href="#" className="text-blue-500">
              {signUp ? "Giriş yap" : "Kayıt ol"}
            </a>
          </p>
        </div>
        <div className="mt-6 border-t border-gray-300 pt-6">
          <button
            onClick={authFunc}
            type="submit"
            className="bg-blue-500 w-full text-white rounded-md py-2 px-4 hover.bg-blue-600 focus:outline-none focus.ring focus.ring-blue-300"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
