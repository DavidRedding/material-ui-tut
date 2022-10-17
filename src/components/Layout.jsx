import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { SubjectOutlined, InboxOutlined, DraftsOutlined, AddCircleOutlineOutlined } from '@material-ui/icons/';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: '#f4f4f4',
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const menuItems = [
    { text: 'My Notes', icon: <SubjectOutlined color="secondary" />, path: '/' },
    { text: 'Create Note', icon: <AddCircleOutlineOutlined color="secondary" />, path: '/create' },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        open
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">JotNotes</Typography>
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

      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
