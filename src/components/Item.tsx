interface ListItemProps{
    name: string
    url: string
}

function ListItem(props: ListItemProps){
    return(
        <li className="border">
            <h3><a target="_blank" href={props.url}>{props.name}</a></h3>
        </li>
    )
}

export default ListItem;