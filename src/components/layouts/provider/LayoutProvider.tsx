"use client";

import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

type LayoutContextProps = {
    headerTitle: ReactNode;
    setHeaderTitle: (title: ReactNode) => void;
};

const LayoutContext = createContext<LayoutContextProps | null>(null);

export function useLayout() {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout must be used within a LayoutProvider");
    }
    return context;
}

export function LayoutProvider({ children }: { children: React.ReactNode }) {
    const [headerTitle, setHeaderTitleState] = useState<ReactNode>("");

    const setHeaderTitle = useCallback((title: ReactNode) => {
        setHeaderTitleState(title);
    }, []);

    const contextValue = useMemo<LayoutContextProps>(
        () => ({
            headerTitle,
            setHeaderTitle,
        }),
        [headerTitle, setHeaderTitle]
    );

    return <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>;
}
