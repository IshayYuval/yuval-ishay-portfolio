import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-12">
            <div className="container-custom flex justify-between items-center">
                <p className="text-small">© 2025 Yuval Ishay</p>
                <div className="flex gap-4 items-center">
                    <a href="https://www.instagram.com/yuvalishay.art" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6 invert" />
                    </a>
                    <a href="https://www.linkedin.com/in/yuvalishay-art" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6 invert" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
