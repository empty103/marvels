import React, { useState, useEffect } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

function ErrorBoundary({ children }) {
    const [error, setError] = useState(false);

    useEffect(() => {
        const componentDidCatch = () => {
            setError(true);
        };

        window.addEventListener("error", componentDidCatch);
        return () => window.removeEventListener("error", componentDidCatch);
    }, []);

    if (error) {
        return <ErrorMessage />;
    }

    return children;
}

export default ErrorBoundary;
