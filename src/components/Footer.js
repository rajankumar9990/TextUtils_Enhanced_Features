import React from 'react';

export default function Footer() {
    return (
        <footer className="text-center mt-4 p-3" style={{ backgroundColor: "#f8f9fa", color: "#333" }}>
            <p>
                © {new Date().getFullYear()} TextUtils | All rights reserved.
            </p>
            <p>
             <a href="https://github.com/rajankumar9990" target="_blank" rel="noopener noreferrer">Rajan Kumar Gupta</a>
            </p>
        </footer>
    );
}
