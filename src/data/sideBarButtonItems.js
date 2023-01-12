import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LabelIcon from '@mui/icons-material/Label';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const sideBarButtonItems=[{
    icon: <InboxIcon/>,
    text: 'Inbox'
},
{
    icon:<StarBorderPurple500Icon/>,
    text:'Starred'
},
{
    icon:<WatchLaterIcon/>,
    text:'Snoozed'
},
{
    icon:<SendIcon/>,
    text:'Sent'
},
{
    icon:<InsertDriveFileIcon/>,
    text:'Drafts'

},
{
    icon:<LabelIcon/>,
    text:'Categories'
},
{
    icon:<ExpandMoreIcon/>,
    text:'More'
}]