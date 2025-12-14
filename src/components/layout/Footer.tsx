export default function Footer() {
    return (
        <footer className="py-12 border-t" style={{ borderColor: 'var(--border)' }}>
            <div className="container-custom flex justify-between items-center">
                <p className="text-small">© 2025 Yuval Ishay</p>
                <div className="flex gap-4">
                    <a href="#" className="text-small hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="text-small hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="text-small hover:text-foreground transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
}
