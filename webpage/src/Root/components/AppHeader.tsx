import { Link } from "react-router";

type Props = {
    baseUrl: string;
};

export function AppHeader({ baseUrl }: Props) {
    return (
        <header id="header">
            <div className="inner">
                <Link to="/" className="logo">
                    <span className="symbol">
                        <img src={`${baseUrl}images/logo.svg`} alt="" />
                    </span>
                    <span className="title">Digital Skills Academy</span>
                </Link>
            </div>
        </header>
    );
}
