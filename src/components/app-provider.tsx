"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { ThemeProvider } from "@/context/theme-context";


export function AppProviders({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>

                {children}
                {/* Devtools (solo en desarrollo) */}
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </QueryClientProvider>
        </ThemeProvider>
    );
}