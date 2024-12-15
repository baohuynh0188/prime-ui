import { Meta, StoryObj } from '@storybook/react';
import ToasterCta from './ToasterCta';

const meta = {
    title: 'Components/ToastCta',
    component: ToasterCta,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        variant: {
            control: 'select',
            options: ['default', 'destructive'],
        },
        ctaVariant: {
            control: 'select',
            options: [
                'destructive',
                'default',
                'secondary',
                'outline',
                'ghost',
            ],
        },
    },
    args: { ctaVariant: 'default', label: 'Toast' },
    parameters: {},
} satisfies Meta<typeof ToasterCta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Toast: Story = {
    args: {
        title: 'Shadcn-ui',
        description: 'like shadcn-ui',
    },
};
export const ToastStyleDestructive: Story = {
    args: {
        title: 'Shadcn-ui',
        description: 'not like shadcn-ui',
        variant: 'destructive',
    },
};

export const ToastNotDescription: Story = {
    args: {
        title: 'Shadcn-ui',
    },
};

export const ToastNotTitle: Story = {
    args: {
        description: 'like shadcn-ui',
    },
};
