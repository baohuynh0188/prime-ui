import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

describe.only('Button Component', () => {
    // Test default render
    test('renders button with default props', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('inline-flex items-center justify-center');
    });

    // Test variants
    test.each([
        { default: 'bg-primary' },
        { secondary: 'bg-secondary' },
        { destructive: 'bg-destructive' },
        { ghost: 'hover:bg-accent hover:text-accent-foreground ' },
        { link: 'text-primary' },
        { outline: 'border border-input bg-background shadow-sm' },
    ])('renders %s variant correctly', (variant) => {
        const variantKey = Object.keys(variant)[0] as
            | 'default'
            | 'secondary'
            | 'destructive'
            | 'ghost'
            | 'link'
            | 'outline';
        render(<Button variant={variantKey}>Button</Button>);
        const button = screen.getByRole('button');
        if (variant[variantKey]) {
            expect(button).toHaveClass(variant[variantKey] as string);
        }
    });

    // Test click handler
    test('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Test disabled state
    test('is disabled when disabled prop is true', () => {
        render(<Button disabled>Disabled Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    // Test with children
    test('renders children correctly', () => {
        render(
            <Button>
                <span>Child Element</span>
            </Button>
        );
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Child Element');
    });
});
