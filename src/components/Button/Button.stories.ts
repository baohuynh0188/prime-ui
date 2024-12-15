import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Component/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        children: 'Button',
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        variant: 'default',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
};

export const Icon: Story = {
    args: {
        variant: 'outline',
        size: 'icon',
        children: '1',
    },
};
