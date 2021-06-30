import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  Box,
  CardMedia,
  Container,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import mhero from "./images/mobile/image-hero.jpg";
import dhero from "./images/desktop/image-hero.jpg";
import minteractive from "./images/mobile/image-interactive.jpg";
import dinteractive from "./images/desktop/image-interactive.jpg";
import OurMedia from "./ourmedia";
import logo from "./images/logo.svg";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: "650px",
    width: "100%",
  },
  hero: {
    position: `absolute`,
    top: `2.5rem`,
    height: `700px`,
    padding: 0,
    width: "92.28%",
    marginLeft:'1rem',
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginLeft: "7.89rem",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width:'87%',
      marginLeft: "2.5rem",
      marginRight:'auto',
    },
  },
  content: {
    [theme.breakpoints.up("md")]: {
      width: '80%',
      padding:0,
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "92.28%",
      padding: 0,
    },
  },
  herocontent: {
    [theme.breakpoints.up("md")]: {
      width: "34rem",
      fontSize: "4.8rem",
      marginTop: "8.5rem",
    },
  },
  tool: {
    padding: 0,
  },
  interact: {
    width:'100%',
    [theme.breakpoints.between("md",'lg')]: {
      width: "60%",
      height:'386px',
      padding: 0,
    },
   
  },
  intact: {
    [theme.breakpoints.up("md")]: {
      display: "inline-flex",
      padding: 0,
      margin: "6rem 0 0 0",
      width: "92.8%",
    },
  },
  intcont: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "50%",
      marginLeft: "27rem",
      background: "white",
      marginTop: "7.8rem",
    },
  },
  inthead: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "4rem",
      fontSize: "2.5rem",
      textAlign: "left",
    },
  },
  intsubhead: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
      paddingLeft: "4rem",
      textAlign: "left",
      lineHeight: "1.5rem",
    },
  },
  crt: {
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      marginTop: "9rem",
      display: "inline-flex",
      width: "100%",
    },
  },
  btn: {
    width: "10rem",
    border: "2px solid black",
    borderRadius: 0,
    marginTop: "-1rem",
  },
  bbtn: {
    width: '60%',
    textAlign: 'end',
    [theme.breakpoints.between('sm','md')]: {
      width:'55%',
    }
  },
  logo: {
    [theme.breakpoints.up("md")]: {
      display: "inline-flex",
      width: "80%",
    },
  },
  ftricon: {
    marginTop: "3rem",
    [theme.breakpoints.up("md")]: {
      margin: "0",
      width: "100%",
      textAlign: "end",
    },
  },
  caption: {
    display: 'inline-flex',
    color: 'secondary',
    [theme.breakpoints.down('sm')]: {
      display:'block',
    }
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#616161",
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
  },
  overrides: {
    MuiPaper: {
      elevation4: {
        boxShadow: "0",
      },
      root: {
        backgroundColor: "black",
      },
    },
    MuiAppBar: {
      root: {
        marginTop: "1.5em",
      },
    },
    MuiDrawer: {
      paper: {
        width: "100%",
      },
    },
    MuiButtonBase: {
      root: {
        color: "#ffffff",
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
      },
    },
    MuiToolbar: {
      gutters: {
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
});

const app = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Hidden smDown>
        <CardMedia className={classes.media} image={dhero} />
      </Hidden>
      <Hidden mdUp>
        <CardMedia className={classes.media} image={mhero} />
      </Hidden>
      <Container className={classes.hero}>
        <Toolbar className={classes.tool}>
          <Box className={classes.title}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "192px", height: "32px" }}
            />
          </Box>
          <Hidden smDown>
            <nav>
              <Box fontFamily="Josefin Sans">
                <Button color="primary" href="/">
                  About
                </Button>
                <Button color="primary" disableRipple href="#">
                  Careers
                </Button>
                <Button color="primary" disableRipple href="#">
                  Events
                </Button>
                <Button color="primary" disableRipple href="#">
                  Products
                </Button>
                <Button color="primary" disableRipple href="#">
                  Support
                </Button>
              </Box>
            </nav>
          </Hidden>

          <Hidden mdUp>
            <IconButton color="primary" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={handleClick}>
              <div onKeyDown={handleClick} onClick={handleClick}>
                <AppBar position="relative" color="transparent">
                  <Toolbar>
                    <Typography
                      color="primary"
                      variant="h4"
                      className={classes.title}
                    >
                      <Box fontWeight={600} ml={2}>
                        loopstudio
                      </Box>
                    </Typography>
                    <IconButton
                      className={classes.menuButton}
                      color="primary"
                      aria-label="menu"
                      onClick={handleClick}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Typography
                  component="div"
                  color="primary"
                  variant="h3"
                  style={{ marginTop: "7rem" }}
                >
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    About
                  </Box>
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    Carrer
                  </Box>
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    Events
                  </Box>
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    Products
                  </Box>
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    Support
                  </Box>
                </Typography>
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
        <Box
          component="header"
          border={2}
          borderColor="white"
          color="white"
          fontFamily="Josefin Sans"
          fontSize="3.5rem"
          mt="2.8em"
          pl="2.8rem"
          textAlign="left"
          className={classes.herocontent}
        >
          Immersive Experiences That Deliver
        </Box>
      </Container>
      <Container className={classes.content}>
        <Box mt="6rem" className={classes.intact}>
          <img
            alt="man"
            src={minteractive}
            className={classes.interact}
          />
          <Box className={classes.intcont}>
            <Box
              component="header"
              fontFamily="Josefin Sans"
              fontSize="3rem"
              textAlign="center"
              mt="3rem"
              className={classes.inthead}
            >
              THE LEADER IN INTERACTIVE VR
            </Box>
            <Box
              mt="1rem"
              textAlign="center"
              fontFamily="Josefin Sans"
              fontWeight="400"
              fontSize="1.3rem"
              color="gray"
              mx="2rem"
              lineHeight="2rem"
              mb="2rem"
              className={classes.intsubhead}
            >
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </Box>
          </Box>
        </Box>
        <Box
          component="header"
          mt="6rem"
          textAlign="center"
          fontSize="3rem"
          className={classes.crt}
        >
          OUR CREATIONS
          <Hidden smDown>
            <Box className={classes.bbtn}>
              <Button className={classes.btn}>See All</Button>
            </Box>
          </Hidden>
        </Box>
        <Box mt="2rem" mb="5rem">
          <OurMedia />
        </Box>
      </Container>

      <Box
        style={{ background: "#000000", color: "#ffffff" }}
        pb="3rem"
        pt={5}
        textAlign="center"
        fontFamily="Josefin Sans"
        fontWeight={300}
        width="100%"
        className={classes.footer}
      >
        <Box className={classes.logo}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "192px", height: "32px" }}
          />
          <Hidden mdUp>
            <Box fontWeight={600} mt={3}>
              About
            </Box>
            <Box fontWeight={600} mt={3}>
              Carrer
            </Box>
            <Box fontWeight={600} mt={3}>
              Event
            </Box>
            <Box fontWeight={600} mt={3}>
              Product
            </Box>
            <Box fontWeight={600} mt={3}>
              Support
            </Box>
          </Hidden>
          <Box className={classes.ftricon}>
            <img
              src={facebook}
              alt="facebook"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            <img
              src={instagram}
              alt="instagram"
              style={{
                marginLeft: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
            <img
              src={pinterest}
              alt="pinterest"
              style={{
                marginLeft: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
            <img
              src={twitter}
              alt="twitter"
              style={{
                marginLeft: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          </Box>
        </Box>
        <Box display=" inline-flex" width="61%">
          <Hidden smDown>
            <Box fontWeight={600} mt={3}>
              About
            </Box>
            <Box fontWeight={600} mt={3} ml={3}>
              Carrer
            </Box>
            <Box fontWeight={600} mt={3} ml={3}>
              Event
            </Box>
            <Box fontWeight={600} mt={3} ml={3}>
              Product
            </Box>
            <Box fontWeight={600} mt={3} ml={3}>
              Support
            </Box>
          </Hidden>
        </Box>
        <Box className={classes.caption}>
          2021 loopstudios. All rights reserved
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default app;
