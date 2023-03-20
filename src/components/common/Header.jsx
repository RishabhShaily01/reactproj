const header = (props) =>
{
    return (
        <div className={props.bgClass}>
            <div className="text-conent">
                <h1 className="header-title">{props.title}</h1>
                {props.children}
            </div>
        </div>
    )
}
export default header;