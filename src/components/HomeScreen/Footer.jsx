const Footer = () => {
  return (
    <footer className="py-8 border-t border-zinc-800 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Md. Naimur Rahman. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
