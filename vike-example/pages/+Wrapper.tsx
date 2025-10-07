import type { PropsWithChildren } from 'react';
import { NavigationProgress } from '@mantine/nprogress';

import { MantineProvider } from '@/app/providers';

import { EffectorProvider, ScopeProvider } from '@/shared/lib';

export default function Wrapper({ children }: PropsWithChildren) {
    return (
        <MantineProvider>
            <NavigationProgress aria-label='Navigation' color='violet' />
            <ScopeProvider>
                <EffectorProvider>{children}</EffectorProvider>
            </ScopeProvider>
        </MantineProvider>
    );
}