import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../ui';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        type: 'text',
        placeholder: 'Enter text...',
    },
    argTypes: {
        type: {
            control: 'select',
            options: [
                'text',
                'password',
                'email',
                'number',
                'search',
                'tel',
                'url',
            ],
        },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter your password',
    },
};

export const Email: Story = {
    args: {
        type: 'email',
        placeholder: 'Enter your email',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: 'Disabled input',
    },
};

export const WithCustomClass: Story = {
    args: {
        className: 'border-red-500',
        placeholder: 'Input with custom class',
    },
};
