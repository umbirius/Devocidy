import {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NavTab from '../UI/NavTab';
import LogoLink from '../UI/LogoLink';

const useStyles = makeStyles((theme) => ({
	main: {
		backgroundColor: theme.palette.primary.light,
		display: 'flex',
		flexDirection: 'column',
		position: 'fixed',
	},
	tabs: {
		flex: 1,
		bottom: 0,
		paddingLeft: theme.spacing(0),
	},
  div:{
    margin: theme.spacing(4)
  }
}));

const NavBar = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<AppBar position='static' color='primary' className={classes.main}>
				<Tabs className={classes.tabs}>
					<NavTab name={''} pathname='' bool={true} />
					<LogoLink />
					<NavTab name={'Groups'} pathname={'/groups'} bool={false} />
				</Tabs>
			</AppBar>
      <div className={classes.div} />
		</Fragment>
	);
};

export default NavBar;
