import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import logo from '../logo.png'
import '../css/Drawer.css'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  fontType: {

  }
})

const Drawer = (props) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false
  })

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const handleClick = (index) => {
    console.log(props.refs[index])
    if(index < 3) {
      props.refs[index].current.scrollIntoView(false)
    }
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <img src={logo} className="drawer-logo" alt="logo" />
      <Divider />
      <List>
        {props.links.map((text, index) => (
          <ListItem button key={text} onClick={() => {handleClick(index)}}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div className='bars-button'>
      <Button onClick={toggleDrawer('right', true)}>
        <IconContext.Provider value={{size:'2.5em'}}>
          <FaBars />
        </IconContext.Provider>
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  )
}

export default Drawer
