/** @jsx h */
import { h } from "../../deps.ts";
import Footer from "./footer.tsx";
import Navigation from "./navigation.tsx";

export default function Main(props: { body: any; currentPath: string; }) {
    const {
        body,
        currentPath
    } = props;

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#89CAED" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Home - Alan Chandler</title>

                <link rel="shortcut icon" type="image/x-icon" href="/public/images/favicon.png" />
                <link rel="stylesheet" type="text/css" href="/css/main.css" />
            </head>

            <body>
                <Navigation currentPath={currentPath} />
                {body}
                <Footer />
            </body>

        </html>
    );
}