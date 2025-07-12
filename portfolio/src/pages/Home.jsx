import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from 'styled-components';

export default function Home() {
    return (
        <Page>
            <Header />
            <Body>
                {/* Things go here. */}
            </Body>
            <Footer />
            <Page />
        </Page>
    )
}

const Page = styled('article')`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    min-height: 100vh;
`

const Body = styled('section')`
    flex-direction: column;
    flex-grow: 1;
    display: flex;
`
