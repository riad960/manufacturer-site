import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HandymanIcon from "@mui/icons-material/Handyman";
import { Link, useNavigate } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";
import { CartContext } from "../Cart/CartContext";
import useAdmin from "../Hooks/useAdmin";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  // redirect to login

  const redirectToLogin = () => {
    navigate("/login");
  };
  // user existance
  const [user, loading, error] = useAuthState(auth);
  const [cartItems, setCartItems] = React.useContext(CartContext);
  // logOut handle
  const handleLogOut = () => {
    signOut(auth);
    localStorage.removeItem("accesToken");
    navigate("/");
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // redirect to cart
  const navigate = useNavigate();
  const redirectToCart = () => {
    navigate("/cart");
  };
  // checking admin
  const [admin] = useAdmin(user);

  return (
    <AppBar position="static" style={{ backgroundColor: "" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HandymanIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            as={Link}
            variant="h6"
            noWrap
            component="a"
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ProTool
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link style={{ width: "100%" }} className="px-5 " to="/">
                    HOME
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ width: "100%" }}
                    className="px-5 "
                    to="/products"
                  >
                    PRODUCTS
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ width: "100%" }}
                    className="px-5 "
                    to="/portfolio"
                  >
                    PORTFOLIO
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link style={{ width: "100%" }} className="px-5 " to="/blog">
                    BLOG
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <HandymanIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            as={Link}
            variant="h5"
            noWrap
            component="a"
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ProTool
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/">HOME</Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/products">PRODUCTS</Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/portfolio">PORTFOLIO</Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/blog">BLOG</Link>
            </Button>
          </Box>
          {!admin && (
            <div className="mx-2">
              <Badge badgeContent={cartItems?.length} color="secondary">
                <IconButton
                  onClick={redirectToCart}
                  style={{ color: "#fff" }}
                  variant="contained"
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Badge>
            </div>
          )}
          <div>
            {!user ? (
              <Button
                onClick={redirectToLogin}
                variant="contained"
                endIcon={<LockOpenIcon />}
              >
                Login
              </Button>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Dashboard">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button
                      variant="contained"
                      style={{
                        width: "100%",
                        margin: "0 auto",
                      }}
                    >
                      Dashboard
                    </Button>
                  </MenuItem>
                  {!admin && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ width: "100%" }}
                        className="px-12"
                        to="/profile"
                      >
                        Profile
                      </Link>
                    </MenuItem>
                  )}

                  {!admin && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ width: "100%" }}
                        className="px-12"
                        to={`/myOrder/${user.email}`}
                      >
                        My Orders
                      </Link>
                    </MenuItem>
                  )}
                  {admin && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ width: "100%" }}
                        className="px-12"
                        to={"/addItems"}
                      >
                        Add Items
                      </Link>
                    </MenuItem>
                  )}
                  {admin && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ width: "100%" }}
                        className="px-12"
                        to={"/users"}
                      >
                        Manage Users
                      </Link>
                    </MenuItem>
                  )}
                  {admin && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ width: "100%" }}
                        className="px-12"
                        to={"/manageItems"}
                      >
                        Manage Items
                      </Link>
                    </MenuItem>
                  )}
                  {admin && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ width: "100%" }}
                        className="px-12"
                        to={"/manageOrder"}
                      >
                        Manage Orders
                      </Link>
                    </MenuItem>
                  )}
                  {!admin && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ width: "100%" }}
                        className="px-12"
                        to="/addReview"
                      >
                        Add Review
                      </Link>
                    </MenuItem>
                  )}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button
                      onClick={handleLogOut}
                      variant="contained"
                      style={{
                        background: "#f50057",
                        width: "60%",
                        margin: "0 auto",
                      }}
                    >
                      LogOut
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
