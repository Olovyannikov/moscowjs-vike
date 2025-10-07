import type { PropsWithChildren } from 'react';
import { MantineProvider as Provider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import './index.css';

export function MantineProvider({ children }: PropsWithChildren) {
    return (
        <Provider>
            <Notifications />
            {children}
        </Provider>
    );
}