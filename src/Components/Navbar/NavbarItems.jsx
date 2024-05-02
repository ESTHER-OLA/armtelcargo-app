// import { useState } from "react";
// import { Link } from "react-scroll";
// import { FaTimes, FaShoppingCart, FaBell } from "react-icons/fa";
// import { CiMenuFries } from "react-icons/ci";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   return (
//     <nav>
//       <div className="h-10vh flex justify-between items-center z-50 text-#000000 lg:py-5 px-20 py-4">
//         <div className="lg:flex md:flex lg: items-center justify-end font-normal hidden">
//           <div className="flex-10">
//             <ul className="flex gap-8 mr-16 text-[18px]">
//               <Link spy={true} smooth={true} to="Dashboard">
//                 <li className="hover:text-white transition hover:border-white cursor-pointer">
//                   Dashboard
//                 </li>
//               </Link>
//               <Link spy={true} smooth={true} to="Welcome">
//                 <li className="hover:text-white transition hover:border-white cursor-pointer">
//                   Welcome
//                 </li>
//               </Link>
//               <Link spy={true} smooth={true} to="ListStop">
//                 <li className="hover:text-white transition hover:border-white cursor-pointer">
//                   ListStop
//                 </li>
//               </Link>
//               <Link spy={true} smooth={true} to="Deliveries">
//                 <li className="hover:text-white transition hover:border-white cursor-pointer">
//                   Deliveries
//                 </li>
//               </Link>
//               <Link spy={true} smooth={true} to="Navigation">
//                 <li className="hover:text-white transition hover:border-white cursor-pointer">
//                   Navigation
//                 </li>
//               </Link>
//             </ul>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <button className="block sm:hidden transition" onClick={handleClick}>
//             {click ? <FaTimes /> : <CiMenuFries />}
//           </button>
//         </div>
//         <div className="flex items-center">
//           <FaShoppingCart className="text-2xl mr-4" />
//           <FaBell className="text-2xl" />
//         </div>
//       </div>
//       {click && (
//         <div className="lg:hidden block absolute top-6 w-full left-0 right-0 bg-yellow transition">
//           <ul className="text-center text-xl p-20">
//             <Link spy={true} smooth={true} to="Dashboard">
//               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded">
//                 Dashboard
//               </li>
//             </Link>
//             <Link spy={true} smooth={true} to="Welcome">
//               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded">
//                 Welcome
//               </li>
//             </Link>
//             <Link spy={true} smooth={true} to="ListStop">
//               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded">
//                 ListStop
//               </li>
//             </Link>
//             <Link spy={true} smooth={true} to="Deliveries">
//               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded">
//                 Deliveries
//               </li>
//             </Link>
//             <Link spy={true} smooth={true} to="Navigation">
//               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded">
//                 Navigation
//               </li>
//             </Link>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormGroup from "@mui/material/FormGroup";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";

// const Navbar = () => {
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Photos
//           </Typography>
//           <FormGroup>
//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={auth}
//                   onChange={handleChange}
//                   aria-label="login switch"
//                 />
//               }
//               label={auth ? "Logout" : "Login"}
//             />
//           </FormGroup>
//           <div>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleMenu}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={open}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>Profile</MenuItem>
//               <MenuItem onClick={handleClose}>My account</MenuItem>
//             </Menu>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Navbar;
