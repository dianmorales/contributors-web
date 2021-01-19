import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}
// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#000000",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import DialogContent from "@material-ui/core/DialogContent";
import Avatar from "@material-ui/core/Avatar";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { blue, yellow, green } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
 import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import StarIcon from "@material-ui/icons/Star";

import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { ListItemSecondaryAction, Tooltip } from "@material-ui/core";

import Badge from "@material-ui/core/Badge";
import { green500 } from "material-ui/styles/colors";

const generateImage = (id) =>
  `https://avatars3.githubusercontent.com/u/${id}?s=120&v=4`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4B5E40",
    },
    secondary: {
      main: "#808a79",
    },
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    medium: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    }, 
    starColor: {
      color: yellow[500],
    },
    archived: {
      opacity: `0.4`,
    },
    emojiEvent: {
      color: green[800],
    },
  })
);

const StyledBadge = withStyles((theme) => ({
  badge: {
    
    right: -3,
    top: 8,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Contributors = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      allExample {
        edges {
          node {
            userId
            url
            contributions
            repositories {
              contributions
              name
              full_name
              html_url
              description
              watchers
              staergezers
              archived
            }
          }
        }
      }
    }
  `);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const contributors = gatsbyRepoData.allExample.edges;

  const handleClickOpen = (item) => {
    setUser(item);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setUser(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex", width: "100%", flexFlow: "wrap" }}>
          {contributors.map((item) => {
            return (
              <div
                style={{ flex: "auto" }}
                key={item.node.url}
                style={{ cursor: "pointer", margin: "10px" }}
                onClick={() => handleClickOpen(item)}
              >
                <Avatar
                  src={generateImage(item.node.userId)}
                  alt={item.node.url}
                  className={classes.large}
                />
              </div>
            );
          })}
        </div>
        {user && (
          <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
          >
            <DialogTitle id="simple-dialog-title">
              <Grid
                container
                alignContent="center-flex"
                alignItems="center"
                justify="center"
              >
                <Grid item item lg="3" md="3" sm="3">
                  <a
                    href={"https://github.com/" + user.node.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Avatar
                      src={generateImage(user.node.userId)}
                      alt={user.node.url}
                      className={classes.medium}
                    />
                  </a>
                </Grid>
                <Grid item lg="6" md="6" sm="6">
                  <Typography variant="h6">{user.node.url}</Typography>
                </Grid>
                <Grid item item lg="2" md="2" sm="2">
                
                  <Chip
                    icon={<EmojiEventsIcon className={classes.emojiEvent} />}
                    label={user.node.contributions}
                    color="default"
                  />   
                </Grid>
              </Grid>
            </DialogTitle>

            <DialogContent>
              <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                  {user.node.repositories.map((repo) => {
                    return (
                      <ListItemLink
                        className={repo.archived ? classes.archived : ""}
                        key={repo.name}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ListItemIcon>
                          <Badge
                            badgeContent={repo.contributions}
                            color="green"
                            max={9999}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                          >
                            <MergeTypeIcon />
                          </Badge>
                        </ListItemIcon>
                        <Tooltip title={repo.archived ? "archived" : ""}>
                          <ListItemText
                            primary={
                              <Typography color="primary">
                                {repo.name}
                              </Typography>
                            }
                            secondary={
                              <Typography color="secondary" variant="body2">
                                {repo.description}
                              </Typography>
                            }
                          />
                        </Tooltip>
                        <ListItemSecondaryAction
                          className={repo.archived ? classes.archived : ""}
                        >
                          <a
                            href={
                              "https://github.com/" +
                              repo.full_name +
                              "/stargazers"
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <IconButton edges="end" aria-label="delete">
                              <StyledBadge badgeContent={repo.staergezers} max={999}>
                                <StarIcon className={classes.starColor} />
                              </StyledBadge>
                            </IconButton>
                          </a>
                        </ListItemSecondaryAction>
                      </ListItemLink>
                    );
                  })}
                </List>
              </div>
              {/* {JSON.stringify(user.node.repositories, null, 2)} */}
            </DialogContent>
          </Dialog>
        )}
      </ThemeProvider>
    </>
  );
};

export default Contributors;
