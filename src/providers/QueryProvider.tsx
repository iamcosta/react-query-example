import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";


export function QueryProvider({ children }: PropsWithChildren) {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  })

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}