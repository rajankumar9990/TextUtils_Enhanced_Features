import React from 'react';

export default function Footer(myStyle) {
    return (
        <footer className="text-center mt-4 p-3"  style={myStyle}>
            <p>
                © {new Date().getFullYear()} TextUtils | All rights reserved.
            </p>
            <p>
             <a href="https://github.com/rajankumar9990" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> <strong style={{ color: "black" }}>Rajan Kumar Gupta</strong> </a>
            </p>
        </footer>
    );
}
