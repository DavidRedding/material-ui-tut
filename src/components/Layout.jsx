import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
} from '@material-ui/core';
import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons/';
import { useHistory, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      minHeight: '95vh',
      padding: theme.spacing(3),
    },

    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    date: {
      marginRight: `auto`,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const menuItems = [
    { text: 'My Notes', icon: <SubjectOutlined color="secondary" />, path: '/' },
    { text: 'Jot a Note', icon: <AddCircleOutlineOutlined color="secondary" />, path: '/create' },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do')} of {format(new Date(), 'MMMM Y')}
          </Typography>
          <Typography>Jemelle</Typography>
          <Avatar src="/mario-av.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <Drawer
        open
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            JotNotes
          </Typography>
        </div>

        {/* {list / links} */}
        <List component="nav">
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              className={location.pathname === item.path ? classes.active : null}
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
