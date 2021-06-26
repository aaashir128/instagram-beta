// import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import { Button, Input } from "@material-ui/core";
// import { auth } from "../Config/firebase";

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: "absolute",
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function SimpleModal() {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = useState(getModalStyle);
//   const [open, setOpen] = useState(false);
//   const [openSignUp, setOpenSignUp] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         console.log(authUser);
//         setUser(authUser);

//         if (authUser.displayName) {
//         } else {
//           return authUser.updateProfile({
//             displayName: username,
//           });
//         }
//       } else {
//         setUser(null);
//       }
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, [user, username]);

//   const signIn = (e) => {
//     e.preventDefault();

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then()
//       .catch((error) => {
//         console.log(error);
//         alert(error.message);
//       });
//     setOpen(false);
//   };

//   const signUp = (e) => {
//     e.preventDefault();

//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then()
//       .catch((error) => {
//         console.log(error);
//         alert(error.message);
//       });
//     setOpenSignUp(false);
//   };

//   return (
//     <div>
//       {user ? (
//         <Button type="button" onClick={() => auth.signOut()}>
//           Log out
//         </Button>
//       ) : (
//         <div>
//           <Button type="button" onClick={() => setOpen(true)}>
//             Sign In
//           </Button>
//           <Button type="button" onClick={() => setOpenSignUp(true)}>
//             Sign Up
//           </Button>
//         </div>
//       )}

//       {/* Login form  */}

//       <Modal open={open} onClose={() => setOpen(false)}>
//         <div style={modalStyle} className={classes.paper}>
//           <center>
//             <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
//           </center>
//           <form>
//             <Input
//               type="email"
//               placeholder="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               type="password"
//               placeholder="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button onClick={signIn}>Sign In</Button>
//           </form>
//         </div>
//       </Modal>

//       {/* Sign up form  */}
//       <Modal open={openSignUp} onClose={() => setOpenSignUp(false)}>
//         <div style={modalStyle} className={classes.paper}>
//           <center>
//             <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
//           </center>
//           <form>
//             <Input
//               type="text"
//               placeholder="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <Input
//               type="email"
//               placeholder="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               type="password"
//               placeholder="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button onClick={signUp}>Sign Up</Button>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// }
