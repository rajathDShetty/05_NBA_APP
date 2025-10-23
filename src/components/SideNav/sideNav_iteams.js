import FontAwesome from 'react-fontawesome';
import '../../css/sideNavIteams.css';

const SideNav_item = () => {
    const items = [
        {
            type: 'option',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: 'option',
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: 'option',
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: 'option',
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]
    return(items.map((item,i) => {
                return(
                    <div key={i} className={item.type}>
                    <a href={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </a>
                </div>
                );
            })
    );
}

export default SideNav_item;