import React from "react";

export default function Footer(){
    return(
        <footer className="page-container flex justify-center lg:mb-8 md:mb-6 mb-4">
            <p>&copy; Jessica Tidd {new Date().getFullYear()}</p>
        </footer>
    );
}
