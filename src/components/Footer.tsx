import "tailwindcss";

const footerStyle = {
    color: "hsl(351, 80%, 80%)",
    marginTop: ".5rem",
    marginBottom: ".5rem",
    fontFamily: "Krub",
    fontWeight: "500",
    fontSize: "1rem",
} as const;

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>ขับเคลื่อนโดย <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={{color: "hsl(351, 78%, 71%)", fontWeight: "700"}}>React</a> เเละ  <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" style={{color: "hsl(351, 78%, 71%)", fontWeight: "700"}}>Vite</a></p>
            <p>ให้บริการโดย <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{color: "hsl(351, 78%, 71%)", fontWeight: "700"}}>Vercel</a></p>
        </footer>
    );
}
export default Footer;