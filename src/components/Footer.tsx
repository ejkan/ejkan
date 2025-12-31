const Footer = () => {
    return (
        <footer className="w-full py-4 text-center mt-auto animate-fade-in animate-delay-400">
            <div className="inline-block px-6 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-sm text-sm text-gray-600 font-['Krub']">
                <p className="mb-1">
                    ขับเคลื่อนโดย
                    <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="font-bold text-pink-500 mx-1 hover:text-pink-600 transition-colors">React</a>
                    เเละ
                    <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-500 mx-1 hover:text-purple-600 transition-colors">Vite</a>
                </p>
                <p>
                    ให้บริการโดย
                    <a href="https://github.com/pages" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 mx-1 hover:text-black transition-colors">GitHub Pages</a>
                </p>
            </div>
        </footer>
    );
}
export default Footer;
