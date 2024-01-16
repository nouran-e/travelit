import '../styles/Login.scss';

export default function AccountLinks (props) {
    return (
        <>
         <p className="account-links">{props.accountText}<Link to={props.accountlink}>{props.accountLinkText}</Link></p>

        </>
    )
}