import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DialogModal from './DialogModal';
import { Button } from '../ui';

export default {
    title: 'Components/DialogModal',
    component: DialogModal,
    tags: ['autodocs'],
    args: {
        title: 'Dialog Title',
        description: 'This is a description for the dialog.',
        content: <div>Dialog Content</div>,
        triggerCta: <Button>Open Dialog</Button>,
        showCloseCta: true,
    },
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        showCloseCta: { control: 'boolean' },
        onSave: { action: 'onSave' },
        content: { control: false },
        triggerCta: { control: false },
    },
} as Meta<typeof DialogModal>;

type Story = StoryObj<typeof DialogModal>;

export const Default: Story = {
    args: {},
};

export const WithoutDescription: Story = {
    args: {
        description: undefined,
    },
};

export const WithoutCloseButton: Story = {
    args: {
        showCloseCta: false,
    },
};

export const CustomContent: Story = {
    args: {
        content: <div>Custom content goes here.</div>,
    },
};
