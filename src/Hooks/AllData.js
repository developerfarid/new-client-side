
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import FirebaseInit from '../firebaseFile/FirebaseInit';

FirebaseInit()

const AllData = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [product, setProduct] = useState([])
    const [productAll, setProductAll] = useState([])
 

    const [admin, setAdmin] = useState([])
const [loding, setLoding]= useState(true)
    const googleProvider = new GoogleAuthProvider();
    const [message, setMessage] = useState("")
    const auth = getAuth();
    const googleSign = (location,history) => {
        setLoding(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
              
                const user = result.user;
                
                setUser(user)
               
                saveUser(user?.email, user?.displayName, "PUT")
            
                  successAlart()
                setError("")
                const destination = location?.state?.from || '/';
                history.replace(destination);
              }).catch((error) => {
                  const errorMessage = error.message;
                  setError(errorMessage)
              }).finally(() => setLoding(false))
    }

    useEffect(() => {
        
        fetch(`http://localhost:5000/users/${user.email}`)
          .then(res => res.json())
            .then(data => setAdmin(data[0]))
        
        
      }, [user.email])
    const sentResetPassByEmail = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
            setError("")
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)

        });
    }
    // username email and password register
    const createUser = (email, password,displayName,location, history) => {
            setLoding(true)
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const destination = location?.state?.from || '/';
                history.replace(destination);
                    updateName(displayName)
                    const user = {
                        email, displayName 
                    }
                    setUser(user)
                    saveUser(email, displayName, "POST")
                    registerAlart()
                    setError("")

                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
                }).finally(() => setLoding(false))
        
    }
    const saveUser = (email, displayName, type) => {
        const user = {
         email, displayName
        }
        fetch("http://localhost:5000/users", {
            method: type,
            "headers": {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
            
        })
        .then()
 }
    const handleSubmit = (email, password, location, history) => {
        setLoding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = userCredential.user;
                setUser(user)
                setError("")
                successAlart()
                setMessage("Congratulations you have Successfully Login")

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                unSuccessAlart()
                setError(errorMessage)
            }).finally(() => setLoding(false))
    }

    // username email and password register
    const logOut = () => {
        setLoding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            logOutAlart()
            setError("")

        }).catch((error) => {
            setError(error.errorMessage)
            unSuccessAlart()
        }).finally(() => setLoding(false))
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoding(false)
        })
        
    }, [user.email])

    const successAlart = () => {
            Swal.fire(
                'Congratulations!',
                'You have successfully Login',
                'success'
            )
        }
        const logOutAlart = () => {
            Swal.fire(
                'Congratulations!',
                'You have successfully LogOut',
                'success'
            )
        }
        const registerAlart = () => {
            Swal.fire(
                'Congratulations!',
                'You have successfully Register',
                'success'
            )
        }
        const unSuccessAlart = () => {
            Swal.fire(
                'Opps!',
                'Something Worng',
                'error'
            )
        }

        const updateName = (displayName) => {
            updateProfile(auth.currentUser, {
                displayName: displayName,
            }).then(() => {
                setError("")
            }).catch((error) => {
                setError(error.errorMessage)
            });
        }

        useEffect(() => {
            fetch("http://localhost:5000/furnitures").then(res => res.json()).then(data => setProduct(data))
        }, [])
        useEffect(() => {
            fetch("http://localhost:5000/furnituresAll").then(res => res.json()).then(data => setProductAll(data))
        }, [productAll])
        
       

        return {
            product, successAlart, logOutAlart, unSuccessAlart, logOut,message,loding,error,user,registerAlart,handleSubmit,createUser,googleSign,sentResetPassByEmail ,productAll,saveUser,admin,setProductAll
        }
    };
    export default AllData;