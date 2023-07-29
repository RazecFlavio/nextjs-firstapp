import Head from "next/head";
import Link from "../src/components/Link"

// getServerSideProps -> roda a cada acesso
export async function getStaticProps() { //Roda apenas no build
    const FQA_url = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const faq = await fetch(FQA_url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })

    return {
        props: {
            faq
        }
    }
}

export default function FAQPage({ faq }) {
    return (
        <>
            <Head><title>FAQ</title></Head>
            <h1>Páginas de Perguntas - FAQ</h1>
            <ul>
                {
                    faq.map(({ question, answer }, index) => {
                        return (
                            <li key={index}>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <Link href="/">Ir para HOME</Link>
        </>
    )
}