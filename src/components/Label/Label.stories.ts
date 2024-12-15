import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../ui';

const meta = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        children: { control: 'text' },
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default Label',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled Label',
        className: 'peer-disabled',
    },
};
