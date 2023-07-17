import { PublicClient, usePublicClient } from "wagmi";
import { type HttpTransport } from 'viem'
import { FallbackProvider, JsonRpcProvider } from 'ethers'
import { useMemo } from "react";

export function publicClientToProvider(publicClient: PublicClient) {
    let { chain, transport } = publicClient;
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address
    }

    if (transport.type === 'fallback') {
        const providers = (transport.transports as ReturnType<HttpTransport>[]).map(
            ({ value }) => new JsonRpcProvider(value?.url, network)
        )
        if (providers.length === 1) return providers[0]
        return new FallbackProvider(providers)
    }
    return new JsonRpcProvider(transport.url, network)
}

export function useEthers({ chainId }: { chainId?: number } = {}) {
    const publicClient = usePublicClient({ chainId })
    return useMemo(() => publicClientToProvider(publicClient), [publicClient])
}